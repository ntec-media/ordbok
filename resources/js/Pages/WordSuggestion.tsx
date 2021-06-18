import { Button, CircularProgress, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Layout from "./Layout";

const WordSuggestion = () => {
    const [norInput, setNorInput] = useState({ val: "", error: false });
    const [samInput, setSamInput] = useState({ val: "", error: false });
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        setIsSubmitting(true);
        // API REQUEST
    };

    return (
        <Layout>
            <div className="h-full lg:h-4/6 flex flex-col justify-center items-center pt-12 md:pt-20 lg:pt-36 overflow-y-auto">
                <h1 className="m-2 text-3xl text-gray-600  text-center">
                    Foreslå nytt ord
                </h1>
                <p></p>
                <form className="flex flex-col h-full  w-full p-6 md:w-3/6 lg:w-2/6">
                    <div className="my-4">
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Norsk"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                                setNorInput({
                                    ...norInput,
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
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                                setSamInput({
                                    ...samInput,
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
                    <div className="my-4 flex items-center">
                        <Button
                            className="w-64 h-12"
                            variant="contained"
                            color="primary"
                            disabled={
                                isSubmitting ||
                                norInput.val === "" ||
                                samInput.val === ""
                            }
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
        </Layout>
    );
};

export default WordSuggestion;
