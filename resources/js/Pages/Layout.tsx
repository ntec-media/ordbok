import React from "react";
import Navbar from "./Navbar";

export default function Layout(props: {
    children: JSX.Element | JSX.Element[];
}) {
    return (
        <main>
            <Navbar />
            <article>{props.children}</article>
        </main>
    );
}
