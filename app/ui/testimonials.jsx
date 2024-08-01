export default function Testimonials() {
	const testimonials = [
		{
			name: 'Bayewu Tunde',
			handle: '@T_de23',
			message:
				'James was fantastic! Easy to work with, efficient, and went above and beyond when the task ended up being much larger than we anticipated...',
		},
		{
			name: 'Sarah Johnson',
			handle: '@S_johnson',
			message:
				'Great experience! The team was professional and delivered on time.',
		},
		{
			name: 'Michael Smith',
			handle: '@M_smith',
			message: 'Highly recommend! They exceeded my expectations in every way.',
		},
		{
			name: 'Emily Davis',
			handle: '@E_davis',
			message: 'Fantastic service! I will definitely work with them again.',
		},
		{
			name: 'David Brown',
			handle: '@D_brown',
			message:
				'Very satisfied with the results. They were attentive to my needs.',
		},
		{
			name: 'Jessica Wilson',
			handle: '@J_wilson',
			message: 'An excellent collaboration! They brought my vision to life.',
		},
		{
			name: 'Chris Lee',
			handle: '@C_lee',
			message: 'Professional and dedicated. A pleasure to work with!',
		},
		{
			name: 'Laura Garcia',
			handle: '@L_garcia',
			message: 'Impressive work! They are true experts in their field.',
		},
	];

	return (
		<div className=''>
			<section>
				<div className='mx-auto mt-20 bg-custom-black p-6 px-6 text-center md:mt-28 lg:mt-32'>
					<p className='text-base md:text-2xl lg:text-3xl'>
						Our customers are living life with a <br />
						<span className='font-bold'>smile on their faces!</span>
					</p>

					<div className='my-10 flex h-80 overflow-x-auto overflow-y-hidden'>
						{testimonials.map((testimonial, index) => {
							return (
								<div
									key={index}
									className='mr-5 grid h-auto w-[300px] flex-none place-items-center rounded-lg bg-white text-black shadow-lg shadow-slate-400'
								>
									<div className='p-6'>
										<div className='mb-5 font-bold'>
											<p>{testimonial.name}</p>
											<p>{testimonial.handle}</p>
										</div>
										<p>“{testimonial.message}”</p>
									</div>
								</div>
							);
						})}
					</div>

					<p className='cursor-pointer font-bold hover:text-custom-yellow'>
						Check all 2.000 reviews
					</p>
				</div>
			</section>
		</div>
	);
}
