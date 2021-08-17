import { IconButton, Tooltip } from "@material-ui/core";
import { trans } from "matice";
import React, { useState } from "react";
import Icon from "@material-ui/icons/InfoOutlined";

// Component made for low-res devices
const InfoIcon = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    // Open tooltip for 6 seconds
    const handleClick = () => {
        if (tooltipOpen) {
            setTooltipOpen(false);
        } else {
            setTooltipOpen(true);
            setTimeout(() => {
                setTooltipOpen(false);
            }, 6000);
        }
    };

    return (
        <Tooltip title={trans("WordSuggestion.subtitle")} open={tooltipOpen}>
            <IconButton onClick={handleClick}>
                <Icon color="primary" />
            </IconButton>
        </Tooltip>
    );
};

export default InfoIcon;
