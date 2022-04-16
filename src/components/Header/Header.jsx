import "./Header.css"

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { AiOutlineInstagram, AiOutlineYoutube, AiOutlinePhone, AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';

import logo from "../../assets/images/logo.png"

export default function Header()
{
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
	},[width]);

	return (
		<header>
			<div className="logo">
				<Link to="/">
					<img src={logo} alt="logotye" />
				</Link>
			</div>
			<button className="btn_menu" onClick={() => menuToggleHandler()}>
				{menu ? 
					<FaTimes color="red" />
					:
					<AiOutlineMenu />
				}
			</button>
			<div className={`menu ${menu ? 'open' : '' } `}>
				<div className="menu_items">
					<Link to="/">
						Specialists & Certificates
					</Link>
					<Link to="/">
						Contacts
					</Link>
				</div>
				<div className="menu_links">
					<Link to="/">
						<AiOutlineInstagram />	
					</Link>
					<Link to="/">
						<AiOutlineYoutube />
					</Link>
					<Link to="/">
						<AiOutlinePhone />
					</Link>
				</div>
			</div>
		</header>
	);
}