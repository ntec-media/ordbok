import React, { useState } from "react";
import Layout from "./Layout";
import SearchField from "../Components/SearchField";
import SearchResultList from "../Components/SearchResultList";
import { useEffect } from "react";
import NoSearch from "../Components/NoSearch";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

let value = "";

const Search = () => {
    const props: any = usePage().props;
    const [search, setSearch] = useState<string>();

    useEffect(() => {
        value = search || "";
        setTimeout(() => {
            if (search === value && search !== "")
                // @ts-ignore
                Inertia.get(
                    "/",
                    { search: search },
                    {
                        replace: true,
                        preserveState: true,
                    }
                );
        }, 700);
    }, [search]);

    useEffect(() => {
        setSearch(props.search);
    }, [props]);

    return (
        <Layout>
            <div className="relative flex flex-col h-full">
                <div className="relative flex justify-center px-2 pt-2 md:py-14">
                    <SearchField
                        defaultValue={search}
                        updateInput={(newInput) => setSearch(newInput)}
                    />
                </div>
                {props.res.length > 0 ? (
                    <div
                        className="relative overflow-y-auto h-5/6"
                        onScroll={(e: any) => {
                            const bottom =
                                e.target.scrollHeight - e.target.scrollTop ===
                                e.target.clientHeight;
                            if (bottom) {
                                const cursor = props.nextPageUrl.split("=");
                                Inertia.get(
                                    "/",
                                    { search: search, cursor: cursor[1] },
                                    {
                                        replace: true,
                                        preserveState: true,
                                    }
                                );
                            }
                        }}
                    >
                        <SearchResultList results={props.res} />
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
