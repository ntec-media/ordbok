import {trans} from 'matice';
import React from 'react';
import Layout from '../Components/Shared/Layout';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const About = () => {
    const content = (
        <div className="flex flex-col items-center justify-between p-4 mt-6 md:mt-16">
            <h1 className="text-xl text-blue-600 md:text-3xl">Om oss</h1>
            <div className="my-8 md:w-8/12 lg:w-10/12 2xl:w-8/12 md:text-center">
                {trans('About.p1')}
                <br />
                <br />
                {trans('About.p2')}
                <br />
                <br />
                {trans('About.p3')}
            </div>
            <div className="flex flex-col flex-wrap items-center justify-center w-full mt-6 space-y-8 text-center md:space-y-0 md:mt-10 md:flex-row md:space-x-24">
                <div>
                    <AccountCircleIcon
                        style={{height: 64, width: 64, marginBottom: 8}}
                        color="primary"
                    />
                    <p>Odd Levi Paulsen</p>
                    <p>Daglig leder</p>
                    <p>post@internia.no</p>
                    <p>+47 984 07 676</p>
                </div>
                <div>
                    <AccountCircleIcon
                        style={{height: 64, width: 64, marginBottom: 8}}
                        color="primary"
                    />
                    <p>Thomas Andre Karlsen</p>
                    <p>Utviklingsleder</p>
                    <p>thomas@internia.no</p>
                    <p>+47 977 25 316</p>
                </div>
                <div>
                    <AccountCircleIcon
                        style={{height: 64, width: 64, marginBottom: 8}}
                        color="primary"
                    />
                    <p>Patrick Lønhaug</p>
                    <p>Utvikler</p>
                    <p>patrick@internia.no</p>
                    <p>+47 416 99 376</p>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="h-auto md:hidden fadeIn">
                <Layout>{content}</Layout>
            </div>
            <div className="hidden min-h-screen md:block fadeIn">{content}</div>
        </>
    );
};

export default About;
