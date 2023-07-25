import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const about = () => {
	return (
		//Background div

		<div
			id="about"
			class=" place-items-center m-12 grid h-full lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:grid-rows-[min-content,1fr]"
		>
			<div class="  sm:col-span-1">
				<h6 className="pb-2  uppercase text-title ">About BBLGX</h6>
				<h4 className="pb-2  font-black font-sans text-title  ">
					More than the individual - we are team focused to achieve success.
				</h4>
				<br />
				<p className="">
					While the Founder of Big Bison Logistics has over 20 years of
					experience in law enforcement, intelligence, special events and
					personal security industry - Big Bison is about the team. We're nimble
					and we're small because we hire teammates through referrals, not{' '}
					<i>Indeed</i>.
				</p>
				<br />
				<p>
					Every team member is personally vetted by the founder before they are
					trained by our team to ensure new teammates have values aligned with
					ours; Integrity, Morals, Flexibility, and Extreme Ownership are
					building blocks of our culture of service to others.{' '}
				</p>
				<div className=" pt-6 text-center ">
					<button className="w-[50%] h-[55px] "> Learn More </button>
				</div>
			</div>
			<div class=" sm:row-span-2 mt-6">
				<div className="">
					<Image
						src="/../public/assets/about.png"
						width="500vw"
						height="500vw"
						alt="About image"
						quality={100}
					/>
				</div>
			</div>
		</div>
	)
}

export default about
