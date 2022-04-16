import "./Explore.css"

import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import video_background from "../../assets/videos/explore.mp4";

const services = [
	{id: 1, link: "/polishing", text: "Polishing"},
	{id: 2, link: "/", text: "Exterior wash"},
	{id: 3, link: "/", text: "Window Tint"},
	{id: 4, link: "/", text: "Paint Protection Film"},
	{id: 5, link: "/", text: "Ceramic Coating"},
	{id: 6, link: "/", text: "Leather Trimming"},
	{id: 7, link: "/", text: "Dry Cleaning"},
	{id: 8, link: "/", text: "Paintless Dent Repair"},
]

export const Explore = () => {


	return (
		<motion.main
			className="Component"
		>
			 <div className="section_background explore_background">
                <video autoPlay playsInline muted preload="true">
                    <source src={video_background} type="video/mp4" />
                </video>
            </div>
            <div className="section_content">
                <div className="content_el">
					<h1>Car <b>Detaling</b><br /> & customizing services</h1>
					{services.map(({id, link, text}) => {
						return (
							<Link key={id} to={link}>
								{ text }
							</Link>
						);
					})}
                </div>
            </div>
		</motion.main>
	);
}