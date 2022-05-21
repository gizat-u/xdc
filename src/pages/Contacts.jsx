import React from "react";

import { useTitle } from "../utilities/useTitle";

import { motion } from "framer-motion";
import { Background } from "../components/Background/Background";

import map_background from "../assets/images/map.png";
import { ContactSection } from "../components/ContactSection/ContactSection";

export const Contacts = () => {

	useTitle("Contacts | XDC");

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
			<Background video={map_background} loop={false} blackout={false} image={true} />
			<ContactSection />
		</motion.main >
	);

}