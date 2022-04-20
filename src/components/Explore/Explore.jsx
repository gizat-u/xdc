import "./Explore.css"

import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import video_background from "../../assets/videos/explore.mp4";

export const services = [
	{ id: 1, link: "/polishing", text: "Polishing" },
	{ id: 2, link: "/", text: "Exterior wash" },
	{ id: 3, link: "/", text: "Window Tint" },
	{ id: 4, link: "/", text: "Paint Protection Film" },
	{ id: 5, link: "/", text: "Ceramic Coating" },
	{ id: 6, link: "/", text: "Leather Trimming" },
	{ id: 7, link: "/", text: "Dry Cleaning" },
	{ id: 8, link: "/", text: "Paintless Dent Repair" },
]

export const Explore = () => {

	const animateH1 = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.4,
			}
		}
	};

	const animateServices = {
		hidden: {
			opacity: 0,
			x: -50
		},
		visible: i => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.3,
			}
		})
	}

	return (
		<div className="Component" >
			<div className="section_background explore_background">
				<video autoPlay playsInline muted preload="true">
					<source src={video_background} type="video/mp4" />
				</video>
			</div>
			<div className="section_content">
				<div className="content_el">
					<motion.h1
						initial={"hidden"}
						animate={"visible"}
						transition={{
							delay: 0.5,
						}}
						variants={animateH1}
					>
						Car <b>Detaling</b><br /> and customizing <br /> services
					</motion.h1>
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
		</div>
	);
}