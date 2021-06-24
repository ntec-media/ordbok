import React, { Fragment, useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";
import DropDownIcon from "@material-ui/icons/ArrowDropDown";
import { InputAdornment, TextField } from "@material-ui/core";
import DropDown from "./Shared/DropDown";

interface Props {
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
        props.updateInput(input);
    }, [input]);

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
                        label="Søk"
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {loading ? (
                                        <CircularProgress
                                            color="inherit"
                                            size={20}
                                        />
                                    ) : null}
                                    {params.InputProps.endAdornment}
                                    <DropDown
                                        items={[
                                            { display: "á" },
                                            { display: "ŋ" },
                                        ]}
                                        title="Tegn"
                                        onSelect={(newLetter) =>
                                            setInput(input + newLetter)
                                        }
                                        mainIcon={DropDownIcon}
                                    />
                                </>
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
        </>
    );
};

export default SearchField;
