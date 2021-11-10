import {trans} from 'matice';
import React from 'react';
import Layout from '../Components/Shared/Layout';

const About = () => {
    return (
        <Layout>
            <div className="flex flex-col justify-between p-4">
                <div>
                    <h1 className="font-bold">{trans('About.header')}</h1>
                    <br />
                    <p>{trans('About.main')}</p>
                </div>
                <div></div>
                <div className="flex justify-between py-4 boder-gray-200">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline text-indigo-600"
                        href="https://internia.no"
                    >
                        © Ntec Media AS 2021
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline text-indigo-600"
                        href="https://divvun.no"
                    >
                        Divvun
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default About;
