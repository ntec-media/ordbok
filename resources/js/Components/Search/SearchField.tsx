import React, {useEffect, useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {Autocomplete} from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';
import {IconButton, InputAdornment, TextField} from '@material-ui/core';
import DropDown from '../Shared/DropDown';
import {MenuBook, TranslateOutlined} from '@material-ui/icons';
import MultipleSelectModal from '../Modals/MultipleSelectModal';
import {useCookies} from 'react-cookie';
import {dicstSupported, translateLanguagesSupported} from '../../interfaces';
import {trans} from 'matice';

interface Props {
    updateInput: (newInput: string) => void;
    resetPage: () => void;
}

const SearchField = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const [langModalOpen, setLangModalOpen] = useState(false);
    const [dictModalOpen, setDictModalOpen] = useState(false);

    // const loading = open && options.length === 0 && input.length > 0;
    const loading = false;

    useEffect(() => {
        // API CALL ?
        props.updateInput(input as string);
    }, [input]);

    const LangDictModals = () => {
        const [cookies, setCookies] = useCookies(['translang', 'dicts']);

        const updateCookie = (name: string, items: any) => {
            setCookies(name, JSON.stringify(items), {path: '/'});
        };

        return (
            <>
                <MultipleSelectModal
                    open={langModalOpen}
                    closeModal={items => {
                        updateCookie('translang', items);
                        setLangModalOpen(false);
                    }}
                    title={trans('Search.SearchField.langModalHeader')}
                    items={cookies.translang || translateLanguagesSupported}
                />

                <MultipleSelectModal
                    open={dictModalOpen}
                    closeModal={items => {
                        updateCookie('dicts', items);
                        setDictModalOpen(false);
                    }}
                    title={trans('Search.SearchField.dictModalHeader')}
                    items={cookies.dicts || dicstSupported}
                />
            </>
        );
    };

    return (
        <div className="relative flex justify-center px-2 pt-2 md:py-10">
            <Autocomplete
                className="w-5/6 lg:w-4/6"
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
                loading={loading}
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
                                    {loading ? (
                                        <CircularProgress
                                            color="inherit"
                                            size={20}
                                        />
                                    ) : null}
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
            <div className="flex justify-center w-32">
                <IconButton onClick={() => setLangModalOpen(true)}>
                    <TranslateOutlined color="primary" />
                </IconButton>
                <IconButton onClick={() => setDictModalOpen(true)}>
                    <MenuBook color="primary" />
                </IconButton>
            </div>
            <LangDictModals />
        </div>
    );
};

export default SearchField;
