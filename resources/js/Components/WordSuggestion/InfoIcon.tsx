import { IconButton, Tooltip } from "@material-ui/core";
import { trans } from "matice";
import React, { useState } from "react";
import Icon from "@material-ui/icons/InfoOutlined";

// Component made for low-res devices
const InfoIcon = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    return (
        <Tooltip
            title={trans("WordSuggestion.header")}
            open={tooltipOpen}
            onClose={() => setTooltipOpen(false)}
        >
            <IconButton onClick={() => setTooltipOpen(!tooltipOpen)}>
                <Icon color="primary" />
            </IconButton>
        </Tooltip>
    );
};

export default InfoIcon;
