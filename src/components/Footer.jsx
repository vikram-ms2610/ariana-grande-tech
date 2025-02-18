import React from "react";

function Footer() {
  return (
    <footer className="bg-[#212529] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0">
          <div className="md:ml-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-center">
            {[
              "Privacy Notice",
              "Cookie Policy",
              "Disclaimer",
              "Security Policy",
              "Customize Cookies",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className="text-white hover:text-gray-400"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Line Break */}
        <div className="border-t border-gray-600 mt-4"></div>

        {/* Copyright Section */}
        <div className="text-center text-sm mt-4">
          © 2025 Ariana Tech Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
