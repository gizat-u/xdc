import "./PDRPage.css"

import React from "react";

import { useTitle } from "../../utilities/useTitle";

import { motion } from "framer-motion";

import pdr from "../../assets/videos/pdr.mp4";

export const PDRPage = () => {

	useTitle("PDR | XDC");

	return (
		<motion.main
			className="Page"
			initial={{ y: "100vh", opacity: 0, background: "black" }}
			animate={{ y: 0, opacity: 1, background: "black" }}
			exit={{ y: "100vh", opacity: 0,background: "black", transition: {duration: 0.1} }}
		>
			<div className="Content">
				<div className="video">
					<video autoPlay playsInline loop muted preload="metadata" width="100%" src={pdr} />
					<div className="video_blackout">
						<h3>PDR</h3>
					</div>
				</div>
			</div>
		</motion.main>
	);
}