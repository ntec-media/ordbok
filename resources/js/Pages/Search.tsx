import React, {useEffect, useState} from 'react';
import SearchField from '../Components/Search/SearchField';
import SearchResultList from '../Components/Search/SearchResultList';
import NoSearch from '../Components/Search/NoSearch';
import {Locations} from '../Components/Search/Locations';

const Search = (props: {input: (newInput: string) => void}) => {
    const [input, setInput] = useState('');
    const [orderBy, setOrderBy] = useState('sami');

    useEffect(() => {
        props.input(input);
    }, [input]);

    return (
        <div className="fadeIn h-screen">
            <div className="md:pt-8 md:pb-2">
                <SearchField
                    updateInput={newInput => setInput(newInput)}
                    setOrderBy={newVal => setOrderBy(newVal)}
                />
            </div>
            {input !== '' ? (
                <>
                    <Locations input={input} />
                    <SearchResultList input={input} orderBy={orderBy} />
                </>
            ) : (
                <NoSearch />
            )}
        </div>
    );
};

export default Search;
