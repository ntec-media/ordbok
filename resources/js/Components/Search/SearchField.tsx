import SearchIcon from '@material-ui/icons/Search';
import {debounce, InputAdornment, TextField} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import {trans} from 'matice';
import React, {useCallback, useEffect, useState} from 'react';
import SortingDropDown from '../Shared/SortingDropDown';

interface Props {
    updateInput: (newInput: string) => void;
    setOrderBy: (newInput: string) => void;
}

const SearchField = (props: Props) => {
    const [input, setInput] = useState('');

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

    const appendSpecialChars = (char: string) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const position = document.getElementById('searchfield')?.selectionStart;
        const textBeforeCursorPosition = input.substring(0, position);
        const textAfterCursorPosition = input.substring(position, input.length);
        setInput(textBeforeCursorPosition + char + textAfterCursorPosition);
    };

    return (
        <div className="flex justify-center" style={{marginRight: 0}}>
            <Autocomplete
                id="searchfield"
                freeSolo
                value={input}
                fullWidth
                style={{marginRight: 0}}
                onInputChange={(_e, newVal) => {
                    setInput(newVal);
                }}
                options={[]}
                renderInput={params => (
                    <TextField
                        autoFocus
                        {...params}
                        value={input}
                        placeholder={trans('Search.header')}
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
                                <div className="flex items-center">
                                    <SortingDropDown
                                        setOrderBy={newVal =>
                                            props.setOrderBy(newVal)
                                        }
                                    />
                                    <button
                                        onClick={() => appendSpecialChars('á')}
                                        className="hidden px-4 py-2 mx-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-full md:block hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                    >
                                        á
                                    </button>
                                    <button
                                        onClick={() => appendSpecialChars('ŋ')}
                                        className="px-4 py-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
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
