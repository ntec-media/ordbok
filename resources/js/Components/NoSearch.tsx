import { Typography } from "@material-ui/core";
import React from "react";
import { trans } from "matice";

const NoSearch = () => {
    return (
        <div>
            <Typography variant="h5" align="center" className="italic">
                {trans("Search.NoSearch.header.main_1")}
                <a className="text-blue-500" href="https://internia.no/">
                    Ntec Media
                </a>{" "}
                {trans("Search.NoSearch.header.main_2")}
                <a className="text-blue-500" href="https://divvun.no/">
                    Divvun
                </a>
                .
            </Typography>
        </div>
    );
};

export default NoSearch;
