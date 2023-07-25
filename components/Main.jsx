import React from 'react'
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Wave from '../public/assets/home-wave.png'
import bison from '../public/assets/whiteGold_bison.png'

const Main = () => {
	return (
		//Background div
		<div id="home" className=" bg-hero bg-cover bg-center   ">
			<div className=" row d-flex place-items-center pt-32">
				<div class=" mx-24 grid h-full   md:grid-cols-3 sm:grid-cols-1 sm:grid-rows-[min-content,1fr]">
					{/* <div class='order-first m-2  sm:order-none sm:col-span-2'>
						
					</div> */}

					<div class=" pt-16 mr-6 sm:col-span-2 ">
						<div>
							<h2 className="pb-3   text-gray-100 ">Always Adapting</h2>

							<br />
							<p className="text-btext max-w-md">
								Big Bison exists to solve complex problems. We believe some of
								the most difficult problems in an individual's life occur when
								they become prominent or successful. Journey management, travel
								safety consulting, and secure transportation planning are major
								stressors for the discerning and high profile travelers, no
								matter their destination.
							</p>
							<br />
						</div>
					</div>
					<div class="text-center  sm:row-span-2 m-2 mt-16">
						<div className="">
							<Image
								class=" "
								src={bison}
								alt="/"
								width="450px"
								height="400px"
								quality={100}
							/>
						</div>
						<div className=" pt-6 pl-4 text-center ">
							<button className="w-[100%] h-[55px] ">
								{' '}
								Request Risk Assessment{' '}
							</button>
						</div>
					</div>
				</div>
			</div>
			<Image
				class=" pt-0 invisible sm:visible "
				src={Wave}
				alt="/"
				layout="responsive"
				width="100%"
				height="20%"
				
			/>
		</div>
	)
}

export default Main
