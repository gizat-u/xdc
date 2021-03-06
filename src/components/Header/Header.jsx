import "./Header.css"

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { social_links, nav_links } from "../../data/Links";

import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import logo from "../../assets/images/logo.png";

import { useTranslation } from "react-i18next";
import { Background } from "../Background/Background";

import background_img from "../../assets/images/background/main_1.jpg";


export default function Header({ ButtonLanguage }) {

	const { t } = useTranslation();

	const [menu, setMenu] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	const menuToggleHandler = () => {
		setMenu((p) => !p);
	}

	const handleClickLink = () => {
		setMenu(false);
	}

	useEffect(() => {
		width >= 768 && setMenu(false);
	}, [width]);

	return (
		<header>
			<nav>
				<button className="btn_menu" onClick={() => menuToggleHandler()}>
					{menu ?
						<FaTimes color="red" />
						:
						<AiOutlineMenu />
					}
				</button>
				<div className="logo">
					<Link to="/" onClick={() => handleClickLink()}>
						<img src={logo} alt="logotye" />
					</Link>
				</div>
				<div className={`menu ${menu ? 'open' : ''} `}>
					{menu ?
						<Background video={background_img} loop={false} blackout={true} image={true} />
						:
						''
					}
					<div className="menu_items">
						{social_links.map(({ id, link, text }) => {
							return (
								<Link key={id} to={link} onClick={() => handleClickLink()}>
									{t(text)}
								</Link>
							);
						})}
					</div>
					<div className="menu_links">
						<ButtonLanguage />
						{nav_links.map(({ id, link, text }) => {
							return (
								<a key={id} href={link} onClick={() => handleClickLink()} target="_blank" rel="noopener noreferrer">
									{text}
								</a>
							);
						})}
					</div>
				</div>
			</nav>
		</header>
	);
}