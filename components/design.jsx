import React from 'react'
import Image from 'next/image'

function Design() {
	return (
		<div>
			<Image
				class=" -mb-200  z-100"
				src="/../public/assets/home-bottom-shape.png"
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
