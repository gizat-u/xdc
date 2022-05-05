import "./SpecCertSection.css"

import React from "react";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

import ramiz from "../../assets/images/specialists/Ramiz.png";
import ahmed from "../../assets/images/specialists/Ahmed.png";

import cert1 from "../../assets/images/certificates/1.png";
import cert2 from "../../assets/images/certificates/2.png";
import cert3 from "../../assets/images/certificates/3.png";
import cert4 from "../../assets/images/certificates/4.png";
import cert5 from "../../assets/images/certificates/5.png";

export const SpecCertSection = () => {

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

		<div className="Component speccert_section">
			<div className="speccert_content">
				<div className="content_el">
					<motion.div variants={animateDiv} initial="hidden" animate="visible" >
						<div className="specialists">
							<div className="specialist">
								<img src={ramiz} alt="..." />
								<h3>{t('RAMIZ OSMANLI')}</h3>
							</div>
							<div className="specialist">
								<img src={ahmed} alt="..." />
								<h3>{t('AHMED KHALILOV')}</h3>
							</div>
						</div>
						<div className="specialist_role">
							<span>{t('Key specialists')}</span>
						</div>
					</motion.div>
					<motion.div variants={animateDiv} initial="hidden" animate="visible" >
						<div className="certificates">
							<div className="certificate">
								<img src={cert1} alt="..." />
							</div>
							<div className="certificate">
								<img src={cert2} alt="..." />
							</div><div className="certificate">
								<img src={cert3} alt="..." />
							</div><div className="certificate">
								<img src={cert4} alt="..." />
							</div><div className="certificate">
								<img src={cert5} alt="..." />
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}