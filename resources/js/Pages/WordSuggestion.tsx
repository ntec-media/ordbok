import { Button, CircularProgress, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import CustomSnackbar, {
    CustomSnackbarProps,
} from "../Components/CustomSnackbar";
import Layout from "./Layout";

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

    const submit = () => {
        const error = true;

        setIsSubmitting(true);
        if (samInput.val === "") {
            setSamInput({ ...samInput, error: true });
            setIsSubmitting(false);
        }
        if (norInput.val === "") {
            setNorInput({ ...norInput, error: true });
            setIsSubmitting(false);
        }

        // API REQUEST
        setTimeout(() => {
            if (!error) {
                setSnackbarProps({
                    ...snackbarProps,
                    open: true,
                    type: "success",
                    message: "Ordet er sendt til behandling",
                });
                setIsSubmitting(false);
            } else {
                setSnackbarProps({
                    ...snackbarProps,
                    open: true,
                    type: "warning",
                    message: "Ordet eksisterer allerede",
                });
                setIsSubmitting(false);
            }
        }, 1500);
    };

    return (
        <Layout>
            <div className="h-full lg:h-4/6 flex flex-col justify-center items-center pt-12 md:pt-20 lg:pt-26 overflow-y-auto">
                <div className="w-full p-6 md:w-3/6 lg:w-2/6">
                    <h1 className="m-8 text-3xl text-gray-600 text-center">
                        Foreslå nytt ord
                    </h1>
                    <p>
                        Ord som sends inn vil bli sendt til UiT hvor de lagres i
                        en database. Forfattere som har avtale med UiT vil kunne
                        benytte denne databasen i utgivelse av nye ordbøker.
                    </p>
                </div>
                <form className="flex flex-col px-2 h-full w-full pb-6 md:w-3/6 lg:w-2/6">
                    <div className="my-4">
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
                    <div className="my-4">
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
                    <div className="my-4">
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
                    <div className="my-4">
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Navn/Epost (optional)"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setName(e.target.value)}
                        />
                    </div>
                    <div className="pt-4 pb-8 flex items-center border-b-2 border-600-blue">
                        <Button
                            className="w-64 h-12"
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submit}
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
