import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";

import { InputAdornment, TextField } from "@material-ui/core";

interface Props {
    defaultValue: string | undefined;
    updateInput: (newInput: string) => void;
}

const SearchField = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<string[]>([]);
    const [input, setInput] = useState("");
    // const loading = open && options.length === 0 && input.length > 0;
    const loading = false;

    useEffect(() => {
        // API CALL ?
        props.updateInput(input as string);
    }, [input]);

    useEffect(() => {
        props.defaultValue && setInput(props.defaultValue);
    }, [props.defaultValue]);

    return (
        <>
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
                        value={input}
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
                className="inline-flex items-center px-4 py-2 ml-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setInput(input + "á")}
            >
                á
            </button>
            <button
                type="button"
                className="inline-flex items-center px-4 py-2 ml-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setInput(input + "ŋ")}
            >
                ŋ
            </button>
        </>
    );
};

export default SearchField;
