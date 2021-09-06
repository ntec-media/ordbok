import SearchIcon from '@material-ui/icons/Search';
import {
    debounce,
    IconButton,
    InputAdornment,
    TextField,
} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import {trans} from 'matice';
import React, {useCallback, useEffect, useState} from 'react';
import DropDown from '../Shared/DropDown';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';
import {MenuBook} from '@material-ui/icons';
import DictionaryModal from '../Shared/DictionaryModal';

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
                        label={trans('Search.SearchField.search')}
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {params.InputProps.endAdornment}
                                    <DropDown
                                        items={[{display: 'á'}, {display: 'ŋ'}]}
                                        title="Tegn"
                                        onSelect={newLetter =>
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
            <div className="justify-center hidden md:flex">
                <IconButton onClick={() => setDictModalOpen(true)}>
                    <MenuBook color="primary" />
                </IconButton>
            </div>
            <DictionaryModal
                open={dictModalOpen}
                closeModal={() => setDictModalOpen(false)}
            />
        </div>
    );
};

export default SearchField;
