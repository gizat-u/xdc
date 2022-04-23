import "./PricePage.css"

import React from "react";

import { useTitle } from "../../utilities/useTitle";

import { motion } from "framer-motion";

import prices from "../../assets/images/prices.png";

export const PricePage = () => {
    useTitle("Prices | XDC");

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
            <div className="prices">
                <img src={prices} alt={prices} />
            </div>
        </motion.main >
    );

}