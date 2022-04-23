import "./ServiceSection.css"

import React from "react";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

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
							{t("Sign Up")}
						</button>
					</motion.div>
				</div>
			</div>
		</div>
	);
}