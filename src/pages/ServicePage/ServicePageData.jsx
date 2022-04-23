

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
        "Unfortunately as time passes, the surrounding world has a strong impact on the paintwork of your car. Constant using of the car especially over long distances leads to scratching of the car body parts. And also poor-quality washing causes huge damage to the coating of your car. As a result, the car loses its natural shine. And due to numerous small and large scratches, even the color saturation is lost.",
        "Polishing in the 'XDC' detailing studio is carried out in several stages, each of which is a time-consuming process. But it is not enough to simply perform all the stages of polishing. It is necessary to use high-quality materials and polishing wheels. It is necessary to determine the correct bundle for a specific type of varnish: 'paste + circle'.And also a very important aspect is professional equipment.",
        "You need to know that our team uses premium ROCHE materials for polishing the car body and we also use only professional equipment from Magik PRO. There are all the necessary polishing machines, polishing pastes, special microfibres and tools for preparing cars for polishing in our stockpile! Polishing the car body will return the former shine and saturation! The car body will begin to shine almost like new.",
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
        "The leather interior of the car is the main part of its interior. And for a comfortable stay in the car, the condition of its interior is very important. With improper care and under the influence of the environment the leather interior quickly wears out, the upholstery loses its color.",
        "During operation, various stains, cuts, scratches and tears may appear on the leather upholstery of the interior. And exposure to ultraviolet light leads to skin burnout.",
        "XDC studio specialists can easily cope with these and other problems.",
        "We do a full range of work from the restoration of the skin to the complete remodeling of the car interior. We use only the best paints as well as proven quality materials for interior trim.",
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
        "Applying a ceramic layer in the XDC studio is a reliable way to protect the paintwork of a car with the effect of an exhibition shine. The ceramic coating has hydrophobic and dirt-repellent effects increases the hardness of the paintwork, increases the resistance to chips and scratches, UV protection (color burnout), chemical resistance (road reagents, bitumen, etc.) give saturation and depth of color.These are the main features of modern protective ceramic coatings. In conditions of constant solar influence, ceramic body protection becomes a mandatory procedure to preserve the appearance and value of the car in the future. The car will 'age' less and maintain a presentable appearance for many years.",
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
        "PDR-dent straightening without painting – defect removal technology (dent alignment) without changing the base paintwork in cases where it is not damaged or there is no significant damage to the paint layer. Leveling of dents without painting the car is carried out using the German PDR technology. In addition to the speed of work on straightening (leveling) dents without painting this technology is also valuable from the financial side because even an hour of work by a high-class dent removal master costs less than a complete removal of a body part and fixing the dent with subsequent priming and painting.",
        "In addition to extensive experience in this field our specialists have received in-depth specialized training in PDR, which certainly allows us to be responsible for the quality of this type of work!",
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
        "A neat, well-groomed interior will allow everyone in the car to feel as comfortable as possible and will create the most favorable impression of the car owner himself. it is advisable to use the dry cleaning service of the salon, which is performed in the shortest possible time to achieve the best effect ",
        "The main goal of XDC studio specialists is to remove not only visible pollution and refresh the appearance, but also eliminate invisible pollution, such as dustiness of interior surfaces, contamination in hard–to-reach and invisible parts of the car interior. Comprehensive dry cleaning copes with this task perfectly, cleaning all hard-to-reach places and updating the exterior surfaces of the interior, ceiling and seats (regardless of what material they are made of).",
        "Our craftsmen use chemicals and equipment of premium brands such as KOCH, Karcher, DVX, Magik PRO which improves the quality of the result of work.",
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
        "Nanocarwash from the detailing studio 'XDC' is primarily a highly professional approach to our favourite Business. Our specialists use only luxury materials from KOCH for work. In addition to the gorgeous external effect the machine receives protection from the influence of sunlight, dust and dirt that corrode the surface layers of the paintwork. First of all, visible dirt is removed from the surface of the car in a non-contact way. This is especially true of the wheels and the lower part of the body where particles of earth, clay, sand and so on accumulate.",
        "Next, a special nano-shampoo is applied to the surface prepared in this way which with the help of a large-pore sponge, removes particles of reagents, alkali, etc. Shiny metal parts are treated with a separate chemical composition.The third stage of 'Nano washing' is spraying a nano-preservative onto a clean body which quickly fills in all the microcracks and scratches on the body, and also creates an invisible protective film. The car acquires a brightness of color and gloss.",
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
        "First of all, car pasting is a protective procedure for the paintwork of the car body, regardless of which film will be used:		- the use of anti-gravity film allows you to completely protect the car body without changing color from chips, scratches, exposure to sunlight, dust and dirt. This type of film is transparent which will not affect the color of your car in any way but you can choose a matte texture; - the use of vinyl films in addition to protective functions makes it possible to satisfy your aesthetic taste and give your car absolutely any color from a wide range. In addition the colors can be combined which will give the most unique look to your car!"
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
        "The Detaling studio DS offers its customers only premium-class tinting films LLUMAR, SUNTEK with a special coating that allows them to be more resistant to UV rays and therefore practically do not fade in the sun. Also high-quality tinting film does not distort visibility. The blinding sun does not penetrate through the correct tinted glass and it is much more comfortable for the driver to be behind the wheel and enjoy the ride.",
        "Proper tinted windows do not allow the entire flow of ultraviolet rays, so the interior upholstery does not burn out the interior and dashboard do not overheat which helps to preserve the interior of the car."
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
