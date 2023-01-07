type ErrorFallbackProps = {
	resetErrorBoundary: () => void
}

export const ErrorFallback = ({ resetErrorBoundary }: ErrorFallbackProps) => {
	return (
		<section className="flex flex-col items-center justify-center my-10">
			<div
				role="alert"
				className="text-center bg-red-100 py-8 px-2 md:px-14 rounded max-w-[60ch]">
				<h2 className="text-red-600 font-bold text-5xl">Oops!</h2>
				<div className="pt-4 text-gray-700">
					<p>
						It seems something went wrong, Sorry for the inconvenience.
					</p>
					<p>
						Our engineers have been informed and are working to fix it.
						Please reload the page to continue.
					</p>
				</div>

				{process.env.NODE_ENV !== 'production' ? (
					<p className="py-4 text-sm font-bold">
						Please check console for more information about the error.
					</p>
				) : null}

				<button
					onClick={resetErrorBoundary}
					className="mt-5 py-3 px-8 bg-red-600 text-white uppercase font-bold tracking-[3px] rounded text-xs transition-transform active:scale-95">
					Try again
				</button>
			</div>
		</section>
	)
}
