import "./ContactPage.css"

import React from "react";

import { useTitle } from "../../utilities/useTitle";

import { motion } from "framer-motion";
import { BackgroundVideo } from "../../components/BackgroundVideo/BackgroundVideo";

import video_background from "../../assets/images/map.png";

export const ContactPage = () => {

    useTitle("Contacts | XDC");

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
            <BackgroundVideo video={video_background} blackout={false} image={true} />
        </motion.main >
    );

}