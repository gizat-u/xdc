import "./ServiceImages.css"

import React from "react";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

export const ServiceImages = ({ service }) => {

    const { t } = useTranslation();

    const animateDiv = {
        hidden: {
            y: -50,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.4,
            }
        }
    }
    return (

        <div
            className="content_el"
        >
            Photos
        </div>
    );
}