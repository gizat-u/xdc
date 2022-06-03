

import React, { useEffect, useState } from "react";

import { useTitle } from "../utilities/useTitle";

import { motion } from "framer-motion";
import { Explore } from "../components/Explore/Explore";
import { Background } from "../components/Background/Background";

import video_background from "../assets/videos/explore.mp4";
import background_img from "../assets/images/background/main_1.jpg";

export const Home = () => {
	useTitle("X Detailing Center | XDC");

	const [show, setShow] = useState(false);
	const [mobile, setMobile] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	const handleMobile = (state) => {
		if (state) {
			setMobile(true);
			setShow(true);
		}
		else
			setMobile(false);
	}

	useEffect(() => {
		width >= 768 && handleMobile(false);
		width <= 768 && handleMobile(true);
	}, [width]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShow(true)
		}, 5250)

		return () => clearTimeout(timeout)

	}, [show]);

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
			<Background
				video={video_background}
				background_img={background_img}
				blackout={false} loop={false} important={false}
				blackout_img={true}
			/>

			{
				(show) ?
					<Explore />
					:
					""
			}
		</motion.main >
	);
}