import './App.css';

import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MultiLang from './components/MultiLang/MultiLang';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		fallbackLng: "en",
		detection: {
			order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
			caches: ['cookie',]
		},
		backend: {
			loadPath: '/assets/locales/{{lng}}/translation.json',
		},
		react: { useSuspense: false },
	});

function App() {

	const { t } = useTranslation();

	return (
		<div className="App">
			{/* <h2>{t('welcome_to_react')}</h2>; */}
			<Header />
			<AppRouter />
			<Footer />
			{/* <MultiLang /> */}
		</div>
	);
}

export default App;
