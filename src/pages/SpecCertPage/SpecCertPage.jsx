import "./SpecCertPage.css"

import React from "react";

import { useTitle } from "../../utilities/useTitle";

import { motion } from "framer-motion";


export const SpecCertPage = () => {

    useTitle("Specialists & Certificates | XDC");

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
            asd
        </motion.main >
    );

}