import Image from 'next/image';
import { FaCircleCheck } from 'react-icons/fa6';

export default function SectionSix() {
	return (
		<>
			<section>
				<div className='container mx-auto mt-20 px-6 md:mt-24 lg:mt-32'>
					<div className='relative grid grid-cols-4 gap-10 md:grid-cols-8 md:gap-14 lg:grid-cols-12 lg:gap-20'>
						<div className='col-span-4 lg:col-span-6'>
							<Image
								src='/sec6.png'
								width={600}
								height={10}
								alt='image'
								className='rounded-md border-[15px] border-custom-green'
							/>
						</div>

						<div className='col-span-4 mb-10 lg:col-span-6'>
							<p className='mb-5 text-2xl tracking-wide text-black md:text-3xl lg:text-4xl'>
								Having a reliable team of
								<span className='font-bold'> professionals </span>
							</p>

							<div>
								<p className='mb-5 text-sm font-medium tracking-wide md:text-base lg:text-xl'>
									Build your team of local, background-verified Workers to help
									with-- and for-- life. Whatever you need, they’ve got it
									covered.
								</p>

								<ul className='mb-10 flex flex-col gap-5 font-bold'>
									<li className='flex flex-row items-center gap-3'>
										<FaCircleCheck />
										<p>Compare SSP workers reviews, ratings, and prices.</p>
									</li>
									<li className='flex flex-row items-center gap-3'>
										<FaCircleCheck />
										<p>Choose and connect with the best person for the job</p>
									</li>
									<li className='flex flex-row items-center gap-3'>
										<FaCircleCheck />
										<p>Save your favorites to book again and again</p>
									</li>
									<li className='flex flex-row items-center gap-3'>
										<FaCircleCheck />
										<p>
											Service level agreement (SLA) available for subscription
											and premium services
										</p>
									</li>
									<li className='flex flex-row items-center gap-3'>
										<FaCircleCheck />
										<p>
											Get trained to become certified SSP with us and get
											connected to unlimited job opportunities
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
