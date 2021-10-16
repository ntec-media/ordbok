import React, {useState} from 'react';
import Header from '../Components/Search/Header';
import SearchField from '../Components/Search/SearchField';
import SearchResultList from '../Components/Search/NewSearchResultList';

import Layout from '../Components/Shared/Layout';
import Menu from '../Components/Search/Menu';
import NoSearch from '../Components/Search/NoSearch';

const Search = () => {
    const [input, setInput] = useState('');
    const [orderBy, setOrderBy] = useState('sami');
    const [selected, setSelected] = useState(0);

    const getContent = () => {
        switch (selected) {
            default:
                return (
                    <SearchField
                        updateInput={newInput => setInput(newInput)}
                        setOrderBy={newVal => setOrderBy(newVal)}
                    />
                );
            case 1:
                return <h1>New word</h1>;
            case 2:
                return <h1>Statistics</h1>;
            case 3:
                return <h1>Download App</h1>;
        }
    };

    return (
        <Layout>
            <div className="md:block 2xl:py-8">
                <Header searching={input.length > 0} />
            </div>
            <div className="justify-center hidden py-4 2xl:py-8 md:flex">
                <Menu setSelected={newSelected => setSelected(newSelected)} />
            </div>

            <div className="pb-2 2xl:py-8">{getContent()}</div>
            {input !== '' ? (
                <SearchResultList input={input} orderBy={orderBy} />
            ) : (
                <NoSearch />
            )}
        </Layout>
    );
};

export default Search;
