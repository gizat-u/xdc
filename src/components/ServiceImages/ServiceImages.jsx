import "./ServiceImages.css"

import React from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";

import { Autoplay, EffectCube } from "swiper";

export const ServiceImages = ({ service }) => {


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

		<motion.div className="content_el" variants={animateDiv} initial="hidden" animate="visible" >
			<Swiper
				effect={"cube"}
				grabCursor={true}
				loop={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				modules={[Autoplay, EffectCube]}
				className="mySwiper"
			>
				<SwiperSlide><img src={service.img_1} alt="service" /></SwiperSlide>
				<SwiperSlide><img src={service.img_2} alt="service" /></SwiperSlide>
				<SwiperSlide><img src={service.img_3} alt="service" /></SwiperSlide>
			</Swiper>
		</motion.div>
	);
}