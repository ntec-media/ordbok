import {
    Button,
    CircularProgress,
    IconButton,
    TextField,
    Tooltip,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import CustomSnackbar, {
    CustomSnackbarProps,
} from "../Components/CustomSnackbar";
import Layout from "./Layout";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import { newWord } from "../utils";

const WordSuggestion = () => {
    const [norInput, setNorInput] = useState({ val: "", error: false });
    const [samInput, setSamInput] = useState({ val: "", error: false });
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbarProps, setSnackbarProps] = useState<CustomSnackbarProps>({
        type: "success",
        open: false,
        message: "Ordet er lagret!",
        handleClose: () => setSnackbarProps({ ...snackbarProps, open: false }),
    });
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const validate = () => {
        if (samInput.val === "") {
            setSamInput({ ...samInput, error: true });
        } else if (norInput.val === "") {
            setNorInput({ ...norInput, error: true });
        } else {
            submit();
        }
    };
    const submit = async () => {
        setIsSubmitting(true);
        const res = await newWord({
            norwegian: norInput.val,
            sami: samInput.val,
            description: description,
            email: name,
        });
        setIsSubmitting(false);

        switch (res.status) {
            case 201:
                setSnackbarProps({
                    ...snackbarProps,
                    type: "success",
                    open: true,
                    message: "Forslaget er lagret!",
                });
                break;
            case 200:
                setSnackbarProps({
                    ...snackbarProps,
                    type: "warning",
                    open: true,
                    message: "Forslaget er allerede lagret",
                });
                break;
            default:
                setSnackbarProps({
                    ...snackbarProps,
                    type: "error",
                    open: true,
                    message: "En feil har oppstått, forslaget ble ikke lagret",
                });
                break;
        }
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-full overflow-x-hidden overflow-y-auto lg:h-auto">
                <div className="hidden w-full p-6 md:block md:w-3/6 lg:w-2/6">
                    <h1 className="p-8 text-3xl text-center text-gray-600">
                        Foreslå nytt ord
                    </h1>
                    <p>
                        Ord som sends inn vil bli sendt til UiT hvor de lagres i
                        en database. Forfattere som har avtale med UiT vil kunne
                        benytte denne databasen i utgivelse av nye ordbøker.
                    </p>
                </div>
                <div className="flex items-center w-full py-6 md:hidden">
                    <Tooltip
                        title="Ord som sends inn vil bli sendt til UiT hvor de lagres i
                        en database. Forfattere som har avtale med UiT vil kunne
                        benytte denne databasen i utgivelse av nye ordbøker."
                        open={tooltipOpen}
                        onClose={() => setTooltipOpen(false)}
                    >
                        <IconButton
                            onClick={() => setTooltipOpen(!tooltipOpen)}
                        >
                            <InfoIcon color="primary" />
                        </IconButton>
                    </Tooltip>
                    <h1 className="text-3xl text-center text-gray-600">
                        Foreslå nytt ord
                    </h1>
                </div>
                <form className="flex flex-col w-full h-full px-2 pb-6 md:w-3/6 lg:w-2/6">
                    <div className="my-2 md:my-4">
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Norsk"
                            error={norInput.error}
                            helperText={norInput.error && "Ugyldig"}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                                setNorInput({
                                    error: false,
                                    val: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="my-2 md:my-4">
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Samisk"
                            error={samInput.error}
                            helperText={samInput.error && "Ugyldig"}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                                setSamInput({
                                    error: false,
                                    val: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="my-2 md:my-4">
                        <TextField
                            fullWidth
                            variant="outlined"
                            multiline
                            rows="3"
                            label="Beskrivelse (optional)"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="my-2 md:my-4">
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Navn/Epost (optional)"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center pt-4 pb-8">
                        <Button
                            className="w-64 h-12"
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={validate}
                        >
                            Send inn
                        </Button>
                        <div
                            className={
                                "mx-8 " + (isSubmitting ? "inline" : "hidden")
                            }
                        >
                            <CircularProgress size={30} color="primary" />
                        </div>
                    </div>
                </form>
            </div>
            <CustomSnackbar {...snackbarProps} />
        </Layout>
    );
};

export default WordSuggestion;