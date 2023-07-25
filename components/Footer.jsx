import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

export const Footer = () => {
	return (
		<>
			<div className="bg-[#212529]  h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className=" text-btext font-bold text-3xl pb-6">About Us</p>
						<p className="text-btext text-sm font-semibold">
							Big Bison exists to solve complex problems. We believe some of the
							most difficult problems in an individuals life occur when they
							become prominent or successful.
						</p>
						{/* <div className='flex gap-6 pb-5'>
							<FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600' />
							<FaTwitter className='text-2xl cursor-pointer hover:text-blue-600' />
							<FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600' />
							<FaYoutube className='text-2xl cursor-pointer hover:text-red-600' />
						</div> */}
						<div className="">
							<Image
								class=" "
								src="/../public/assets/ghostfoot.PNG"
								alt="/"
								width="200%"
								height="100%"
								quality={100}
							/>
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-btext font-bold text-2xl pb-4">Useful Links</p>
						<li className="  text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About Us
						</li>
						<li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Services
						</li>
						<li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact Us
						</li>
						<li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Privacy Policy
						</li>
						<li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Terms & Conditions
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className=" text-btext font-bold text-2xl pb-4">
							"Always adapting"
						</p>
						<p className="text-btext text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							More than just a quick saying, but one of the driving forces
							behind our success.
						</p>
						<p className="text-btext text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<i>Always Adapting</i> signifies our pledge to stay vigilant to
							change. Chosing the path of greater success over relative ease.
						</p>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-btext font-bold text-2xl pb-4">Support</p>
						<li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Support Portals
						</li>
						<li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Downloads & Resources
						</li>
						<li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}
