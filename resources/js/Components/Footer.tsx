import React from "react";

const Footer = () => {
    return (
        <div className="hidden sm:block bg-white shadow border-t border-gray-300 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row justify-between text-gray-400 text-opacity-80 py-6">
                    <div className="flex-1">
                        <p>{"NTec Media AS"}</p>
                        <p>Divvun</p>
                    </div>
                    <div className="flex-1">
                        <p className="flex-1">
                            {"© NTec Media AS " + new Date().getFullYear()}
                        </p>
                        <p>Cookie Policy</p>
                    </div>
                    <p className="flex-1">
                        Julev er en ordbok som er utviklet av NTech Media AS i
                        samarbeid med UiT og med støtte fra sametinget.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;