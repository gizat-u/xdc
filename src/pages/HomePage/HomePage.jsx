import "./HomePage.css"

import React, { useEffect, useState } from "react";

import { useTitle } from "../../utilities/useTitle";

import { motion } from "framer-motion";
import { Explore } from "../../components/Explore/Explore";
import { services } from "../ServicePage/ServicePageData";
import { BackgroundVideo } from "../../components/BackgroundVideo/BackgroundVideo";
import { ServiceCategories } from "../../components/ServiceCategories/ServiceCategories";

import video_background from "../../assets/videos/explore.mp4";


export const HomePage = () => {
	useTitle("X Detailing Center | XDC");

	const [show, setShow] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShow(true)
		}, 5700)

		return () => clearTimeout(timeout)

	}, [show])

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
			<ServiceCategories services={services} path={window.location.pathname} />

			{
				(show) ?
					<Explore />
					:
					""
			}
			{/* <Explore /> */}
		</motion.main >
	);
}