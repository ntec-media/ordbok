import { trans } from "matice";
import React from "react";
import Layout from "./Layout";

const About = () => {
    return (
        <Layout>
            <div className="flex flex-col justify-between h-full p-4">
                <div>
                    <h1 className="font-bold">{trans("About.header")}</h1>
                    <br />
                    <p>{trans("About.main")}</p>
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
                <div className="py-4 border-t-2 boder-gray-200">
                    Divvun © Ntec Media AS 2021
                </div>
            </div>
        </Layout>
    );
};

export default About;
