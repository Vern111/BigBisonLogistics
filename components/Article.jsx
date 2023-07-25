import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Article = () => {
	return (
		// <div className='bg-black opacity-75 '></div>
		<div id="article" className=" bg-luckbox bg-cover bg-center   ">
			<div className=" z-10 row d-flex place-items-center pt-2">
				<div class=" mx-24 grid h-full    sm:grid-cols-1 sm:grid-rows-[min-content,1fr]">
					<div class=" pt-16  sm:col-span-2 ">
						<div>
							<p className="text-center uppercase text-[#ac803a]">
								want to know more?
							</p>
							<h2 className="pb-3  text-center text-gray-100 ">
								Read the Luckbox Inteview with Todd, BBLGX Founder/Chief
								Strategist
							</h2>

							<br />

							<br />
						</div>
					</div>
					<div class="text-center  row-start-2 m-2 ">
						<div className="">
							<Image
								class=" "
								src="/../public/assets/luckbox.png"
								alt="/"
								width="400px"
								height="450px"
								quality={100}
							/>
						</div>
						<div className=" pt-6 pl-4 text-center ">
							<p className="text-center text-sm text-btext">
								A veteran of the $48.1 billion industry tells what it's like
								protection the rich and famous.
							</p>
							<button className="w-[25vw] h-[55px] ">
								{' '}
								Read the Luckbox Article{' '}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
