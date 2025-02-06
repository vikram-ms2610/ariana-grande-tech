import React, { useState, useEffect } from "react";

const Whoweare = () => {
  const [changingText, setChangingText] = useState("brands");
  const rotatingText = ["brands", "web design", "SMEs", "manufacturers"];

  useEffect(() => {
    const interval = setInterval(() => {
      setChangingText((prevText) => {
        const currentIndex = rotatingText.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % rotatingText.length;
        return rotatingText[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [rotatingText]); // ✅ Added rotatingText to the dependency array

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="mt-[150px] text-2xl font-bold text-center mb-6">
        Who We Are
      </h1>
      <h2 className="text-4xl font-extrabold text-center mb-4">
        We Help{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          {changingText.toUpperCase()}
        </span>{" "}
        Grow their Business Online
      </h2>
      <p className="text-lg text-center max-w-3xl leading-relaxed">
        <strong>Ariana Tech Solutions</strong> is dedicated to helping
        businesses succeed in the digital world. We specialize in web design,
        web development, and digital marketing, ensuring that our clients can
        effectively reach their target audience and achieve their business
        goals.
      </p>
    </div>
  );
};

export default Whoweare;
