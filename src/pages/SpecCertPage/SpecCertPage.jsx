import "./SpecCertPage.css"

import React from "react";

import { useTitle } from "../../utilities/useTitle";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import { SpecCertSection } from "../../components/SpecCertSection/SpecCertSection";


export const SpecCertPage = () => {

	const { t } = useTranslation();
	useTitle(t("Specialists & Certificates") + " | XDC");

	return (
		<motion.main
			className="Page"
			initial={{
				y: "-100",
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
			exit={{
				y: "-100",
				opacity: 0,
				transition: { duration: 0.1 }
			}}
		>
			<SpecCertSection />
		</motion.main >
	);

}