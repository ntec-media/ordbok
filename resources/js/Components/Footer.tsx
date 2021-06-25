import React from "react";

const Footer = () => {
    return (
        <div className="hidden sm:block bg-white shadow border-t border-gray-300 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row justify-between text-gray-400 text-opacity-80 py-6">
                    <div className="flex-1">
                        <a
                            href="https://internia.no"
                            className="block cursor-pointer text-blue-600 text-opacity-60"
                        >
                            Ntec Media AS
                        </a>
                        <a
                            href="https://divvun.no"
                            className="block cursor-pointer text-blue-600 text-opacity-60"
                        >
                            Divvun
                        </a>
                    </div>
                    <div className="flex-1">
                        <p className="flex-1">
                            {"© Ntec Media AS " + new Date().getFullYear()}
                        </p>
                        <p className="cursor-pointer ">Cookie Policy</p>
                    </div>
                    <p className="flex-1">
                        Julev er en ordbok som er utviklet av Ntec Media AS i
                        samarbeid med UiT og med støtte fra sametinget.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
