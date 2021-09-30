import SearchIcon from '@material-ui/icons/Search';
import {debounce, InputAdornment, TextField} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import {trans} from 'matice';
import React, {useCallback, useEffect, useState} from 'react';

interface Props {
    updateInput: (newInput: string) => void;
    resetPage: () => void;
}

const SearchField = (props: Props) => {
    const [input, setInput] = useState('');
    const [dictModalOpen, setDictModalOpen] = useState(false);

    useEffect(() => {
        delayedQuery(input);
    }, [input]);

    const delayedQuery = useCallback(
        debounce((input: string) => newInput(input), 200),
        []
    );

    const newInput = useCallback((input: string) => {
        try {
            props.updateInput(input);
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <div className="relative flex justify-center px-2 pt-2 md:py-10">
            <Autocomplete
                className="w-full px-2 md:px-0 md:w-5/6 lg:w-4/6"
                freeSolo
                value={input}
                onKeyDown={e => e.key === 'backspace' && props.resetPage()}
                onInputChange={(_e, newVal) => {
                    setInput(newVal);
                }}
                options={[]}
                renderInput={params => (
                    <TextField
                        {...params}
                        value={input}
                        placeholder="Søk i julevs ordbokdatabase"
                        label={trans('Search.SearchField.search')}
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
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
                onClick={() => setInput(input + 'á')}
                className="inline-flex items-center px-6 py-3 mx-2 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                á
            </button>
            <button
                onClick={() => setInput(input + 'ŋ')}
                className="inline-flex items-center px-6 py-3 mr-2 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                ŋ
            </button>
        </div>
    );
};

export default SearchField;
