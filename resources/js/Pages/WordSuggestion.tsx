import React, { useState } from "react";
import CustomSnackbar, {
    CustomSnackbarProps,
} from "../Components/CustomSnackbar";
import Description from "../Components/WordSuggestion/Description";
import Form from "../Components/WordSuggestion/Form";
import Layout from "./Layout";
import { trans } from "matice";
import InfoIcon from "../Components/WordSuggestion/InfoIcon";

const WordSuggestion = () => {
    const [snackbarProps, setSnackbarProps] = useState<CustomSnackbarProps>({
        type: "success",
        open: false,
        message: "Ordet er lagret!",
        handleClose: () => setSnackbarProps({ ...snackbarProps, open: false }),
    });

    const displayResponse = (status: number) => {
        switch (status) {
            case 201:
                setSnackbarProps({
                    ...snackbarProps,
                    type: "success",
                    open: true,
                    message: trans("WordSuggestion.success"),
                });
                break;
            case 200:
                setSnackbarProps({
                    ...snackbarProps,
                    type: "warning",
                    open: true,
                    message: trans("WordSuggestion.warning"),
                });
                break;
            default:
                setSnackbarProps({
                    ...snackbarProps,
                    type: "error",
                    open: true,
                    message: trans("WordSuggestion.error"),
                });
                break;
        }
    };

    return (
        <Layout>
            <div className="flex justify-center ">
                <div className="flex w-full md:border md:border-blue-200 md:w-8/12 md:py-8 md:mt-16 rounded-xl">
                    <div className="w-full md:w-8/12">
                        <h1 className="hidden ml-2 text-3xl md:flex md:ml-8 ">
                            {trans("WordSuggestion.header")}
                        </h1>
                        <div className="flex justify-between md:hidden">
                            <h1 className="mt-2 ml-2 text-3xl">
                                {trans("WordSuggestion.header")}
                            </h1>
                            <InfoIcon />
                        </div>
                        <Form result={(status) => displayResponse(status)} />
                    </div>
                    <div className="hidden w-4/12 p-4 mt-16 md:block">
                        <Description />
                    </div>
                </div>
            </div>
            <CustomSnackbar {...snackbarProps} />
        </Layout>
    );
};

export default WordSuggestion;
