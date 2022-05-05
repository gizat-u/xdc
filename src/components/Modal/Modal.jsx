import "./Modal.css";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png";


export default function Modal({ type_service }) {

	const { t } = useTranslation();

	const [modal, setModal] = useState(false);

	const modalToggleHandler = () => {
		setModal((p) => !p);
	}

	const animateDiv = {
		hidden: {
			y: -50,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delay: 0.4,
			}
		}
	}


	return (
		<motion.div className="content_el_in" variants={animateDiv} initial="hidden" animate="visible" >
			<div className={`modal ${modal ? 'open' : ''} `}>

				<label>Name</label>
				<input type="text" name="user_name" />
				<label>Email</label>
				<input type="email" name="user_email" />
				<label>Message</label>
				<textarea name="message" />
				<input type="submit" value="Send" />
			</div>
			<button onClick={() => modalToggleHandler()}>
				{t("Sign Up")}
			</button>
		</motion.div>
	)
}
