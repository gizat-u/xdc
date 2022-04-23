import "./ServiceCategories.css";

import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";

import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export const ServiceCategories = ({ services, path }) => {

	const [menu, setMenu] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	const menuToggleHandler = () => {
		setMenu((p) => !p);
	}

	const handleClickLink = () => {
		setMenu(false);
	}

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
			<button className="services_list_btn" onClick={() => menuToggleHandler()}>
				{menu ?
					<AiOutlineCaretUp color="red" />
					:
					<AiOutlineCaretDown />
				}
			</button>
			<div className={`service_categories_content ${menu ? 'open' : ''} `}>
				{services.map(({ id, link, text }) => {
					return (
						<motion.span key={id} variants={animateServices} initial="hidden" animate="visible" custom={id} >
							<Link to={link} onClick={() => handleClickLink()} className={link === pathname ? "active" : ""}>
								{t(text)}
							</Link>
						</motion.span>
					);
				})}
			</div>
		</div>
	);
}