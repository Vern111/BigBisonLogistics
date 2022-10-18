import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = () => {
	return (
		<div
			id='services'
			class=' place-items-center m-12 grid h-full lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:grid-rows-[min-content,1fr]'>
			<div class=' w-[42vw] text sm:col-span-1'>
				<h6 className='pb-2 text-xs uppercase text-gold '>
					Some of our services
				</h6>
				<h3 className='pb-2 text-xl font-black font-sans text-title  '>
					Our team focus extends well into our provided services.
				</h3>
				<br />
				<p className=''>
					While the Founder of Big Bison Logistics has over 20 years
					of experience in law enforcement, intelligence, special
					events and personal security industry - Big Bison is about
					the team. We're nimble and we're small because we hire
					teammates through referrals, not <i>Indeed</i>.
				</p>
				<ul className='text-title grid grid-flow-rows grid-cols-2 gap-4 pt-4'>
					<li className='  border-l-4 border-gold rounded-xl shadow-lg shadow-[#eeeeee] px-4 py-2 text-center '>
						Journey Management
					</li>
					<li className='  border-l-4 border-gold rounded-xl shadow-lg shadow-[#eeeeee] px-4 py-2 text-center '>
						Counter Surveillance
					</li>
					<li className='  border-l-4 border-gold rounded-xl shadow-lg shadow-[#eeeeee] px-4 py-2 text-center '>
						Social Media & Open Source Intelligence Monitoring
					</li>
					<li className='  border-l-4 border-gold rounded-xl shadow-lg shadow-[#eeeeee] px-4 py-2 text-center '>
						Operational Security Planning & Advisement
					</li>
					<li className='  border-l-4 border-gold rounded-xl shadow-lg shadow-[#eeeeee] px-4 py-2 text-center '>
						Key Personnel Management
					</li>
					<li className='  border-l-4 border-gold rounded-xl shadow-lg shadow-[#eeeeee] px-4 py-2 pt-4 text-center '>
						Secure Transportation
					</li>
				</ul>
			</div>
			<div class=' sm:row-span-2 mt-6'>
				<div className=''>
					<Image
						src='/../public/assets/services.jpeg'
						width='500vw'
						height='500vw'
						alt='About image'
						quality={100}
					/>
				</div>
			</div>
		</div>
	);
};
export default services;
