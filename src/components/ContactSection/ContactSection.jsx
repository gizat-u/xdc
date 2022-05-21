import "./ContactSection.css"

import React from "react";
import { motion } from "framer-motion";

import { nav_links } from "../../data/Links";
import logo from "../../assets/images/logo.png";

import { BsGeoAlt } from "react-icons/bs";

export const ContactSection = () => {
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
		<div className="Component contact_section">
			<div className="contact_content">
				<div className="content_el">
					<motion.div variants={animateDiv} initial="hidden" animate="visible" >
						<img src={logo} alt="logo" />
						<a href='https://goo.gl/maps/NKk4M1bRA1186GnG6' target="_blank" rel="noopener noreferrer">
							<BsGeoAlt /> Google Maps
						</a>
						{nav_links.map(({ id, link, text, span }) => {
							return (
								<a key={id} href={link} target="_blank" rel="noopener noreferrer">
									{text} {span}
								</a>
							);
						})}
					</motion.div>
				</div>
				<div className="content_el">
					<motion.div variants={animateDiv} initial="hidden" animate="visible" >
						<p>+90 554 345 52 44</p>
						<p>Antalya, Kepez, Altinova Sinan mahallesi Antalya caddesi No2A/4</p>
					</motion.div>
				</div>
			</div>
		</div>
	);

}