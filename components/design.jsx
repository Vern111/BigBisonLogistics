import React from 'react'
import Image from 'next/image'
import designimage from '../public/assets/home-wave.png'

function Design() {
	return (
		<div>
			<Image
				class=" -mb-200  z-100"
				src={designimage}
				alt="/"
				layout="responsive"
				width="100%"
				height="35%"
				quality={100}
			/>
		</div>
	)
}

export default Design
