import React from 'react'
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
	return (
		//Background div
		<div className=" bg-hero bg-cover bg-center  ">
			<div className="row d-flex place-items-center   ">
				<div className="ml-16 grid h-full   sm:grid-cols-3 sm:grid-rows-[min-content,1fr]">
					<div class=" m-2 mr-36 sm:col-span-2">
						<div>
							<h2 className="pb-3 text-center text-gray-200 md:pl-6">
								Always Adapting
							</h2>
							<p className="py-4 pl-16 text-[#F7F7F7] max-w-[100%] m-auto">
								{' '}
								Big Bison exists to solve complex problems. We believe some of
								the most difficult problems in an individual's life occur when
								they become prominent or successful. Journey management, travel
								safety consulting, and secure transportation planning are major
								stressors for the discerning and high profile travelers, no
								matter their destination.
							</p>
							<br />
							<p className=" pl-16 text-[#F7F7F7] max-w-[100%] m-auto">
								Our drive to succeed is wrapped in our philosophy to serve
								others before self. We're not in business to build our follower
								base. We work to make your life more normal by minimizing your
								stressors and mitigating risks whether seen or unseen.
							</p>
						</div>
						<div class="text-center  sm:row-span-2 m-2">
							<div className="lg:visible md:visible sm:invisible">
								<Image
									class="  lg:visible sm:invisible md:invisible"
									src="/../public/assets/whiteGold_bison.png"
									alt="/"
									width="350%"
									height="250%"
									quality={100}
								/>
							</div>

							<div className=" pt-4 lg:visible sm:invisible md:invisible pr-12">
								<button className="w-[100%] h-[55px] ">
									{' '}
									Request Risk Assessment{' '}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Image
				class=" pt-0 invisible sm:visible "
				src="/../public/assets/home-bottom-shape.png"
				alt="/"
				layout="responsive"
				width="100%"
				height="20%"
				quality={100}
			/>
		</div>
	)
}

export default Main
