import Image from 'next/image';

export default function SectionThree() {
	return (
		<>
			<section>
				<div className='container m-auto mt-14 px-6 md:mt-24 lg:mt-32'>
					<div className='relative grid grid-cols-4 gap-10 md:grid-cols-8 md:gap-14 lg:grid-cols-12 lg:gap-20'>
						<div className='col-span-4 lg:col-span-6'>
							<Image src='/sec3.png' width={600} height={10} alt='image' />
						</div>

						<div className='col-span-4 mb-10 lg:col-span-6'>
							<p className='mb-5 w-fit bg-custom-yellow px-5 py-2 text-lg tracking-wide text-black md:text-2xl'>
								24/7 Customer Support
							</p>

							<p className='mb-5 text-xl font-semibold tracking-widest md:text-2xl lg:text-3xl'>
								Let us be a
								<span className='font-bold'> comforting presence </span>
								for your journey ahead!
							</p>

							<p className='mb-5 text-sm font-medium tracking-wide md:text-xl lg:text-2xl'>
								Our online customer support team is on hand to help you out -
								whatever the issue, day or night. We are here to make sure we
								exceed your expectations, and all your services requests are
								sorted out quickly!
							</p>

							<button className='inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-custom-yellow p-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-yellow-600 focus:bg-yellow-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300 disabled:shadow-none md:text-base'>
								<span>see how it works</span>
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
