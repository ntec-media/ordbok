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
                <article className="flex-1 w-full mx-auto overflow-y-auto bg-white shadow max-w-7xl lg:px-8 ">
                    {props.children}
                </article>
                <div>
                    <Footer />
                </div>
            </main>
        </CookiesProvider>
    );
}
