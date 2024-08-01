export default function AppleStoreBtn() {
	return (
		<>
			<a
				href='#'
				className='inline-flex h-16 min-w-44 items-center justify-start gap-2 whitespace-nowrap rounded-xl bg-slate-900 px-3.5 text-base font-semibold tracking-wide text-slate-50 transition duration-300 hover:bg-slate-950 focus:bg-slate-950 focus-visible:outline-none'
			>
				<svg
					width='40'
					height='40'
					className='h-10 w-10'
					viewBox='0 0 40 40'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					role='graphics-symbol'
					aria-label='App store icon'
				>
					<path
						d='M30.293 21.0245C30.2769 18.0748 31.6111 15.8485 34.3116 14.209C32.8006 12.047 30.518 10.8575 27.5041 10.6244C24.6509 10.3993 21.5325 12.2881 20.3912 12.2881C19.1856 12.2881 16.4208 10.7047 14.2508 10.7047C9.76604 10.7771 5 14.2813 5 21.4103C5 23.516 5.38578 25.6914 6.15735 27.9365C7.18611 30.8861 10.8993 38.1196 14.7732 37.999C16.7986 37.9508 18.2292 36.5603 20.8654 36.5603C23.4212 36.5603 24.7473 37.999 27.0058 37.999C30.9119 37.9427 34.2714 31.3683 35.2519 28.4106C30.0117 25.9432 30.293 21.1772 30.293 21.0245ZM25.7439 7.82744C27.9381 5.2234 27.7372 2.85243 27.6729 2.00049C25.7359 2.11301 23.4935 3.31859 22.2156 4.80546C20.8091 6.39682 19.9813 8.36593 20.1581 10.5842C22.2558 10.7449 24.1687 9.66795 25.7439 7.82744Z'
						fill='currentColor'
					/>
				</svg>
				<span className='flex flex-col text-sm font-normal lg:text-base'>
					Get it on Apple Store
				</span>
			</a>
		</>
	);
}
