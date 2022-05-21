import './App.css';

import AppRouter from './components/AppRouter';
import Header from './components/Header/Header';

import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { ButtonLanguage } from './components/ButtonLanguage';

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		supportedLngs: ["en", "tr", "ru"],
		fallbackLng: "en",
		detection: {
			order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
			caches: ['cookie'],
		},
		backend: {
			loadPath: "/assets/locales/{{lng}}.json",
		},
		react: {
			useSuspense: false,
		},
	});

function App() {
	return (
		<div className="App">
			<Header ButtonLanguage={ButtonLanguage} />
			<AppRouter />
		</div>
	);
}

export default App;
