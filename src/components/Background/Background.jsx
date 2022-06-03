import './Background.css';

import { motion } from "framer-motion";

import video_static from '../../assets/images/video.jpg'

export const Background = ({
	video,
	blackout = true,
	image = false,
	loop = true,
	important = false,
	background_img }) => {


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
		<motion.div
			className="background_video"
			variants={animateImg}
			initial="hidden"
			animate="visible"
		>
			{image ?
				<img src={video} alt="service" />
				:
				<>
					{important ?
						<>
							<video autoPlay playsInline muted loop={loop} preload="true" className="important_video" >
								<source src={video} type="video/mp4" />
							</video>
						</>
						:
						<>
							<div className="background_video_content">
								<img src={background_img} alt="service" />
							</div>
							<video autoPlay playsInline muted loop={loop} preload="true" >
								<source src={video} type="video/mp4" />
							</video>
						</>
					}
				</>
			}
			{blackout ?
				<div className="background_video_blackout" />
				:
				""
			}
		</motion.div>
	);
}