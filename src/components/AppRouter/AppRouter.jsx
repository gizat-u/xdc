import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { HomePage } from '../../pages/HomePage/HomePage';

import { AnimatePresence } from "framer-motion";
import { ServicePage } from '../../pages/ServicePage/ServicePage';


const AppRouter = (props) => {

	const location = useLocation();

	return (
		<AnimatePresence
			initial={false}
			exitBeforeEnter
		>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<HomePage />} />
				<Route path='/polishing' element={<ServicePage />} />

				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AppRouter;