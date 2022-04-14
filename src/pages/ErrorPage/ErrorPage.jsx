import "./ErrorPage.css"
import React from "react";
import { useTitle } from "../../utilities/useTitle";
import { motion } from "framer-motion";


export const ErrorPage = () => {

	useTitle("404 | XDC");

	return (
		<motion.main
			className="Page"
			initial={{ y: "100vh", opacity: 0, background: "black" }}
			animate={{ y: 0, opacity: 1, background: "black" }}
			exit={{ y: "100vh", opacity: 0,background: "black", transition: {duration: 0.5} }}
		>
			<div className="Component">
				<div className="Content Error">
					<h1>404</h1>
				</div>
			</div>
		</motion.main>
	);
}