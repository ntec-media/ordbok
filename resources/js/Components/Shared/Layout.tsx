import React from 'react';
import {CookiesProvider} from 'react-cookie';
import Store from '../../Store';
import Footer from '../Footer';
import Navbar from './Navbar';

export default function Layout(props: {children: JSX.Element | JSX.Element[]}) {
    return (
        <Store>
            <CookiesProvider>
                <main className="relative flex flex-col items-center min-h-screen px-2 md:px-0 ">
                    <div className="w-full lg:w-10/12 2xl:w-8/12">
                        <Navbar />
                        <article>{props.children}</article>
                    </div>
                </main>
                <Footer />
            </CookiesProvider>
        </Store>
    );
}
