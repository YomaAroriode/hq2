export default function PlayStoreBtn() {
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
					aria-label='Google play icon'
				>
					<path
						d='M21.9219 19.6222L27.8405 13.7036L8.72367 2.95928C7.45668 2.27475 6.26976 2.17868 5.22895 2.92726L21.9219 19.6222ZM28.8316 26.5339L34.9843 23.0732C36.1853 22.4007 36.8438 21.4479 36.8438 20.3911C36.8438 19.3363 36.203 18.3993 35.0041 17.7267L29.4337 14.5983L23.1452 20.8495L28.8316 26.5339ZM4.20016 4.38239C4.07206 4.7767 4 5.21704 4 5.69941V35.1322C4 35.8948 4.16813 36.5513 4.47237 37.0738L20.6789 20.8652L4.20016 4.38239ZM21.9219 22.1061L5.8054 38.2246C6.11364 38.3427 6.4459 38.4048 6.79617 38.4048C7.42065 38.4048 8.07116 38.2206 8.73367 37.8524L27.258 27.4503L21.9219 22.1061Z'
						fill='currentColor'
					></path>
				</svg>
				<span className='flex flex-col text-sm font-normal lg:text-base'>
					Get it on Google Play
				</span>
			</a>
		</>
	);
}
