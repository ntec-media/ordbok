import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Navbar from "./Navbar.tsx";

export default function Layout({ children }) {
    return (
        <main>
            <Navbar />
            <article>{children}</article>
        </main>
    );
}
