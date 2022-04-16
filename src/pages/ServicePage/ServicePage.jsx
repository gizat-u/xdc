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
			initial={{ y: "-100vh", opacity: 0, background: "black" }}
			animate={{ y: 0, opacity: 1, background: "black" }}
			exit={{ y: "-100vh", opacity: 0,background: "black", transition: {duration: 0.1} }}
		>
			<ServiceSection />
		</motion.main>
	);
}