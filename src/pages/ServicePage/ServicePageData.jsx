

import polishing_video from "../../assets/videos/polishing.mp4";
import ceramic_video from "../../assets/videos/ceramic.mp4";
import cleaning_video from "../../assets/videos/cleaning.mp4";
import vinyl_video from "../../assets/videos/vinyl.mp4";
import pdr_video from "../../assets/videos/pdr.mp4";
import leather_video from "../../assets/videos/leather.mp4";
import washing_video from "../../assets/videos/washing.mp4";
import tint_video from "../../assets/videos/tint.mp4";
import painting_video from "../../assets/videos/painting.mp4";
import design_video from "../../assets/videos/design.mp4";


export const detectService = (path) => {

	if (path === "/polishing")
		return PolishingData;
	if (path === "/car-washing")
		return CarWashingData;
	if (path === "/window-tint")
		return WindowTintData;
	if (path === "/vinyl")
		return VinylData;
	if (path === "/ceramic-coating")
		return CeramicCoatingData;
	if (path === "/leather-trimming")
		return LeatherTrimmingData;
	if (path === "/dry-cleaning")
		return DryCleaningData;
	if (path === "/paintless-dent-repair")
		return PDRData;
	if (path === "/painting")
		return PaintingData;
	if (path === "/design-custom")
		return DesignCustomData;
	return (null);
}


export const services = [
	{ id: 1, link: "/car-washing", text: "Car Washing" },
	{ id: 2, link: "/dry-cleaning", text: "Dry Cleaning" },
	{ id: 3, link: "/polishing", text: "Polishing" },
	{ id: 4, link: "/ceramic-coating", text: "Ceramic Coating" },
	{ id: 5, link: "/window-tint", text: "Window Tint" },
	{ id: 6, link: "/vinyl", text: "Vinyl" },
	{ id: 7, link: "/paintless-dent-repair", text: "Paintless Dent Repair" },
	{ id: 8, link: "/painting", text: "Painting" },
	{ id: 9, link: "/leather-trimming", text: "Leather Trimming" },
	{ id: 10, link: "/design-custom", text: "Design and Custom" },

];

const CarWashingData = {
	title: "Car Washing",
	video: washing_video,
	p: [
		'Car Washing 1',
		'Car Washing 2',
		'Car Washing 3'
	]
};

const DryCleaningData = {
	title: "Dry Cleaning",
	video: cleaning_video,
	p: [
		'Dry Cleaning 1',
		'Dry Cleaning 2',
		'Dry Cleaning 3',
	]
};

const PolishingData = {
	title: "Polishing",
	video: polishing_video,
	p: [
		'Polishing 1',
		'Polishing 2',
		'Polishing 3',
	]
};

const CeramicCoatingData = {
	title: "Ceramic Coating",
	video: ceramic_video,
	p: [
		'Ceramic Coating 1',
		'Ceramic Coating 2',
		'Ceramic Coating 3'
	]
};

const WindowTintData = {
	title: "Window Tint",
	video: tint_video,
	p: [
		'Window Tint 1',
		'Window Tint 2',
	]
};

const VinylData = {
	title: "Pasting with vinyl and polyurethane films",
	video: vinyl_video,
	p: [
		'Pasting with vinyl and polyurethane films 1',
		'Pasting with vinyl and polyurethane films 2',
		'Pasting with vinyl and polyurethane films 3',
	],
};

const PDRData = {
	title: "Paintless Dent Repair",
	video: pdr_video,
	p: [
		'Paintless Dent Repair 1',
		'Paintless Dent Repair 2',
	]
};

const PaintingData = {
	title: "Painting",
	video: painting_video,
	p: [
		'Painting 1',
	]
};

const LeatherTrimmingData = {
	title: 'Leather Trimming',
	video: leather_video,
	p: [
		'Leather Trimming 1',
		'Leather Trimming 2',
		'Leather Trimming 3',
		'Leather Trimming 4',
	]
}

const DesignCustomData = {
	title: "Design and Custom",
	video: design_video,
	p: [
		'Design and Custom 1',
		'Design and Custom 2',
		'Design and Custom 3',
		'Design and Custom 4',
		'Design and Custom 5',
		'Design and Custom 6',
		'Design and Custom 7',
		'Design and Custom 8',
		'Design and Custom 9',
		'Design and Custom 10',
	]
};
