import React, { useState } from "react";
import Layout from "./Layout";
import SearchField from "../Components/Search/SearchField";
import SearchResultList from "../Components/Search/SearchResultList";
import { IResultCard } from "../Components/Search/ResultCard";
import { useEffect } from "react";
import { Typography } from "@material-ui/core";

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
            <div className="relative h-full">
                <SearchField updateInput={(newInput) => setInput(newInput)} />
                {results.length > 0 ? (
                    <div className="relative overflow-y-auto h-3/4">
                        <SearchResultList results={results} />
                    </div>
                ) : (
                    <div>
                        <Typography
                            variant="h5"
                            align="center"
                            className="italic"
                        >
                            Julev er en ordbok utviklet av{" "}
                            <a
                                className="text-blue-500"
                                href="https://internia.no/"
                            >
                                Ntec Media
                            </a>{" "}
                            i samarbeid med{" "}
                            <a
                                className="text-blue-500"
                                href="https://divvun.no/"
                            >
                                Divvun
                            </a>
                            .
                        </Typography>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Search;
