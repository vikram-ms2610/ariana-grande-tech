import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Insights() {
    const services = [
        { title: "Web Design", description: "We create stunning and responsive web designs that enhance user experience." },
        { title: "Web Development", description: "Our development team builds robust and scalable web applications tailored to your needs." },
        { title: "Digital Marketing", description: "We help you reach a larger audience through effective digital marketing strategies." },
        { title: "TITLE 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae ligula tincidunt consectetur." }
    ];

    return (
        <>
        <Navbar />
        <div className=" min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white py-16 px-6">
            <div className="mt-[100px] text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold">Insights</h1>
                <p className="text-lg lg:text-xl text-gray-200 mt-4">Explore our latest offerings and updates</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="bg-white text-black p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                        <p className="text-gray-700">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Insights;