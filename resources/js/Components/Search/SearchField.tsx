import React, {useEffect, useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {Autocomplete} from '@material-ui/lab';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';
import {IconButton, InputAdornment, TextField} from '@material-ui/core';
import DropDown from '../Shared/DropDown';
import {MenuBook, TranslateOutlined} from '@material-ui/icons';
import {useCookies} from 'react-cookie';
import {trans} from 'matice';
import LanguageTranslationModal from '../Shared/LanguageTranslationModal';
import DictionaryModal from '../Shared/DictionaryModal';

interface Props {
    updateInput: (newInput: string) => void;
    resetPage: () => void;
}

const SearchField = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<string[]>([]); // Options recieved from Divvun API in future version.
    const [input, setInput] = useState('');
    const [langModalOpen, setLangModalOpen] = useState(false);
    const [dictModalOpen, setDictModalOpen] = useState(false);
    const [cookies, setCookies] = useCookies(['translang', 'dicts']);

    useEffect(() => {
        // API CALL ?
        props.updateInput(input as string);
    }, [input]);

    const updateCookie = (name: string, items: Object) => {
        setCookies(name, JSON.stringify(items), {path: '/'});
    };

    return (
        <div className="relative flex justify-center px-2 pt-2 md:py-10">
            <Autocomplete
                className="w-full px-2 md:px-0 md:w-5/6 lg:w-4/6"
                freeSolo
                value={input}
                onKeyDown={e => e.key === 'backspace' && props.resetPage()}
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
            <div className="justify-center hidden md:w-32 md:flex">
                <div className="hidden">
                    <IconButton
                        hidden={true}
                        onClick={() => setLangModalOpen(true)}
                    >
                        <TranslateOutlined color="primary" />
                    </IconButton>
                </div>
                <IconButton onClick={() => setDictModalOpen(true)}>
                    <MenuBook color="primary" />
                </IconButton>
            </div>
            <LanguageTranslationModal
                open={langModalOpen}
                closeModal={() => setLangModalOpen(false)}
            />
            <DictionaryModal
                open={dictModalOpen}
                closeModal={() => setDictModalOpen(false)}
            />
        </div>
    );
};

export default SearchField;
