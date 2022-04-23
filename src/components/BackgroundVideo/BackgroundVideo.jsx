import './BackgroundVideo.css';

import { motion } from "framer-motion";

export const BackgroundVideo = ({ video, blackout = true, image = false }) => {
	const animateImg = {
		hidden: {
			height: 0,
			opacity: 0,
		},
		visible: {
			height: "100%",
			opacity: 1,
			transition: {
				delay: 0.5,
			}
		}
	}

	return (
		<motion.div className="background_video" variants={animateImg} initial="hidden" animate="visible" >
			{image ?
				<img src={video} alt="image" />
				:
				<video autoPlay playsInline muted loop preload="true" >
					<source src={video} type="video/mp4" />
				</video>
			}
			{blackout ?
				<div className="background_video_blackout" />
				:
				""
			}
		</motion.div>
	);
}