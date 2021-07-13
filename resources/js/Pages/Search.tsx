import React, { useState } from "react";
import Layout from "./Layout";
import SearchField from "../Components/SearchField";
import SearchResultList from "../Components/SearchResultList";
import { useEffect } from "react";
import NoSearch from "../Components/NoSearch";
import { search } from "../utils";
import ISearchResult from "../Interfaces/ISearchResult";

let value = "";

const Search = () => {
    const [input, setInput] = useState<string>();
    const [results, setResults] = useState<ISearchResult[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        value = input || "";
        setTimeout(() => {
            if (input === value && input !== "") {
                getResultArray(input as string, results, page).then((res) => {
                    setResults(res);
                });
            }
        }, 400);
    }, [input]);

    return (
        <Layout>
            <div className="relative flex flex-col h-full">
                <div className="relative flex justify-center px-2 pt-2 md:py-14">
                    <SearchField
                        defaultValue={input}
                        updateInput={(newInput) => setInput(newInput)}
                        resetPage={() => {
                            setPage(1);
                        }}
                    />
                </div>
                {results.length > 0 ? (
                    <div
                        className="relative overflow-y-auto h-5/6"
                        onScroll={(e: any) => {
                            const bottom =
                                e.target.scrollHeight - e.target.scrollTop ===
                                e.target.clientHeight;
                            if (bottom) {
                                getResultArray(
                                    input as string,
                                    results,
                                    page + 1
                                ).then((res) => {
                                    setResults(res);
                                });
                                setPage(page + 1);
                            }
                        }}
                    >
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

const getResultArray = async (
    input: string,
    currentArray: ISearchResult[],
    currentPage: number
) => {
    const newData: ISearchResult[] = await search(input, currentPage);
    if (currentPage === 1) {
        return newData;
    } else {
        return currentArray.concat(newData);
    }
};

export default Search;
