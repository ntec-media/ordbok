import React, {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import Header from '../Components/NewSearch/Header';
import SearchField from '../Components/NewSearch/SearchField';
import SearchResultList from '../Components/NewSearch/SearchResultList';
import {ILang} from '../interfaces';

import Layout from '../Components/Shared/Layout';
import Menu from '../Components/NewSearch/Menu';

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
            <div className="hidden py-4 md:block 2xl:py-8">
                <Header />
            </div>
            <div className="justify-center hidden py-4 2xl:py-8 md:flex">
                <Menu />
            </div>
            <div className="py-4 2xl:py-8">
                <SearchField
                    updateInput={newInput => setInput(newInput)}
                    resetPage={() => setPage(1)}
                />
            </div>
            <div>
                <SearchResultList input={input} page={page} dicts={dicts} />
            </div>
        </Layout>
    );
};

export default Search;
