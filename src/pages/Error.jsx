import React from "react";
import { useTitle } from "../utilities/useTitle";
import { motion } from "framer-motion";

import styled from "styled-components";


export const Error = () => {

	useTitle("404 | XDC");

	return (
		<motion.main
			className="Page"
			initial={{ y: "100vh", opacity: 0, background: "black" }}
			animate={{ y: 0, opacity: 1, background: "black" }}
			exit={{ y: "100vh", opacity: 0, background: "black", transition: { duration: 0.5 } }}
		>
			<Container>
				<h1>404</h1>
			</Container>
		</motion.main>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	
	h1 {
		color: red;
		font-size: 50px;
	}
`;