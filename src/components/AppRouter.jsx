import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from "framer-motion";
import { Services } from '../pages/Services';

import { services } from '../data/Services';
import { pages } from "../data/Pages";

const AppRouter = (props) => {
	const location = useLocation();

	return (
		<AnimatePresence
			initial={false}
			exitBeforeEnter
		>
			<Routes location={location} key={location.pathname}>


				{pages.map(({ key, path, element }) => {
					return (
						<Route key={key} path={path} element={element} />
					);
				})}

				{services.map(({ id, link, text }) => {
					return (
						<Route key={id} path={link} element={<Services />} />
					);
				})}

			</Routes>
		</AnimatePresence>
	);
};

export default AppRouter;