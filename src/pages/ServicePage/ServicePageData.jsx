

import polishing_video from "../../assets/videos/polishing.mp4";
import ceramicing_video from "../../assets/videos/ceramicing.mp4";
import cleaning_video from "../../assets/videos/cleaning.mp4"
import filming_video from "../../assets/videos/filming.mp4"
import pdr_video from "../../assets/videos/pdr.mp4"
import skining_video from "../../assets/videos/skining.mp4"
import washing_video from "../../assets/videos/washing.mp4"


export const detectService = (path) => {

    if (path === "/polishing")
        return PolishingData;
    if (path === "/exterior-wash")
        return WashData;
    if (path === "/window-tint")
        return TintData;
    if (path === "/paint-protection-film")
        return FilmData;
    if (path === "/ceramics")
        return CersamicsgData;
    if (path === "/leather-trimming")
        return LeatherData;
    if (path === "/dry-cleaning")
        return CleaningData;
    if (path === "/paintless-dent-repair")
        return PDRData;
    return (null);
}


export const services = [
    { id: 1, link: "/polishing", text: "Polishing" },
    { id: 2, link: "/exterior-wash", text: "Exterior wash" },
    { id: 3, link: "/window-tint", text: "Window Tint" },
    { id: 4, link: "/paint-protection-film", text: "Paint Protection Film" },
    { id: 5, link: "/ceramics", text: "Ceramic Coating" },
    { id: 6, link: "/leather-trimming", text: "Leather Trimming" },
    { id: 7, link: "/dry-cleaning", text: "Dry Cleaning" },
    { id: 8, link: "/paintless-dent-repair", text: "Paintless Dent Repair" },
];

const PolishingData = {

    title: "Polishing",
    video: polishing_video,
    p: [
        "Polishing_1",
        "Polishing_2",
        "Polishing_3",
    ],
    priceList: [
        { id: 1, title: "Уровень #1", subtitle: "крупнозер + мелкозерн + финиш", light: 1300, jeep: 2000, size: "sm" },
        { id: 2, title: "Уровень #2", subtitle: "мелкозерн + финиш", light: 800, jeep: 1300, size: "sm" },

        { id: 3, title: "Удаление царапин", subtitle: "", light: "200-500", jeep: "200-500", size: "md" },
        { id: 4, title: "Обработка наждаткой окраш поверх", subtitle: "", light: 300, jeep: 300, size: "md" },

        { id: 5, title: "Полировка внутренних деталей салона", subtitle: "", light: 700, jeep: 700, size: "md" },
        { id: 6, title: "Полировка хрома", subtitle: "", light: 300, jeep: 300, size: "md" },
    ],

};

const LeatherData = {
    title: 'Restoration of the leather interior of the car',
    video: skining_video,
    p: [
        "Restoration of the leather interior of the car_1",
        "Restoration of the leather interior of the car_2",
        "Restoration of the leather interior of the car_3",
        "Restoration of the leather interior of the car_4",
    ],
    priceList: [
        { id: 1, title: "Уровень #1", subtitle: "крупнозер + мелкозерн + финиш", light: 1300, jeep: 2000, size: "sm" },
        { id: 2, title: "Уровень #2", subtitle: "мелкозерн + финиш", light: 800, jeep: 1300, size: "sm" },

        { id: 3, title: "Удаление царапин", subtitle: "", light: "200-500", jeep: "200-500", size: "md" },
        { id: 4, title: "Обработка наждаткой окраш поверх", subtitle: "", light: 300, jeep: 300, size: "md" },

        { id: 5, title: "Полировка внутренних деталей салона", subtitle: "", light: 700, jeep: 700, size: "md" },
        { id: 6, title: "Полировка хрома", subtitle: "", light: 300, jeep: 300, size: "md" },
    ],
}

const CersamicsgData = {
    title: "Ceramics",
    video: ceramicing_video,
    p: [
        "Ceramics_1",
    ],
    priceList: [
        { id: 1, title: "Уровень #1", subtitle: "крупнозер + мелкозерн + финиш", light: 1300, jeep: 2000, size: "sm" },
        { id: 2, title: "Уровень #2", subtitle: "мелкозерн + финиш", light: 800, jeep: 1300, size: "sm" },

        { id: 3, title: "Удаление царапин", subtitle: "", light: "200-500", jeep: "200-500", size: "md" },
        { id: 4, title: "Обработка наждаткой окраш поверх", subtitle: "", light: 300, jeep: 300, size: "md" },

        { id: 5, title: "Полировка внутренних деталей салона", subtitle: "", light: 700, jeep: 700, size: "md" },
        { id: 6, title: "Полировка хрома", subtitle: "", light: 300, jeep: 300, size: "md" },
    ],
};

