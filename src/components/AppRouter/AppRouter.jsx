import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { HomePage } from '../../pages/HomePage/HomePage';

import { AnimatePresence } from "framer-motion";
import { DryCleaningPage } from '../../pages/DryCleaningPage/DryCleaningPage';
import { CeramicApplicationPage } from '../../pages/CeramicApplicationPage/CeramicApplicationPage';
import { ProtectiveFilmPage } from '../../pages/ProtectiveFilmPage/ProtectiveFilmPage';
import { PDRPage } from '../../pages/PDRPage/PDRPage';
import { PolishingPage } from '../../pages/PolishingPage/PolishingPage';
import { LeatherWorkPage } from '../../pages/LeatherWorkPage/LeatherWorkPage';
import { AboutPage } from '../../pages/AboutPage/AboutPage';


const AppRouter = (props) => {

	const location = useLocation();
	
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				
				<Route path='/dry-cleaning' element={<DryCleaningPage />} />
				<Route path='/ceramic-application' element={<CeramicApplicationPage />} />
				<Route path='/protective-film' element={<ProtectiveFilmPage />} />
				<Route path='/pdr' element={<PDRPage />} />
				<Route path='/polishing' element={<PolishingPage />} />
				<Route path='/leather-work' element={<LeatherWorkPage />} />

				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</AnimatePresence>
	);
  };

export default AppRouter;