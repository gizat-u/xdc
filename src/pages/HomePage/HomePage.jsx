import "./HomePage.css"

import React from "react";

import { useTitle } from "../../utilities/useTitle";

import { motion } from "framer-motion";
import { Explore } from "../../components/Explore/Explore";
import { BackgroundVideo } from "../../components/BackgroundVideo/BackgroundVideo";

import video_background from "../../assets/videos/explore.mp4";


export const HomePage = () => {
	useTitle("X Detailing Center | XDC");

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
			<BackgroundVideo video={video_background} blackout={false} loop={false} />
			<Explore />
		</motion.main >
	);
}