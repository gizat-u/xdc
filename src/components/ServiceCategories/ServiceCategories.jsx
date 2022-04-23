import "./ServiceCategories.css";

import React from "react";


import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";


export const ServiceCategories = ({ services, path }) => {

	const pathname = "" + path + "";
	const { t } = useTranslation();

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
		<div className="service_categories" >
			<div className="service_categories_content">
				{services.map(({ id, link, text }) => {
					return (
						<motion.span key={id} variants={animateServices} initial="hidden" animate="visible" custom={id} >
							<Link to={link} className={link === pathname ? "active" : ""}>
								{t(text)}
							</Link>
						</motion.span>
					);
				})}
			</div>
		</div>
	);
}