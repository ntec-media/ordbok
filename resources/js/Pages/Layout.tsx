import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import {CookiesProvider, useCookies} from 'react-cookie';
import CookiePopup from '../Components/CookiePopup';
import {useEffect} from 'react';
import {useState} from 'react';
import Store from '../Store';

export default function Layout(props: {children: JSX.Element | JSX.Element[]}) {
    const [cookies, setCookies] = useCookies(['lang']);
    const [cookieApproved, setCookieApproved] = useState(true);

    useEffect(() => {
        setCookieApproved(cookies.termsApproved);
    }, []);

    const updateCookie = () => {
        setCookies('termsApproved', true, {path: '/'});
        setCookieApproved(true);
    };

    return (
        <Store>
            <CookiesProvider>
                <main className="bg-gray-200">
                    <div className="flex flex-col min-h-screen">
                        <div>
                            <Navbar />
                        </div>
                        <article className="flex-1 w-full mx-auto overflow-y-auto bg-white shadow fadeIn max-w-7xl lg:px-8">
                            {props.children}
                        </article>
                    </div>
                    <div>
                        <Footer />
                        {!cookieApproved && (
                            <CookiePopup setCookieTrue={() => updateCookie()} />
                        )}
                    </div>
                </main>
            </CookiesProvider>
        </Store>
    );
}
