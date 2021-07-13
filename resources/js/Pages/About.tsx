import React from "react";
import Layout from "./Layout";

const About = () => {
    return (
        <Layout>
            <div className="flex flex-col justify-between h-full p-4">
                <div>
                    <h1 className="font-bold">Om appen</h1>
                    <br />
                    <p>
                        Julev er en ordbok som er utviklet av Ntec Media AS i
                        samarbeid med UiT og med støtte fra sametinget.
                    </p>
                    <p>
                        Målet er å kunne søke opp ord mellom norsk og lulesamisk
                        og kjapt få et resulat. På sikt ønsker vi også å legge
                        inn støtte for flere samiske språk.
                    </p>
                    <div className="mt-6">
                        <a
                            className="block text-indigo-600"
                            href="https://internia.no"
                        >
                            Ntec Media
                        </a>
                        <a
                            className="block text-indigo-600"
                            href="https://divvun.no"
                        >
                            Divvun
                        </a>
                    </div>
                </div>
                <div></div>
                <div className="p-4 border-t-2 boder-gray-200">
                    Divvun © Ntec Media AS 2021
                </div>
            </div>
        </Layout>
    );
};

export default About;