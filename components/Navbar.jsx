import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import NavLogo from '../public/assets/logo-stacked2-white.png';
import useScroll from '../lib/hooks/use-scroll';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('#ecf0f3');
	const [linkColor, setLinkColor] = useState('#ecf0f3');
	const [position, setPosition] = useState('fixed');

	
	const scrolled = useScroll(50);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div
			className={`fixed top-0 w-full py-2 flex justify-center ${
				scrolled
					? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
					: 'bg-white/0'
			} z-30 transition-all`}>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Link href='/'>
					<a className='pl-6 '>
						<Image
							src={NavLogo}
							alt='/'
							width='175'
							height='50'
							className='cursor-pointer'
						/>
					</a>
				</Link>
				<div>
					<ul
						style={{ color: `${linkColor}` }}
						className='hidden md:flex pr-16'>
						<li className='ml-4 text-md  hover:border-b'>
							<Link href='/'>Home</Link>
						</li>
						<li className='ml-4 text-md  hover:border-b'>
							<Link href='/#about'>About Us</Link>
						</li>
						<li className='ml-4 text-md  hover:border-b'>
							<Link href='/#services'>Services</Link>
						</li>

						<li className='ml-4 text-md  hover:border-b'>
							<Link href='/#contact'>Contact</Link>
						</li>
					</ul>
					{/* Hamburger Icon */}
					<div
						style={{ color: `${linkColor}` }}
						onClick={handleNav}
						className='md:hidden'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{/* Overlay */}
			<div
				className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen' : ''}>
				{/* Side Drawer Menu */}
				<div
					className={
						nav
							? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#222222] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}>
					<div>
						<div className='flex w-full items-center justify-between'>
							<Link href='/'>
								<a>
									<Image
										src='/../public/assets/WhiteGold_logistics.png'
										width='100%'
										height='90%'
										alt='/'
										quality={100}
									/>
								</a>
							</Link>
							<div
								onClick={handleNav}
								className='rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer'>
								<AiOutlineClose />
							</div>
						</div>
						<div className='border-b border-gray-300 my-4'>
							<p className='w-[85%] md:w-[90%] py-2'>Let&#39;s work together</p>
						</div>
					</div>
					<div className='py-4 flex flex-col'>
						<ul className=''>
							<Link href='/'>
								<li onClick={() => setNav(false)} className='py-4 text-3xl'>
									Home
								</li>
							</Link>
							<Link href='/#about'>
								<li onClick={() => setNav(false)} className='py-4 text-3xl'>
									About Us
								</li>
							</Link>
							<Link href='/#skills'>
								<li onClick={() => setNav(false)} className='py-4 text-3xl'>
									Services
								</li>
							</Link>

							<Link href='/#contact'>
								<li onClick={() => setNav(false)} className='py-4 text-3xl'>
									Contact
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
