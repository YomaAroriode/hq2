export default function Search() {
	return (
		<>
			<div className='relative my-6 mt-10 flex flex-col items-center lg:flex-row'>
				{/* Search Icon */}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='absolute left-2 top-6 z-10 h-6 w-[1.4rem] -translate-y-1/2 transform cursor-pointer text-black'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth='1.5'
					aria-hidden='true'
					aria-label='Search icon'
					role='graphics-symbol'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
					/>
				</svg>

				{/* Search Input */}
				<input
					id='id-s04'
					type='search'
					name='id-s04'
					placeholder='I need help with...'
					aria-label='Search content'
					className='relative h-12 w-full rounded border border-slate-200 bg-[#D9D9D9] pl-10 pr-12 text-black placeholder-black outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400'
				/>

				{/* Button */}
				<button className='inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-custom-green px-6 text-sm font-bold tracking-wide text-black transition duration-300 hover:bg-green-400 focus:bg-green-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300 disabled:shadow-none lg:w-auto lg:text-base'>
					Get started today
				</button>
			</div>

			<div className='flex flex-wrap gap-3 md:gap-5'>
				{['Furniture Assembly', 'Home Repairs', 'Help Moving'].map(
					(item, index) => (
						<span
							key={index}
							className='inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-custom-green px-4 py-2 text-sm font-semibold text-black transition-colors duration-300 hover:bg-custom-green hover:text-black focus:outline-none focus:ring-2 focus:ring-custom-green focus:ring-offset-2'
						>
							{item}
						</span>
					)
				)}

				<span className='inline-flex items-center justify-center gap-1 rounded-full text-sm font-semibold text-black'>
					See more
				</span>
			</div>
		</>
	);
}
