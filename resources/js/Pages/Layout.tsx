import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { CookiesProvider } from "react-cookie";

export default function Layout(props: {
    children: JSX.Element | JSX.Element[];
}) {
    return (
        <CookiesProvider>
            <main className="flex flex-col justify-between h-screen bg-gray-100">
                <div>
                    <Navbar />
                </div>
                <div className="flex-1 w-full mx-auto overflow-y-auto max-w-7xl lg:px-8">
                    <article className="h-full bg-white shadow">
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
