import "./Slider.css"

import React from "react";
import { motion } from "framer-motion";

import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { Autoplay, EffectCube, Pagination, Navigation } from "swiper";

export const Slider = ({ children }) => {


	const animateDiv = {
		hidden: {
			y: -50,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delay: 0.4,
			}
		}
	}
	return (

		<motion.div className="content_el service_images" variants={animateDiv} initial="hidden" animate="visible" >
			<Swiper
				effect={"cube"}
				grabCursor={true}
				loop={true}
				pagination={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				navigation={true}
				modules={[Autoplay, EffectCube, Pagination, Navigation]}
				className="mySwiper"
			>
				{children}
			</Swiper>
		</motion.div>
	);
}