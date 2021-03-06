import React, { useState } from "react";

import { useTitle } from "../utilities/useTitle";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import styled from "styled-components";

import { Slider } from "../components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import cert1 from "../assets/images/certificates/1.png";
import cert2 from "../assets/images/certificates/2.png";
import cert3 from "../assets/images/certificates/3.png";
import cert4 from "../assets/images/certificates/4.png";
import cert5 from "../assets/images/certificates/5.png";

import ramiz from "../assets/images/specialists/Ramiz.jpg";
import ahmed from "../assets/images/specialists/Ahmed.jpg";

import background_img from "../assets/images/background/specialist.jpg";
import { Background } from "../components/Background/Background";

export const Certificates = () => {

	const { t } = useTranslation();

	const [fullpage, setFullpage] = useState(false);
	const [imageFullscreen, setImageFullpage] = useState("");

	const fullpageHandler = (url) => {
		if (url)
			setImageFullpage(url['url']);
		setFullpage((p) => !p);
	}

	useTitle(t("Specialists & Certificates") + " | XDC");

	return (
		<motion.main
			className="Page"
			initial={{
				y: "-100",
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
			exit={{
				y: "-100",
				opacity: 0,
				transition: { duration: 0.1 }
			}}
		>
			<Background video={background_img} loop={false} blackout={true} image={true} />
			<Container>
				<h2>{t('Specialists & Certificates')}</h2>
				<div className="specialists">
					<div className="specialist">
						<img src={ramiz} alt="..." onClick={() => fullpageHandler({ url: ramiz })} />
						<h3>{t('RAMIZ OSMANLI')}</h3>
					</div>
					<div className="specialist">
						<img src={ahmed} alt="..." onClick={() => fullpageHandler({ url: ahmed })} />
						<h3>{t('AHMED KHALILOV')}</h3>
					</div>
				</div>
				<div className="specialist_role">
					<span>{t('Key specialists')}</span>
				</div>
				<Slider>
					<SwiperSlide><img src={cert1} alt="certificate" onClick={() => fullpageHandler({ url: cert1 })} /></SwiperSlide>
					<SwiperSlide><img src={cert2} alt="certificate" onClick={() => fullpageHandler({ url: cert2 })} /></SwiperSlide>
					<SwiperSlide><img src={cert3} alt="certificate" onClick={() => fullpageHandler({ url: cert3 })} /></SwiperSlide>
					<SwiperSlide><img src={cert4} alt="certificate" onClick={() => fullpageHandler({ url: cert4 })} /></SwiperSlide>
					<SwiperSlide><img src={cert5} alt="certificate" onClick={() => fullpageHandler({ url: cert5 })} /></SwiperSlide>
				</Slider>
				{/* "this.style.display='none';" */}
				<div
					id="fullpage"
					onClick={() => fullpageHandler()}
					style={fullpage ? {
						backgroundImage: `url(${imageFullscreen})`,
						display: "flex",
					} : {}}
				>

				</div>
			</Container>
		</motion.main >
	);

}


const Container = styled.div`

	z-index: 5;
	.swiper {
		height: 300px;
	}
	.swiper img {
		height: 300px;
		width: auto;
	}
	.open {
		display: flex;
	}
	#fullpage {
		display: none;
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-size: contain;
		background-repeat: no-repeat no-repeat;
		background-position: center center;
		background-color: black;
	}
	h2{
		color: #fff;
		text-transform: uppercase;
		display: flex;
		justify-content: center;
		padding-top: 15px;
		text-align: center;
		font-family: "PhonkRegular", sans-serif;
		font-weight: lighter;
	}


	.specialists {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.specialists .specialist {
		display: flex;
		flex-direction: column;
		justify-content: center;

		margin: 10px;
	
		align-items: center;
		text-align: center;
	
		transition: 0.35s all;
	
		cursor: pointer;
	}
	
	.specialists .specialist:hover h3 {
		color: red;
	}

	.specialists .specialist img {
		border-radius: 10px;
	}
	
	.specialists .specialist:hover img {
		transform: scale(1.05);
	}
	
	.specialist_role {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		width: 100%;
		margin: 15px 0;
	}

	.specialist_role span {
		color: #fff;
		font-family: "PhonkRegular",sans-serif;
		font-weight: lighter;
		width: 80%;
	}
	
	.specialists .specialist img {
		width: 150px;
		transition: 0.35s all;
	}
	
	.specialists .specialist h3 {
		color: #fff;
		transition: 0.35s all;
		text-transform: uppercase;
		font-family: "PhonkRegular", sans-serif;
		font-weight: lighter;
	
	}

	@media (min-width: 150px) and (max-width: 768px) {

		.specialist {
			width: 45%;
		}



	}
`;