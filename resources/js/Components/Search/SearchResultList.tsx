import { List, ListItem } from "@material-ui/core";
import React from "react";
import ResultCard, { IResultCard } from "./ResultCard";

interface Prosp {
    results: IResultCard[];
}

const SearchResultList = (props: Prosp) => {
    return (
        <div className="relative h-full overflow-y-auto md:px-16">
            <List>
                {props.results.map((res: IResultCard, index: number) => (
                    <ListItem
                        key={index}
                        className="w-full"
                        style={{ padding: 2 }}
                    >
                        <ResultCard {...res} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default SearchResultList;