const PDRData = {
    title: "PDR-dent straightening without painting",
    video: pdr_video,
    p: [
        "PDR-dent straightening without painting_1",
        "PDR-dent straightening without painting_2",
    ],
    priceList: [
        { id: 1, title: "Уровень #1", subtitle: "крупнозер + мелкозерн + финиш", light: 1300, jeep: 2000, size: "sm" },
        { id: 2, title: "Уровень #2", subtitle: "мелкозерн + финиш", light: 800, jeep: 1300, size: "sm" },

        { id: 3, title: "Удаление царапин", subtitle: "", light: "200-500", jeep: "200-500", size: "md" },
        { id: 4, title: "Обработка наждаткой окраш поверх", subtitle: "", light: 300, jeep: 300, size: "md" },

        { id: 5, title: "Полировка внутренних деталей салона", subtitle: "", light: 700, jeep: 700, size: "md" },
        { id: 6, title: "Полировка хрома", subtitle: "", light: 300, jeep: 300, size: "md" },
    ],
};

const CleaningData = {
    title: "Dry cleaning of the salon",
    video: cleaning_video,
    p: [
        "Dry cleaning of the salon_1",
        "Dry cleaning of the salon_2",
        "Dry cleaning of the salon_3",
    ],
    priceList: [
        { id: 1, title: "Уровень #1", subtitle: "крупнозер + мелкозерн + финиш", light: 1300, jeep: 2000, size: "sm" },
        { id: 2, title: "Уровень #2", subtitle: "мелкозерн + финиш", light: 800, jeep: 1300, size: "sm" },

        { id: 3, title: "Удаление царапин", subtitle: "", light: "200-500", jeep: "200-500", size: "md" },
        { id: 4, title: "Обработка наждаткой окраш поверх", subtitle: "", light: 300, jeep: 300, size: "md" },

        { id: 5, title: "Полировка внутренних деталей салона", subtitle: "", light: 700, jeep: 700, size: "md" },
        { id: 6, title: "Полировка хрома", subtitle: "", light: 300, jeep: 300, size: "md" },
    ],
};

const WashData = {
    title: "Nanocarwash",
    video: washing_video,
    p: [
        "Nanocarwash_1",
        "Nanocarwash_2",
    ],
    priceList: [
        { id: 1, title: "Уровень #1", subtitle: "крупнозер + мелкозерн + финиш", light: 1300, jeep: 2000, size: "sm" },
        { id: 2, title: "Уровень #2", subtitle: "мелкозерн + финиш", light: 800, jeep: 1300, size: "sm" },

        { id: 3, title: "Удаление царапин", subtitle: "", light: "200-500", jeep: "200-500", size: "md" },
        { id: 4, title: "Обработка наждаткой окраш поверх", subtitle: "", light: 300, jeep: 300, size: "md" },

        { id: 5, title: "Полировка внутренних деталей салона", subtitle: "", light: 700, jeep: 700, size: "md" },
        { id: 6, title: "Полировка хрома", subtitle: "", light: 300, jeep: 300, size: "md" },
    ],
};

const FilmData = {
    title: "Pasting with vinyl and polyurethane films",
    video: filming_video,
    p: [
        "Pasting with vinyl and polyurethane films_1"
    ],
    priceList: [
        { id: 1, title: "Уровень #1", subtitle: "крупнозер + мелкозерн + финиш", light: 1300, jeep: 2000, size: "sm" },
        { id: 2, title: "Уровень #2", subtitle: "мелкозерн + финиш", light: 800, jeep: 1300, size: "sm" },

        { id: 3, title: "Удаление царапин", subtitle: "", light: "200-500", jeep: "200-500", size: "md" },
        { id: 4, title: "Обработка наждаткой окраш поверх", subtitle: "", light: 300, jeep: 300, size: "md" },

        { id: 5, title: "Полировка внутренних деталей салона", subtitle: "", light: 700, jeep: 700, size: "md" },
        { id: 6, title: "Полировка хрома", subtitle: "", light: 300, jeep: 300, size: "md" },
    ],
};

const TintData = {
    title: "Tinting",
    video: filming_video,
    p: [
        "Tinting_1",
        "Tinting_2"
    ],
    priceList: [
        { id: 1, title: "Уровень #1", subtitle: "крупнозер + мелкозерн + финиш", light: 1300, jeep: 2000, size: "sm" },
        { id: 2, title: "Уровень #2", subtitle: "мелкозерн + финиш", light: 800, jeep: 1300, size: "sm" },

        { id: 3, title: "Удаление царапин", subtitle: "", light: "200-500", jeep: "200-500", size: "md" },
        { id: 4, title: "Обработка наждаткой окраш поверх", subtitle: "", light: 300, jeep: 300, size: "md" },

        { id: 5, title: "Полировка внутренних деталей салона", subtitle: "", light: 700, jeep: 700, size: "md" },
        { id: 6, title: "Полировка хрома", subtitle: "", light: 300, jeep: 300, size: "md" },
    ],
};
