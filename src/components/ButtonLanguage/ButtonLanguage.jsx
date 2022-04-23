import "./ButtonLanguage.css"

import i18next from "i18next";
import { useState } from "react";


export const ButtonLanguage = () => {

	const [language, setLanguage] = useState('tr');

	const toggleButtonLanguage = () => {


		if (language === "en")
			setLanguage("tr");
		else if (language === "tr")
			setLanguage("ru");
		else
			setLanguage("en");

		i18next.changeLanguage(language);
	}

	return (
		<button className="button_language" onClick={() => toggleButtonLanguage()}>
			{language}
		</button>
	);
}