import "./ServicePage.css"

import React from "react";

import { useTitle } from "../../utilities/useTitle";

import { motion } from "framer-motion";
import { ServiceSection } from "../../components/ServiceSection/ServiceSection";
import { services, detectService } from "./ServicePageData";
import { BackgroundVideo } from "../../components/BackgroundVideo/BackgroundVideo";
import { ServiceCategories } from "../../components/ServiceCategories/ServiceCategories";


export const ServicePage = () => {

	const service = detectService(window.location.pathname);

	useTitle(service.title + " | XDC");


	return (
		<motion.main
			className="Page"
			initial={{
				y: -100,
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
			<BackgroundVideo video={service.video} />
			<ServiceCategories services={services} />
			<ServiceSection service={service} />
		</motion.main>
	);
}