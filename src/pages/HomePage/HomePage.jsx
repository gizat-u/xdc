import "./HomePage.css"

import React from "react";

import { useTitle } from "../../utilities/useTitle";

import { motion } from "framer-motion";
import { Explore } from "../../components/Explore/Explore";

export const HomePage = () => {

	useTitle("X Detailing Center | XDC");

	return (
		<motion.main
			className="Page"
			initial={{ y: "-100vh", opacity: 0, background: "black" }}
			animate={{ y: 0, opacity: 1, background: "black" }}
			exit={{ y: "-100vh", opacity: 0,background: "black", transition: {duration: 0.1} }}
		>
			<Explore />
		</motion.main>
	);
}