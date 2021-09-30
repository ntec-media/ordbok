import React, {useEffect, useState} from 'react';
import {CookiesProvider, useCookies} from 'react-cookie';
import Footer from '../Components/Footer';
import Header from '../Components/NewSearch/Header';
import SearchField from '../Components/Search/SearchField';
import SearchResultList from '../Components/Search/SearchResultList';
import {ILang} from '../interfaces';
import Store from '../Store';
import samiFlag from '../../images/sami_flag.png';
import norwegianFlag from '../../images/norwegian_flag.png';
import WordSuggestion from '../Components/NewSearch/WordSuggestion';
import App from '../Components/NewSearch/App';

const Search = () => {
    const [input, setInput] = useState('');
    const [dicts, setDicts] = useState<ILang[]>([]);
    const [cookies] = useCookies(['dicts']);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState(0);

    useEffect(() => {
        setDicts(cookies.dicts);
    }, [cookies]);

    return (
        <Store>
            <CookiesProvider>
                <div>
                    <div className="flex justify-center h-screen overflow-y-scroll bg-gray-200">
                        <div className="relative w-6/12 h-full bg-white shadow-2xl">
                            <div className="absolute flex top-5 right-5">
                                <img
                                    src={samiFlag}
                                    style={{width: 32, height: 32}}
                                    alt="sami flag"
                                    className="mr-2 cursor-pointer"
                                />
                                <img
                                    src={norwegianFlag}
                                    style={{width: 32, height: 32}}
                                    alt="norwegian flag"
                                    className="cursor-pointer "
                                />
                            </div>
                            <Header
                                content={content}
                                setContent={newContent =>
                                    setContent(newContent)
                                }
                            />
                            <div className="relative">
                                {content === 0 && (
                                    <>
                                        <SearchField
                                            updateInput={newInput =>
                                                setInput(newInput)
                                            }
                                            resetPage={() => setPage(1)}
                                        />
                                        <SearchResultList
                                            input={input}
                                            page={page}
                                            dicts={dicts}
                                        />
                                    </>
                                )}
                                {content === 1 && <WordSuggestion />}
                                {content === 2 && <>Statistikk</>}
                                {content === 3 && <App />}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </CookiesProvider>
        </Store>
    );
};

export default Search;
