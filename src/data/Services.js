

import polishing_video from "../assets/videos/polishing.mp4";
import ceramic_video from "../assets/videos/ceramic.mp4";
import cleaning_video from "../assets/videos/cleaning.mp4";
import vinyl_video from "../assets/videos/vinyl.mp4";
import pdr_video from "../assets/videos/pdr.mp4";
import leather_video from "../assets/videos/leather.mp4";
import washing_video from "../assets/videos/washing.mp4";
import tint_video from "../assets/videos/tint.mp4";
import painting_video from "../assets/videos/painting.mp4";
import design_video from "../assets/videos/design.mp4";

import car_washing_price from "../assets/images/prices/car_washing.png";
import ceramic_price from "../assets/images/prices/ceramic.png";
import dry_cleaning_price from "../assets/images/prices/dry_cleaning.png";
import leather_trimming_price from "../assets/images/prices/leather_trimming.png";
import pdr_price from "../assets/images/prices/pdr.png";
import polishing_price from "../assets/images/prices/polishing.png";
import window_tint_price from "../assets/images/prices/window_tint.png";

// Window Tint
import window_tint_1 from "../assets/images/slider/WindowTint1.png";
import window_tint_2 from "../assets/images/slider/WindowTint2.png";
import window_tint_3 from "../assets/images/slider/WindowTint3.png";
// DryCleaning
import dry_cleaning_1 from "../assets/images/slider/DryCleaning1.png";
import dry_cleaning_2 from "../assets/images/slider/DryCleaning2.png";
import dry_cleaning_3 from "../assets/images/slider/DryCleaning3.png";
// LeatherTrimming
import leather_trimming_1 from "../assets/images/slider/LeatherTrimming1.jpg";
import leather_trimming_2 from "../assets/images/slider/LeatherTrimming2.jpg";
import leather_trimming_3 from "../assets/images/slider/LeatherTrimming3.jpg";
// DesginCustom
import design_custom_1 from "../assets/images/slider/DesignCustom1.jpg";
import design_custom_2 from "../assets/images/slider/DesignCustom2.jpg";
import design_custom_3 from "../assets/images/slider/DesignCustom3.jpg";
// CarWashing
import car_washing_1 from "../assets/images/slider/CarWashing1.jpg";
import car_washing_2 from "../assets/images/slider/CarWashing2.jpg";
import car_washing_3 from "../assets/images/slider/CarWashing3.jpg";
// import car_washing_4 from "../assets/images/slider/CarWashing4.jpg";
// Polishing
import polishing_1 from "../assets/images/slider/Polishing1.jpg";
import polishing_2 from "../assets/images/slider/Polishing2.jpg";
import polishing_3 from "../assets/images/slider/Polishing3.jpg";
// Painting
import painting_1 from "../assets/images/slider/Painting1.jpg";
import painting_2 from "../assets/images/slider/Painting2.jpg";
import painting_3 from "../assets/images/slider/Painting3.jpg";
// PDR
import pdr_1 from "../assets/images/slider/PDR1.jpg";
import pdr_2 from "../assets/images/slider/PDR2.jpg";
import pdr_3 from "../assets/images/slider/PDR3.jpg";
// CeramicCoating1
import ceramic_coating_1 from "../assets/images/slider/CeramicCoating1.jpg";
import ceramic_coating_2 from "../assets/images/slider/CeramicCoating2.jpg";
import ceramic_coating_3 from "../assets/images/slider/CeramicCoating3.jpg";
// import ceramic_coating_4 from "../assets/images/slider/CeramicCoating4.jpg";
// Vinyl
import vinyl_1 from "../assets/images/slider/Vinyl1.jpg";
import vinyl_2 from "../assets/images/slider/Vinyl2.jpg";
import vinyl_3 from "../assets/images/slider/Vinyl3.jpg";

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

export const prices = [
	{ key: 1, price: car_washing_price },
	{ key: 2, price: ceramic_price },
	{ key: 3, price: dry_cleaning_price },
	{ key: 4, price: leather_trimming_price },
	{ key: 5, price: pdr_price },
	{ key: 6, price: polishing_price },
	{ key: 7, price: window_tint_price },
];

const CarWashingData = {
	title: "Car Washing",
	video: washing_video,
	p: [
		'Car Washing 1',
		'Car Washing 2',
		'Car Washing 3'
	],
	img_1: car_washing_1,
	img_2: car_washing_2,
	img_3: car_washing_3,
	price: car_washing_price,
};

const DryCleaningData = {
	title: "Dry Cleaning",
	video: cleaning_video,
	p: [
		'Dry Cleaning 1',
		'Dry Cleaning 2',
		'Dry Cleaning 3',
	],
	img_1: dry_cleaning_1,
	img_2: dry_cleaning_2,
	img_3: dry_cleaning_3,
	price: dry_cleaning_price,
};

const PolishingData = {
	title: "Polishing",
	video: polishing_video,
	p: [
		'Polishing 1',
		'Polishing 2',
		'Polishing 3',
	],
	img_1: polishing_1,
	img_2: polishing_2,
	img_3: polishing_3,
	price: polishing_price
};

const CeramicCoatingData = {
	title: "Ceramic Coating",
	video: ceramic_video,
	p: [
		'Ceramic Coating 1',
		'Ceramic Coating 2',
		'Ceramic Coating 3'
	],
	img_1: ceramic_coating_1,
	img_2: ceramic_coating_2,
	img_3: ceramic_coating_3,
	price: ceramic_price,
};

const WindowTintData = {
	title: "Window Tint",
	video: tint_video,
	p: [
		'Window Tint 1',
		'Window Tint 2',
	],
	img_1: window_tint_1,
	img_2: window_tint_2,
	img_3: window_tint_3,
	price: window_tint_price,
};

const VinylData = {
	title: "Pasting with vinyl and polyurethane films",
	video: vinyl_video,
	p: [
		'Pasting with vinyl and polyurethane films 1',
		'Pasting with vinyl and polyurethane films 2',
		'Pasting with vinyl and polyurethane films 3',
	],
	img_1: vinyl_1,
	img_2: vinyl_2,
	img_3: vinyl_3,
};

const PDRData = {
	title: "Paintless Dent Repair",
	video: pdr_video,
	p: [
		'Paintless Dent Repair 1',
		'Paintless Dent Repair 2',
	],
	img_1: pdr_1,
	img_2: pdr_2,
	img_3: pdr_3,
	price: pdr_price
};

const PaintingData = {
	title: "Painting",
	video: painting_video,
	p: [
		'Painting 1',
	],
	img_1: painting_1,
	img_2: painting_2,
	img_3: painting_3,
};

const LeatherTrimmingData = {
	title: 'Leather Trimming',
	video: leather_video,
	p: [
		'Leather Trimming 1',
		'Leather Trimming 2',
		'Leather Trimming 3',
		'Leather Trimming 4',
	],
	img_1: leather_trimming_1,
	img_2: leather_trimming_2,
	img_3: leather_trimming_3,
	price: leather_trimming_price
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
	],
	img_1: design_custom_1,
	img_2: design_custom_2,
	img_3: design_custom_3
};
