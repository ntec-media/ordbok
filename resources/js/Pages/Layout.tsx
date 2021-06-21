import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { CookiesProvider } from "react-cookie";

export default function Layout(props: {
    children: JSX.Element | JSX.Element[];
}) {
    return (
        <CookiesProvider>
            <main className="bg-gray-100 flex flex-col h-screen justify-between">
                <div>
                    <Navbar />
                </div>
                <div className="max-w-7xl mx-auto lg:px-8 w-full flex-1 overflow-y-auto">
                    <article className="bg-white shadow h-full">
                        {props.children}
                    </article>
                </div>
                <div>
                    <Footer />
                </div>
            </main>
        </CookiesProvider>
    );
}
