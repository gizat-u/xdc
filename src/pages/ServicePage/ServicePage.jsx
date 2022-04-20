import "./ServicePage.css"

import React from "react";

import { useTitle } from "../../utilities/useTitle";

import { motion } from "framer-motion";
import { ServiceSection } from "../../components/ServiceSection/ServiceSection";


export const ServicePage = () => {

	useTitle("Service | XDC");

	return (
		<motion.main
			className="Page"
			initial={{
				y: -100,
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
			<ServiceSection />
		</motion.main>
	);
}