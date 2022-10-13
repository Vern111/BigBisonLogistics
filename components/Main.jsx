import React from 'react';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
	return (
		//Background div
		<div className=' bg-hero bg-cover bg-center  '>
			<div className='w-full   pt-40 lg:grid grid-cols-2 gap-4   '>
				<div className='max-w-[1240]  w-full  px-6 md:pr-12'>
					<h2 className='pb-3 text-center text-gray-400 md:pl-6'>
						Always Adapting
					</h2>
					<p className='py-4 pl-16 text-[#F7F7F7] max-w-[100%] m-auto'>
						{' '}
						Big Bison exists to solve complex problems. We believe
						some of the most difficult problems in an individual's
						life occur when they become prominent or successful.
						Journey management, travel safety consulting, and secure
						transportation planning are major stressors for the
						discerning and high profile travelers, no matter their
						destination.
					</p>
					<br />
					<p className=' pl-16 text-[#F7F7F7] max-w-[100%] m-auto'>
						Our drive to succeed is wrapped in our philosophy to
						serve others before self. We're not in business to build
						our follower base. We work to make your life more normal
						by minimizing your stressors and mitigating risks
						whether seen or unseen.
					</p>
				</div>
				<div className='pt-[50px] Flex justify-items-center p-14'>
					<Image
						class='  lg:visible sm:invisible md:invisible'
						src='/../public/assets/whiteGold_bison.png'
						alt='/'
						width='350%'
						height='250%'
						quality={100}
					/>

					<div className=' pt-6 lg:visible sm:invisible md:invisible'>
						<button className='w-[92%] h-[55px] '>
							{' '}
							Request Risk Assessment{' '}
						</button>
					</div>
				</div>
				
			</div>
			<Image
				class=' pt-0 invisible sm:visible '
				src='/../public/assets/home-bottom-shape.png'
				alt='/'
				layout='responsive'
				width='100%'
				height='35%'
				quality={100}
			/>
		</div>
	);
};

export default Main;
