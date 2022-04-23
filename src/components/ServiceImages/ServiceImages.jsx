import "./ServiceImages.css"

import React from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, EffectCreative } from "swiper";

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
				effect={"cards"}
				grabCursor={true}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: [0, 0, -400],
					},
					next: {
						translate: ["100%", 0, 0],
					},
				}}
				modules={[Autoplay, EffectCreative]}
				className="mySwiper"
			>
				<SwiperSlide><img src={service.img_1} alt="service" /></SwiperSlide>
				<SwiperSlide><img src={service.img_2} alt="service" /></SwiperSlide>
				<SwiperSlide><img src={service.img_3} alt="service" /></SwiperSlide>
			</Swiper>
		</motion.div>
	);
}