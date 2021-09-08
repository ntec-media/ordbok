import React, {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import Header from '../Components/Search/Header';
import SearchField from '../Components/Search/SearchField';
import SearchResultList from '../Components/Search/SearchResultList';
import {ILang} from '../interfaces';
import Layout from './Layout';

const Search = () => {
    const [input, setInput] = useState('');
    const [dicts, setDicts] = useState<ILang[]>([]);
    const [cookies] = useCookies(['dicts']);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setDicts(cookies.dicts);
    }, [cookies]);

    return (
        <Layout>
            <Header />
            <SearchField
                updateInput={newInput => setInput(newInput)}
                resetPage={() => setPage(1)}
            />
            <SearchResultList input={input} page={page} dicts={dicts} />
        </Layout>
    );
};

export default Search;
