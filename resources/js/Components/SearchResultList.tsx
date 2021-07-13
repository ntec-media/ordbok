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
        setResults(props.results);
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
