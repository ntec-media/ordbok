import { List, ListItem } from "@material-ui/core";
import React from "react";
import ResultCard, { IResultCard } from "./ResultCard";

interface Prosp {
    results: IResultCard[];
}

const SearchResultList = (props: Prosp) => {
    return (
        <List>
            {props.results.map((res: IResultCard, index: number) => (
                <ListItem key={index} className="w-12/12">
                    <ResultCard {...res} />
                </ListItem>
            ))}
        </List>
    );
};

export default SearchResultList;
