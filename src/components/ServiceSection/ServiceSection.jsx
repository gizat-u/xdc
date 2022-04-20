import "./ServiceSection.css"

import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import { services } from "./ServiceData";
import { detectService } from "./ServiceData";


export const ServiceSection = () => {


	const service = detectService(window.location.pathname);


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
			<motion.div className="section_background" variants={animateImg} initial="hidden" animate="visible" >
				<video autoPlay playsInline muted loop preload="true" >
					<source src={service.video} type="video/mp4" />
				</video>
				<div className="section_background_blackout" />
			</motion.div>
			<div className="line_links" >
				<div className="line_links_content">
					{services.map(({ id, link, text }) => {
						return (
							<motion.span key={id} variants={animateServices} initial="hidden" animate="visible" custom={id} >
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
					<motion.h2 variants={animateDiv} initial="hidden" animate="visible" >
						{service.title}
					</motion.h2>
					{service.p.map((pt) => {
						return (
							<motion.p key={pt} variants={animateDiv} initial="hidden" animate="visible" >
								{pt}
							</motion.p>
						);
					})}
				</div>
				<div
					className="content_el"
				>
					<motion.div className="content_el_in" variants={animateDiv} initial="hidden" animate="visible" >
						<div className="lines">
							<div className="line">
								<div>#</div>
								<div>Наименование</div>
								<div>
									<div>Легковая</div>
									<div>Джип</div>
								</div>
							</div>
							{service.priceList.map(({ id, title, subtitle, light, jeep, size }) => {
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
					<motion.div className="content_el_in" variants={animateDiv} initial="hidden" animate="visible" >
						<button>
							Sign Up
						</button>
					</motion.div>
				</div>
			</div>
		</div>
	);
}