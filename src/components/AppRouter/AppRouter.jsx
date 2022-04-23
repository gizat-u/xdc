import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { HomePage } from '../../pages/HomePage/HomePage';

import { AnimatePresence } from "framer-motion";
import { ServicePage } from '../../pages/ServicePage/ServicePage';

import { services } from '../../pages/ServicePage/ServicePageData';

const AppRouter = (props) => {

	const location = useLocation();

	return (
		<AnimatePresence
			initial={false}
			exitBeforeEnter
		>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<HomePage />} />

				{services.map(({ id, link, text }) => {
					return (
						<Route key={id} path={link} element={<ServicePage />} />
					);
				})}

				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AppRouter;