import React from "react";

import { useTitle } from "../utilities/useTitle";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { ServiceSection } from "../components/ServiceSection/ServiceSection";
import { services, detectService } from "../data/Services";
import { Background } from "../components/Background/Background";
import { ServiceCategories } from "../components/ServiceCategories/ServiceCategories";


export const Services = () => {

	const { t } = useTranslation();
	const service = detectService(window.location.pathname);

	useTitle(t(service.title) + " | XDC");


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
			<Background video={service.video} background_img={service.background} />
			<ServiceCategories services={services} path={window.location.pathname} />
			<ServiceSection service={service} />
		</motion.main>
	);
}