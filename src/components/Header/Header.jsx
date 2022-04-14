import "./Header.css"

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { AiOutlineMenu, AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';

import logo from "../../assets/images/logo.png"

export default function Header()
{
	const [social, setSocial] = useState(false);
	const [menu, setMenu] = useState(false);
	
	const menuToggleHandler = () => {
		setMenu((p) => !p);
		if (social)
			setSocial(false);
	}

	const socialToggleHandler = () => {
		setSocial((p) => !p);
		if (menu)
			setMenu(false);
	}

	const handleClickLink = () => {
		setMenu(false);
		setSocial(false);
	}

	return (
		<header>
			<nav>
				<button onClick={() => socialToggleHandler()}>
					{social ? 
						<FaTimes color="red" />
						:
						<AiOutlinePhone />
					}
				</button>
				<Link to="/">
					<img src={logo} />
				</Link>
				<button onClick={() => menuToggleHandler()}>
					{menu ? 
						<FaTimes color="red" />
						:
						<AiOutlineMenu />
					}
				</button>
			</nav>
			<div className={`menu ${menu ?  'open' : '' } `}>
				<Link to="/" onClick={() => handleClickLink()}>Home</Link>
				<Link to="/about" onClick={() => handleClickLink()}>About</Link>
			</div>
			<div className={`menu social ${social ?  'open' : '' } `}>
				<Link to="/" onClick={() => handleClickLink()}><AiOutlineWhatsApp /> What's App</Link>
				<Link to="/" onClick={() => handleClickLink()}><AiOutlinePhone />Call +90(777) 777-77-77</Link>
			</div>
		</header>
	);
}