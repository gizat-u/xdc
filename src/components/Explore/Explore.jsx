import "./Explore.css"

import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";

import { services } from "../../data/Services";

export const Explore = () => {

	const { t } = useTranslation();

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
				delay: i * 0.1,
			}
		})
	}

	return (
		<div className="Component" >
			<div className="section_content">
				<div className="content_el">
					<div style={{
						marginTop: '25px',
					}}>
						<motion.h1 initial={"hidden"} animate={"visible"} transition={{ delay: 0.5, }} variants={animateH1} >
							{t('Car')} <b>{t('Detaling')}</b><br /> {t('and customizing')} <br /> {t('services')}
						</motion.h1>
					</div>
					<div style={{
						marginTop: '25px',
					}}>
						{services.map(({ id, link, text }) => {
							return (
								<motion.span key={id} variants={animateServices} initial="hidden" animate="visible" custom={id}>
									<Link to={link} >
										{t(text)}
									</Link>
								</motion.span>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}