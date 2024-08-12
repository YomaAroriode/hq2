import Image from 'next/image';

export default function SectionFour() {
	return (
		<>
			<section className='mt-10 px-6 md:mt-20 lg:mt-28'>
				<p className='text-center text-xl font-medium md:text-2xl lg:text-4xl'>
					<span className='font-bold'> Our featured SSP </span>
					(Soft Service Providers) can provide you with an efficient and
					convenient solution
				</p>

				<p className='text-xm mt-6 text-center md:text-base lg:text-xl'>
					Providers These Professional and hardworking individuals have made
					valuable contributions to the platform, providing quality services{' '}
					<br /> and consistently delivering exceptional results for their
					clients.
				</p>

				<div className='container mx-auto mt-14 px-5'>
					<div className='grid grid-cols-4 gap-20 md:grid-cols-8 md:gap-24 lg:grid-cols-12'>
						{[1, 2, 3].map((item, index) => {
							return (
								<div className='relative col-span-4' key={index}>
									<div className='overflow-hidden rounded bg-custom-black text-black shadow-md shadow-slate-500'>
										<div className='absolute bottom-5 right-8 -z-50 h-full w-full overflow-hidden rounded bg-custom-green text-slate-500 shadow-md shadow-slate-200'></div>

										<div className='p-6 text-center'>
											<Image
												src='/featured1.png'
												width={70}
												height={70}
												alt='image'
												className='mx-auto max-w-full rounded-full'
											/>
											<p className='mt-5 text-xl font-bold'>Ademola Deji</p>
											<p>462 completed tasks</p>

											<hr className='my-5 w-full border-2 border-white' />

											<div className='flex w-full flex-col gap-5'>
												<div className='flex flex-row justify-between'>
													<p className='font-bold'>Web Design</p>
												</div>
												<div className='flex flex-row justify-between'>
													<p className='font-bold'>Web Development</p>
												</div>
												<div className='flex flex-row justify-between'>
													<p className='font-bold'>Website management</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
