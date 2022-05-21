import "./Modal.css";

import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import swal from 'sweetalert';


export default function Modal({ type_service }) {

	const { t } = useTranslation();

	const [modal, setModal] = useState(false);
	const [value, setValue] = useState()

	const modalToggleHandler = () => {
		setModal((p) => !p);
	}


	const closeModalToggleHanlder = () => {
		setModal((p) => !p);
	}

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();


		if (form.current.user_name.value.length <= 2) {
			form.current.user_name.style.border = '2px solid red';
			swal("Name is required", "", "error");
		}
		else if (form.current.user_phone.value.length <= 10) {
			form.current.user_name.style.border = 'none';
			form.current.user_phone.style.border = '2px solid red';
			form.current.message.style.border = 'none';
			swal("Phone is required", "", "error");
		}
		else if (form.current.message.value.length <= 4) {
			form.current.user_name.style.border = 'none';
			form.current.user_phone.style.border = 'none';
			form.current.message.style.border = '2px solid red';
			swal("Vehicle modle and number is required", "", "error");
		}
		else {
			form.current.user_name.style.border = 'none';
			form.current.user_phone.style.border = 'none';
			form.current.message.style.border = 'none';
			emailjs.sendForm('service_099vb0n', 'template_fowcwqe', form.current, 'uPB51jN-5Gnk8oGGj')
				.then((result) => {
					console.log(result.text);
					swal("You have signed up", "", "success");
					setModal((p) => !p);
					e.target.reset();
				}, (error) => {
					console.log(error.text);
					swal("Error", error.text, "error");
					setModal((p) => !p);
					e.target.reset();
				});
		}
	};


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
		<motion.div className="content_el_in modal_in" variants={animateDiv} initial="hidden" animate="visible" >
			<div className={`modal ${modal ? 'open' : ''} `} onClick={closeModalToggleHanlder}>
				<div onClick={closeModalToggleHanlder}>
					<form className="modal_inner" ref={form} onSubmit={sendEmail}>
						<div className="modal_item modal_title">
							<h3>Submit your application</h3>
						</div>
						<div className="modal_item">
							<input type="text" placeholder="Name" name="user_name" />
						</div>
						<div className="modal_item">
							<input type="tel" placeholder="Phone number" name="user_phone" />
						</div>
						<div className="modal_item">
							<input type="text" placeholder="Vehicle model and number" name="message" />
						</div>
						<div className="modal_item modal_checkbox">
							<input type="checkbox" placeholder="Name" name="subscribe_news" />
							<label>Sign me up for newsletter</label>
						</div>
						<div className="modal_item">
							<button type="submit">sign up</button>
						</div>
					</form>
				</div>
			</div>
			<button onClick={modalToggleHandler}>
				{t("Sign Up")}
			</button>
		</motion.div>
	)
}
