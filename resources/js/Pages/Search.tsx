import React, { useState } from "react";
import Layout from "./Layout";
import SearchField from "../Components/Search/SearchField";
import SearchResultList from "../Components/Search/SearchResultList";
import { IResultCard } from "../Components/Search/ResultCard";
import { useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import NoSearch from "../Components/NoSearch";

let value = "";

const Search = (props: any) => {
    const [data, setData] = useState({
        value: "",
        dicts: [""],
        langs: [""],
    });
    const [results, setResults] = useState<IResultCard[]>([]);

    useEffect(() => {
        value = data.value;
        setTimeout(() => {
            console.log("Enter");
            if (data.value === value && data.value !== "")
                // @ts-ignore
                Inertia.post("/", data);
        }, 700);
    }, [data.value]);

    useEffect(() => {
        if (props.data) {
            setResults(
                props.data.map((t: any) => {
                    return {
                        word: t.oversatt_fra === "norsk" ? t.fra : t.til,
                        translation: t.oversatt_fra === "norsk" ? t.til : t.fra,
                        source: t.kredittering,
                    };
                })
            );
        }
    }, [props]);

    return (
        <Layout>
            <div className="relative flex flex-col h-full">
                <div className="relative flex justify-center px-2 pt-2 md:py-14">
                    <SearchField
                        updateInput={(newInput) =>
                            setData({ ...data, value: newInput })
                        }
                    />
                </div>
                {results.length > 0 ? (
                    <div className="relative overflow-y-auto h-5/6">
                        <SearchResultList results={results} />
                    </div>
                ) : (
                    <div className="p-4">
                        <NoSearch />
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Search;
