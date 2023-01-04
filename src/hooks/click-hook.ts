import { RefObject } from 'react'

import { useEventListener } from './event-hook'

type Handler = (event: MouseEvent) => void

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: Handler,
    mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
):void => {
    useEventListener(mouseEvent, (event) => {
        const element = ref?.current
        if (!element || element.contains(event.target as Node)) return
        handler(event)
    })
}