import { Typography } from "@material-ui/core";
import React from "react";
import { trans } from "matice";

const NoSearch = () => {
    return (
        <div>
            <Typography variant="h5" align="center" className="italic">
                {trans("NoSearch.header")}
                <a className="text-blue-500" href="https://internia.no/">
                    Ntec Media
                </a>{" "}
                i samarbeid med{" "}
                <a className="text-blue-500" href="https://divvun.no/">
                    Divvun
                </a>
                .
            </Typography>
        </div>
    );
};

export default NoSearch;
