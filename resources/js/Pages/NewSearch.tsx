import React, {useEffect, useState} from 'react';
import {CookiesProvider, useCookies} from 'react-cookie';
import Footer from '../Components/Footer';
import Header from '../Components/NewSearch/Header';
import SearchField from '../Components/Search/SearchField';
import SearchResultList from '../Components/Search/SearchResultList';
import {ILang} from '../interfaces';
import Store from '../Store';

const Search = () => {
    const [input, setInput] = useState('');
    const [dicts, setDicts] = useState<ILang[]>([]);
    const [cookies] = useCookies(['dicts']);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setDicts(cookies.dicts);
    }, [cookies]);

    return (
        <Store>
            <CookiesProvider>
                <div>
                    <div className="flex justify-center h-screen overflow-y-scroll bg-gray-200">
                        <div className="w-6/12 h-full bg-white shadow-2xl">
                            <Header />
                            <SearchField
                                updateInput={newInput => setInput(newInput)}
                                resetPage={() => setPage(1)}
                            />
                            <SearchResultList
                                input={input}
                                page={page}
                                dicts={dicts}
                            />
                        </div>
                    </div>
                    <Footer />
                </div>
            </CookiesProvider>
        </Store>
    );
};

export default Search;
