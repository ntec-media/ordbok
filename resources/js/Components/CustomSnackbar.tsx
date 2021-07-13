import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

export interface CustomSnackbarProps {
    open: boolean;
    handleClose?: () => void;
    type: "error" | "warning" | "info" | "success";
    message: string;
}

const CustomSnackbar = (props: CustomSnackbarProps) => {
    return (
        <>
            {props.open && (
                <Snackbar
                    open={props.open}
                    autoHideDuration={4000}
                    onClose={props.handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                >
                    <Alert
                        variant="filled"
                        onClose={props.handleClose}
                        severity={props.type}
                    >
                        {props.message}
                    </Alert>
                </Snackbar>
            )}
        </>
    );
};

export default CustomSnackbar;
