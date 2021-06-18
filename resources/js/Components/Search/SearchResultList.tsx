import { List, ListItem, makeStyles } from "@material-ui/core";
import React from "react";
import ResultCard, { IResultCard } from "./ResultCard";

interface Prosp {
    results: IResultCard[];
}

const SearchResultList = (props: Prosp) => {
    return (
        <div>
            <List>
                {props.results.map((res: IResultCard, index: number) => (
                    <ListItem key={index} className="w-full">
                        <ResultCard {...res} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default SearchResultList;
