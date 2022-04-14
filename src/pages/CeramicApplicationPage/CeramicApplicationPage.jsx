import "./CeramicApplicationPage.css"

import React from "react";

import { useTitle } from "../../utilities/useTitle";

import { motion } from "framer-motion";

import ceramicing from "../../assets/videos/ceramicing.mp4";

export const CeramicApplicationPage = () => {

	useTitle("Ceramic Application | XDC");

	return (
		<motion.main
			className="Page"
			initial={{ y: "100vh", opacity: 0, background: "black" }}
			animate={{ y: 0, opacity: 1, background: "black" }}
			exit={{ y: "100vh", opacity: 0,background: "black", transition: {duration: 0.1} }}
		>
			<div className="Content">
				<div className="video">
					<video autoPlay playsInline loop muted preload="auto" width="100%" src={ceramicing} />
					<div className="video_blackout">
						<h3>CeramicApplicationPage</h3>
					</div>
				</div>
			</div>
		</motion.main>
	);
}