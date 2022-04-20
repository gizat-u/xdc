import "./ServiceSection.css"

import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import { services } from "../Explore/Explore";

import video_background from "../../assets/videos/polishing.mp4";

const polishingPriceList = [
	{ id: 1, title: "Уровень #1", subtitle: "крупнозер + мелкозерн + финиш", light: 1300, jeep: 2000, size: "sm" },
	{ id: 2, title: "Уровень #2", subtitle: "мелкозерн + финиш", light: 800, jeep: 1300, size: "sm" },

	{ id: 3, title: "Удаление царапин", subtitle: "", light: "200-500", jeep: "200-500", size: "md" },
	{ id: 4, title: "Обработка наждаткой окраш поверх", subtitle: "", light: 300, jeep: 300, size: "md" },

	{ id: 5, title: "Полировка внутренних деталей салона", subtitle: "", light: 700, jeep: 700, size: "md" },
	{ id: 6, title: "Полировка хрома", subtitle: "", light: 300, jeep: 300, size: "md" },
];


export const ServiceSection = () => {
	const animateImg = {
		hidden: {
			height: 0,
			opacity: 0,
		},
		visible: {
			height: "100%",
			opacity: 1,
			transition: {
				delay: 0.5,
			}
		}
	}
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
	const animateServices = {
		hidden: {
			opacity: 0,
			y: -50
		},
		visible: i => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.15,
			}
		})
	}

	return (
		<div className="Component service_section">
			<motion.div
				className="section_background"
				variants={animateImg}
				initial="hidden"
				animate="visible"
			>
				<video autoPlay playsInline muted loop preload="true" >
					<source src={video_background} type="video/mp4" />
				</video>
				<div className="section_background_blackout" />
			</motion.div>
			<div className="line_links" >
				<div className="line_links_content">
					{services.map(({ id, link, text }) => {
						return (
							<motion.span
								key={id}
								variants={animateServices}
								initial="hidden"
								animate="visible"
								custom={id}
							>
								<Link to={link} >
									{text}
								</Link>
							</motion.span>
						);
					})}
				</div>
			</div>
			<div className="section_content">
				<div className="content_el">
					<motion.h2
						variants={animateDiv}
						initial="hidden"
						animate="visible"
					>
						Polishing
					</motion.h2>
					<motion.p
						variants={animateDiv}
						initial="hidden"
						animate="visible"
					>
						Unfortunately as time passes, the surrounding world has a strong impact on the paintwork of your car.
						<br />Constant using of the car especially over long distances leads to scratching of the car body parts. And also poor-quality washing causes huge damage to the coating of your car. As a result, the car loses its natural shine. And due to numerous small and large scratches, even the color saturation is lost.
					</motion.p>
					<motion.p
						variants={animateDiv}
						initial="hidden"
						animate="visible"
					>
						Polishing in the "XDC" detailing studio is carried out in several stages, each of which is a time-consuming process. But it is not enough to simply perform all the stages of polishing. It is necessary to use high-quality materials and polishing wheels. It is necessary to determine the correct bundle for a specific type of varnish: "paste + circle".
						<br />And also a very important aspect is professional equipment.
					</motion.p>
					<motion.p
						variants={animateDiv}
						initial="hidden"
						animate="visible"
					>
						You need to know that our team uses premium ROCHE materials for polishing the car body and we also use only professional equipment from Magik PRO.
						<br />There are all the necessary polishing machines, polishing pastes, special microfibres and tools for preparing cars for polishing in our stockpile!
						<br />Polishing the car body will return the former shine and saturation! The car body will begin to shine almost like new.
					</motion.p>
				</div>
				<div
					className="content_el"
				>
					<motion.div className="content_el_in"
						variants={animateDiv}
						initial="hidden"
						animate="visible"
					>
						<div className="lines">
							<div className="line">
								<div>#</div>
								<div>Наименование</div>
								<div>
									<div>Легковая</div>
									<div>Джип</div>
								</div>
							</div>
							{polishingPriceList.map(({ id, title, subtitle, light, jeep, size }) => {
								return (
									<div className="line" key={id}>
										<div>{id}</div>
										<div>
											{title}
											<span>
												{subtitle}
											</span>
										</div>
										{size === "md" ?
											<div>
												<div>{light}TL</div>
											</div>
											:
											<div>
												<div>{light}TL</div>
												<div>{jeep}TL</div>
											</div>
										}
									</div>
								);
							})}
						</div>
					</motion.div>
					<motion.div
						className="content_el_in"
						variants={animateDiv}
						initial="hidden"
						animate="visible"
					>
						<button>
							Sign Up
						</button>
					</motion.div>
				</div>
			</div>
		</div>
	);
}