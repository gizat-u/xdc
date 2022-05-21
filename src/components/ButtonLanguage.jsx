import i18next from "i18next";
import { useState } from "react";
import styled from "styled-components";


export const ButtonLanguage = () => {

	const [language, setLanguage] = useState('ru');

	const toggleButtonLanguage = () => {


		if (language === "en")
			setLanguage("ru");
		if (language === "ru")
			setLanguage("en");

		i18next.changeLanguage(language);
	}

	return (
		<Button className="button_language" onClick={() => toggleButtonLanguage()}>
			{language}
		</Button>
	);
}

const Button = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-size: 12px;

	/* position: fixed;
	left: 0;
	bottom: 0; */

	/* padding: 15px;
	margin: 15px; */


	text-transform: uppercase;

	background-color: transparent;

	font-family: "Montserrat", sans-serif;
	font-weight: bold;
	letter-spacing: 1px;

	/* border-radius: 50%; */
	border-radius: 1rem;
	overflow: hidden;

	color: #fff;
	z-index: 999;

	transition: 0.35s all;

	svg {
		margin: 3px;
	}

	&:hover {
		color: red;
	}
`;