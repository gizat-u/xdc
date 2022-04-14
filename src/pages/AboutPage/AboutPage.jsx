import "./AboutPage.css"

import React from "react";

import { useTitle } from "../../utilities/useTitle";

import { motion } from "framer-motion";
import AboutSection from "../../components/AboutSection/AboutSection";


export const AboutPage = () => {

	useTitle("About | XDC");

	return (
		<motion.main
			className="Page"
			initial={{ y: "-100vh", opacity: 0, background: "black" }}
			animate={{ y: 0, opacity: 1, background: "black" }}
			exit={{ y: "-100vh", opacity: 0,background: "black", transition: {duration: 0.1} }}
		>
			<AboutSection />	
		</motion.main>
	);
}