import Image from 'next/image';

import AppleStoreBtn from '../components/applestore';
import PlayStoreBtn from '../components/playstore';
import Search from '../components/search';

export default function Hero() {
	return (
		<>
			<section className='mt-12 md:mt-16 lg:mt-24'>
				<div className='container mx-auto px-5'>
					<div className='grid grid-cols-4 gap-10 md:grid-cols-8 md:gap-14 lg:grid-cols-12 lg:gap-20'>
						<div className='order-2 col-span-4 md:order-1 lg:col-span-7'>
							<div>
								<p className='text-center text-3xl font-bold md:text-4xl lg:text-7xl'>
									Find service <span className='text-[#19FB05]'>Providers</span>{' '}
									<br />
									around you
								</p>

								<p className='mt-6 text-center text-sm md:text-xl lg:text-2xl'>
									Discover facility and hospitality soft services providers that
									can meet your needs. Download the application to get started.
								</p>

								<div className='mt-8 flex w-full flex-col items-center justify-center gap-5'>
									<PlayStoreBtn />
									<AppleStoreBtn />
								</div>

								<Search />
							</div>
						</div>
						<div className='relative order-1 col-span-4 md:order-2 lg:col-span-5'>
							<Image
								src='/ellipse.png'
								width={595}
								height={20}
								alt='image'
								className='w-full'
							/>
							<Image
								src='/handy.png'
								width={555}
								height={50}
								alt='image'
								className='absolute bottom-0 sm:-top-[3rem] md:-top-[3rem] lg:-top-[3.5rem] xl:-top-[4rem]'
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
