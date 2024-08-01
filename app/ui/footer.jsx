import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

import PlayStoreBtn from '../components/playstore';
import AppleStoreBtn from '../components/applestore';

export default function Footer() {
	const socialMediaLinks = [
		{
			href: 'facebook.com',
			icon: <FaFacebook className='text-xl md:text-3xl lg:text-4xl' />,
			key: 'facebook',
		},
		{
			href: 'ig.me',
			icon: <FaInstagram className='text-xl md:text-3xl lg:text-4xl' />,
			key: 'instagram',
		},
		{
			href: 'youtube.com',
			icon: <FaYoutube className='text-xl md:text-3xl lg:text-4xl' />,
			key: 'youtube',
		},
		{
			href: 'linkedin.com',
			icon: <FaLinkedin className='text-xl md:text-3xl lg:text-4xl' />,
			key: 'linkedin',
		},
	];

	const menuItems = [
		{ href: '#about', text: 'About', key: 'about' },
		{ href: '#features', text: 'Features', key: 'features' },
		{ href: '#works', text: 'Works', key: 'works' },
		{ href: '#support', text: 'Support', key: 'support' },
	];

	return (
		<>
			<section className='mt-14 bg-black py-5 md:mt-20 lg:mt-32'>
				<div className='container mx-auto px-6'>
					<div className='grid grid-cols-4 gap-6 text-white md:grid-cols-8 lg:grid-cols-12'>
						<div className='col-span-4 lg:col-span-6'>
							<div className='flex flex-col gap-10'>
								<p className='text-2xl font-bold'>HQ2 limited</p>
								<ul className='flex flex-row gap-10'>
									{socialMediaLinks.map(({ href, icon, key }) => (
										<li key={key}>
											<a href={href}>{icon}</a>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className='col-span-4 mt-3 md:mt-0 lg:col-span-6'>
							<div className='flex flex-col gap-5'>
								<p className='text-xl md:text-2xl lg:text-3xl'>
									<span className='font-bold'>Get more </span>done on the go
								</p>
								<p>
									Need something done fast? Download the app to book your
									Hq2’er, message them quickly and even send photos with ease -
									make it happen now!
								</p>

								<div className='mt-8 flex w-full flex-wrap gap-5'>
									<PlayStoreBtn />
									<AppleStoreBtn />
								</div>

								<ul className='flex flex-col md:flex-row md:gap-10'>
									{menuItems.map(({ href, text, key }) => (
										<li key={key} className='flex items-stretch'>
											<a
												href={href}
												className='flex cursor-pointer items-center gap-2 py-4 font-semibold text-white transition-colors duration-300 hover:text-[#19FB05] focus:text-[#19FB05] focus:outline-none'
											>
												<span>{text}</span>
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
