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
        <div className="flex justify-center" style={{marginRight: 0}}>
            <Autocomplete
                className="w-full"
                freeSolo
                value={input}
                style={{marginRight: 0}}
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
                        style={{marginRight: 0}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <div className="flex">
                                    <button
                                        onClick={() => setInput(input + 'á')}
                                        className="hidden px-4 py-2 mx-2 text-base font-medium text-indigo-700 bg-indigo-100 border border-indigo-400 rounded-full md:block hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        á
                                    </button>
                                    <button
                                        onClick={() => setInput(input + 'ŋ')}
                                        className="items-center block px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-indigo-400 rounded-full hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        ŋ
                                    </button>
                                </div>
                            ),
                        }}
                    />
                )}
            />
        </div>
    );
};

export default SearchField;