import React from "react";
import Layout from "./Layout.tsx";
import { InertiaHead } from "@inertiajs/inertia-react";

const Search = () => {
    return (
        <Layout>
            <InertiaHead title="Welcome" />
            <h1>Søk</h1>
        </Layout>
    );
};

export default Search;
