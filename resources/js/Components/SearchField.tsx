import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";

import { InputAdornment, TextField } from "@material-ui/core";

const mockData = {
    input: "fotball",
    result: [
        "Fotball",
        "Fotballag",
        "Fotballbane",
        "Fotballforbund",
        "Fotballkamp",
        "Fotballklubb",
        "Fotballkrets",
        "Fotballspiller",
    ],
};

interface Props {
    updateInput: (newInput: string) => void;
}

const SearchField = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const loading = open && options.length === 0 && input.length > 0;

    useEffect(() => {
        // API CALL
        setTimeout(() => {
            setOptions(mockData.result);
            props.updateInput(input);
        }, 30);
    }, [input]);

    return (
        <div className="flex justify-center mt-12 mx-2">
            <Autocomplete
                className="w-5/6 lg:w-4/6"
                freeSolo
                value={input}
                open={open}
                onInputChange={(_e, newVal) => {
                    setInput(newVal);
                }}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                options={options}
                loading={loading}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Søk"
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? (
                                        <CircularProgress
                                            color="inherit"
                                            size={20}
                                        />
                                    ) : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />
            <button
                type="button"
                className="inline-flex items-center ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setInput(input + "á")}
            >
                á
            </button>
            <button
                type="button"
                className="inline-flex items-center ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setInput(input + "ŋ")}
            >
                ŋ
            </button>
        </div>
    );
};

export default SearchField;
