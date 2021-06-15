import React from "react";
import BottomNavbar from "../Components/BottomNavbar";
import Navbar from "../Components/Navbar";

export default function Layout(props: {
    children: JSX.Element | JSX.Element[];
}) {
    return (
        <main className="bg-gray-100">
            <Navbar />
            <div className="max-w-7xl h-screen mx-auto lg:px-8">
                <div className="bg-white h-full shadow pt-20">
                    <article>{props.children}</article>
                </div>
            </div>
            <BottomNavbar />
        </main>
    );
}
