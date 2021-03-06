import "./ServiceSection.css"

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Slider } from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import Modal from "../Modal/Modal";


export const ServiceSection = ({ service }) => {

	const { t } = useTranslation();

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

		<div className="Component service_section">
			<div className="section_content">
				<div className="content_el">
					<motion.h2 variants={animateDiv} initial="hidden" animate="visible" >
						{t(service.title)}
					</motion.h2>
					{service.p.map((pt) => {
						return (
							<motion.p key={pt} variants={animateDiv} initial="hidden" animate="visible" >
								{t(pt)}
							</motion.p>
						);
					})}
					<Modal type_service={service.title} />
				</div>
				<Slider>
					<SwiperSlide><img src={service.img_1} alt="service" /></SwiperSlide>
					<SwiperSlide><img src={service.img_2} alt="service" /></SwiperSlide>
					<SwiperSlide><img src={service.img_3} alt="service" /></SwiperSlide>
				</Slider>
			</div>
		</div>
	);
}