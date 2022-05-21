
import { Error } from '../pages/Error';
import { Home } from '../pages/Home';

import { Contacts } from '../pages/Contacts';
import { Prices } from '../pages/Prices';

import { Certificates } from '../pages/Certificates';

export const pages = [
	{ key: 1, path: "/", element: <Home /> },
	{ key: 2, path: "*", element: <Error /> },
	{ key: 3, path: "/contacts", element: <Contacts /> },
	{ key: 4, path: "/prices", element: <Prices /> },
	{ key: 5, path: "/specialists-and-certificates", element: <Certificates /> },
];