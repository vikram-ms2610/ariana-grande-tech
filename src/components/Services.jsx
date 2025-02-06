import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import webdevImg from "../assets/services/webdev.png";
import digitalImg from "../assets/services/digital.png";
import emptyImg from "../assets/services/empty.png";

function Services() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <button className="slick-next bg-gray-700 text-white w-10 h-10 rounded-full hover:bg-gray-600">&#8250;</button>,
        prevArrow: <button className="slick-prev bg-gray-700 text-white w-10 h-10 rounded-full hover:bg-gray-600">&#8249;</button>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const data = [
        { name: "Web-development", img: webdevImg },
        { name: "Digital Marketing", img: digitalImg },
        { name: "TITLE 1", img: emptyImg },
        { name: "TITLE 2", img: emptyImg },
        { name: "TITLE 3", img: emptyImg },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-16">
            <div className="w-11/12 lg:w-3/4 m-auto">
                <h2 className="text-center text-3xl font-bold mb-10">Our Services</h2>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div key={d.name} className="bg-gray-900 h-[450px] text-white rounded-xl p-6 mx-6 flex flex-col items-center justify-center shadow-xl">
                            <div className="flex justify-center items-center mb-6">
                                <img src={d.img} alt={d.name} className="h-60 w-60 rounded-lg object-cover" />
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <p className="text-xl font-semibold">{d.name}</p>
                                <button className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-all text-lg">Read more</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Services;