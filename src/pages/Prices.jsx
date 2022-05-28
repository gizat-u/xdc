import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useTitle } from "../utilities/useTitle";
import Modal from "../components/Modal/Modal";

import en_pc_price from "../assets/images/prices/en_pc_price.png";
import ru_pc_price from "../assets/images/prices/ru_pc_price.png";
import en_mb_price from "../assets/images/prices/en_mb_price.png";
import ru_mb_price from "../assets/images/prices/ru_mb_price.png";

import { useTranslation } from "react-i18next";


export const Prices = () => {

	const { t } = useTranslation();
	useTitle(t('Prices') + " | XDC");

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
			<Container>
				<div className="pc_prices">
					{t('lang') === 'ru' ?
						<img src={ru_pc_price} alt="price" />
						:
						<img src={en_pc_price} alt="price" />
					}
				</div>
				<div className="mb_prices">
					{t('lang') === 'ru' ?
						<img src={ru_mb_price} alt="price" />
						:
						<img src={en_mb_price} alt="price" />
					}
				</div>
				<Modal />
			</Container>
		</motion.main >
	);

}


const Container = styled.div`
	width: 78%;
	margin: auto;
	margin-top: 50px;

	img {
		width: 100%;
	}

	.modal_in {
		text-align: center;
	}
	
	button {
		margin: 20px 0 !important;
	}

	.pc_prices {
		display: flex;
	}

	.mb_prices {
		display: none;
		flex-direction: column;
	}

	.mb_prices img {
		margin-bottom: 30px;
	}

	@media (min-width: 150px) and (max-width: 768px) {
		

		.pc_prices {
			display: none;
		}

		.mb_prices {
			display: flex;
		}
	}
`;