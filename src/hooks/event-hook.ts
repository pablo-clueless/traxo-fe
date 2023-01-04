import { RefObject } from 'react'

export const useEventListener = <K extends keyof DocumentEventMap>(
    eventName: K, handler: (e: DocumentEventMap[K]) => void, element?: RefObject<Document>, options?: boolean | AddEventListenerOptions
):void => {}