import "./DryCleaningPage.css"

import React from "react";

import { useTitle } from "../../utilities/useTitle";

import { motion } from "framer-motion";

import cleaning from "../../assets/videos/cleaning.mp4";

export const DryCleaningPage = () => {

	useTitle("Dry Cleaning | XDC");

	return (
		<motion.main
			className="Page"
			initial={{ y: "100vh", opacity: 0, background: "black" }}
			animate={{ y: 0, opacity: 1, background: "black" }}
			exit={{ y: "100vh", opacity: 0,background: "black", transition: {duration: 0.1} }}
		>
			<div className="Content">
				<div className="video">
					<video autoPlay playsInline loop muted preload="auto" width="100%" src={cleaning} />
					<div className="video_blackout">
						<h3>Dry Cleaning</h3>
					</div>
				</div>
			</div>
		</motion.main>
	);
}