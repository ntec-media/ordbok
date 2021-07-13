import React, { useState } from "react";
import Layout from "./Layout";
import SearchField from "../Components/Search/SearchField";
import SearchResultList from "../Components//Search/SearchResultList";
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
            if (input === value && input !== "" && input.length > 1) {
                getResultArray(input as string, results, page).then((res) => {
                    setResults(res);
                });
            }
        }, 150);
    }, [input]);

    return (
        <Layout>
            <div className="relative flex flex-col h-full">
                <div className="relative flex justify-center px-2 pt-2 md:py-14">
                    <SearchField
                        updateInput={(newInput) => {
                            newInput.length === 0 && setResults([]);
                            setInput(newInput);
                        }}
                        resetPage={() => {
                            setPage(1);
                        }}
                    />
                </div>
                {results.length > 0 && input !== "" ? (
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
    const sortedArray = sort(newData, input);
    if (currentPage === 1) {
        return sortedArray;
    } else {
        return currentArray.concat(sortedArray);
    }
};

const sort = (arr: ISearchResult[], value: string) => {
    const newData: { data: ISearchResult; count: number }[] = [];
    arr.forEach((item) => {
        let count = 0;
        for (let i = 0; i < value.length; i++) {
            if (value.charAt(i) === item.fra.charAt(i)) count++;
        }
        newData.push({ data: item, count: count / item.fra.length });
    });
    return newData
        .sort((a, b) => {
            return b.count - a.count;
        })
        .map((d) => d.data);
};

export default Search;
