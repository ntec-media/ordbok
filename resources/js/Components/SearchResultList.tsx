import { List, ListItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import ISearchResult from "../Interfaces/ISearchResult";

interface Prosp {
    results: ISearchResult[];
}

const SearchResultList = (props: Prosp) => {
    const [results, setResults] = useState<ISearchResult[]>([]);

    useEffect(() => {
        const newItems: ISearchResult[] = [];
        props.results.forEach((res) => {
            !results.find((s) => s.id === res.id) && newItems.push(res);
        });
        setResults(results.concat(newItems));
        console.log(results.length);
    }, [props.results]);

    return (
        <List>
            {results.map((res: ISearchResult, index: number) => (
                <ListItem key={index} className="p-2">
                    <ResultCard {...res} />
                </ListItem>
            ))}
        </List>
    );
};

export default SearchResultList;
