import "./ButtonLanguage.css"

import i18next from "i18next";
import { useState } from "react";


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
		<button className="button_language" onClick={() => toggleButtonLanguage()}>
			{language}
		</button>
	);
}