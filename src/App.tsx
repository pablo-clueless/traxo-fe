import { Suspense, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { Footer, Loader, Login, Navbar } from 'components'
import { ErrorFallback } from 'components/ErrorFallback'
import { useAppContext, useAppDispatch } from 'hooks'
import Router from 'Router'
import { login } from 'store/slices/auth'

const App = () => {
	const { currentMode, isClicked } = useAppContext()
	const dispatch = useAppDispatch()

	useEffect(() => {
		const json = localStorage.getItem('traxo-user')
		if (!json) return
		const user = JSON.parse(json)
		dispatch(login(user))
	}, [])

	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallback}
			onReset={() =>
				typeof window !== undefined && window.location.reload()
			}>
			<div className={`w-screen ${currentMode === 'dark' ? 'dark' : ''}`}>
				<ToastContainer />
				<Navbar />
				<Suspense fallback={<Loader />}>
					<Router />
				</Suspense>
				<Footer />
				{isClicked.login && <Login />}
			</div>
		</ErrorBoundary>
	)
}

export default App
