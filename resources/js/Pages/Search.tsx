import React, {useEffect, useState} from 'react';
import Header from '../Components/Search/Header';
import SearchField from '../Components/Search/SearchField';
import SearchResultList from '../Components/Search/NewSearchResultList';
import NoSearch from '../Components/Search/NoSearch';

const Search = (props: {input: (newInput: string) => void}) => {
    const [input, setInput] = useState('');
    const [orderBy, setOrderBy] = useState('sami');

    useEffect(() => {
        props.input(input);
    }, [input]);

    return (
        <>
            <div className="pb-2 md:py-8">
                <SearchField
                    updateInput={newInput => setInput(newInput)}
                    setOrderBy={newVal => setOrderBy(newVal)}
                />
            </div>
            {input !== '' ? (
                <SearchResultList input={input} orderBy={orderBy} />
            ) : (
                <NoSearch />
            )}
        </>
    );
};

export default Search;
