import { Typography } from "@material-ui/core";
import React from "react";

const NoSearch = () => {
    return (
        <div>
            <Typography variant="h5" align="center" className="italic">
                Julev er en ordbok utviklet av{" "}
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
