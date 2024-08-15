import Image from 'next/image';

export default function SectionTwo() {
	return (
		<>
			<section>
				<div className='container m-auto mt-14 px-6 md:mt-24 lg:mt-32'>
					<div className='relative grid grid-cols-4 gap-10 md:grid-cols-8 md:gap-14 lg:grid-cols-12 lg:gap-20'>
						<div className='order-2 col-span-4 md:order-1 lg:col-span-6'>
							<p className='mb-5 w-fit bg-custom-green px-5 py-2 text-lg tracking-wide text-black md:text-2xl'>
								12 - 48 Hours response time
							</p>

							<p className='mb-5 text-xl font-semibold tracking-widest md:text-2xl lg:text-3xl'>
								<span className='font-bold'>Schedule when it works</span> for
								you as early as today
							</p>

							<p className='mb-5 text-sm font-medium tracking-wide md:text-xl lg:text-2xl'>
								Now is the time to find a schedule that fits your lifestyle! Get
								started today and make sure you stay on track-
							</p>

							<button className='inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-custom-green p-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-green-600 focus:bg-green-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300 disabled:shadow-none md:text-base'>
								<span>see how it works</span>
							</button>
						</div>

						<div className='relative order-1 col-span-4 md:order-2 lg:col-span-6'>
							<div className='col-span-4 lg:col-span-6'>
								<Image src='/sec2.png' width={600} height={10} alt='image' />
								<div className='absolute -left-24 top-72 hidden h-[150px] w-[30%] rounded-md border-[2.3px] bg-white p-5 shadow-2xl shadow-zinc-400 2xl:block'></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
