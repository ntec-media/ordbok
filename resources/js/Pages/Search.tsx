import React, { useState } from "react";
import Layout from "./Layout";
import SearchField from "../Components/SearchField";
import SearchResultList from "../Components/SearchResultList";
import { IResultCard } from "../Components/ResultCard";
import { useEffect } from "react";

const MockList: IResultCard[] = [
    {
        word: "Fotball",
        translation: "čiekčanspábba",
        source: "Andres Kintel",
    },
    {
        word: "fotballag",
        translation: "spábbačiekčanjoavku",
        source: "Andres Kintel",
    },

    {
        word: "fotballbane",
        translation: "spábbačiekčanšillju",
        source: "Andres Kintel",
    },
    {
        word: "fotballforbund",
        translation: "spábbačiekčanlihttu",
        source: "Andres Kintel",
    },
    {
        word: "fotballkamp",
        translation: "čiekčan",
        source: "Andres Kintel",
    },
    {
        word: "fotballklubb",
        translation: "spábbačiekčansearvi",
        source: "Andres Kintel",
    },
    {
        word: "fotballkrets",
        translation: "spábbačiekčanbiire",
        source: "Andres Kintel",
    },
    {
        word: "fotballspiller",
        translation: "čiekči",
        source: "Andres Kintel",
    },
];

const Search = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState<IResultCard[]>([]);

    useEffect(() => {
        // API CALL
        if (input !== "")
            setTimeout(() => {
                setResults(MockList);
            }, 20);
    }, [input]);

    return (
        <Layout>
            <SearchField updateInput={(newInput) => setInput(newInput)} />
            <SearchResultList results={results} />
        </Layout>
    );
};

export default Search;
