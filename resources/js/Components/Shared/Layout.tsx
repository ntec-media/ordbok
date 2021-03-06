import React from 'react';
import {CookiesProvider} from 'react-cookie';
import Store from '../../Store';
import CookiePopup from './CookiePopup';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout(props: {children: JSX.Element | JSX.Element[]}) {
    return (
        <Store>
            <CookiesProvider>
                <main className="relative flex flex-col items-center px-2 overflow-x-hidden lg:px-0 ">
                    <div className="w-full lg:w-8/12 2xl:w-6/12">
                        <Navbar />
                        <article>{props.children}</article>
                    </div>
                    <CookiePopup />
                </main>
                <Footer />
            </CookiesProvider>
        </Store>
    );
}
