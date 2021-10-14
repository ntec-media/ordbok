import React, {useState} from 'react';
import Header from '../Components/Search/Header';
import SearchField from '../Components/Search/SearchField';
import SearchResultList from '../Components/Search/SearchResultList';

import Layout from '../Components/Shared/Layout';
import Menu from '../Components/Search/Menu';

const Search = () => {
    const [input, setInput] = useState('');
    const [orderBy, setOrderBy] = useState('sami');

    return (
        <Layout>
            <div className="py-0 md:block 2xl:py-8">
                <Header searching={input.length > 0} />
            </div>
            <div className="justify-center hidden py-4 2xl:py-8 md:flex">
                <Menu />
            </div>
            <div className="py-4 2xl:py-8">
                <SearchField
                    updateInput={newInput => setInput(newInput)}
                    setOrderBy={newVal => setOrderBy(newVal)}
                />
            </div>
            <div>
                <SearchResultList input={input} orderBy={orderBy} />
            </div>
        </Layout>
    );
};

export default Search;
