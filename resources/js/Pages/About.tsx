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
                <div className="flex justify-between py-4 text-gray-400 boder-gray-200">
                    <p className="inline ">© Ntec Media AS 2021</p>
                    <p className="inline ">Divvun</p>
                </div>
            </div>
        </Layout>
    );
};

export default About;
