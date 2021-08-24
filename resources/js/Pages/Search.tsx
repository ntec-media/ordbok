import React, {useCallback, useState} from 'react';
import Layout from './Layout';
import SearchField from '../Components/Search/SearchField';
import SearchResultList from '../Components//Search/SearchResultList';
import {useEffect} from 'react';
import NoSearch from '../Components/Search/NoSearch';
import {search} from '../utils';
import ISearchResult from '../Interfaces/ISearchResult';
import Header from '../Components/Search/Header';
import {ILang} from '../interfaces';
import {useCookies} from 'react-cookie';
import {debounce} from 'lodash';

const Search = () => {
    const [input, setInput] = useState<string>('');
    const [results, setResults] = useState<ISearchResult[] | null>(null);
    const [page, setPage] = useState(1);
    const [cookies] = useCookies(['dicts']);
    const [dicts, setDicts] = useState<ILang[]>([]);

    useEffect(() => {
        setDicts(cookies.dicts);
    }, [cookies]);

    const delayedQuery = useCallback(
        debounce(
            (query: string, dicts: ILang[]) => sendQuery(query, dicts),
            250
        ),
        []
    );

    const sendQuery = useCallback(
        async (query: string, dicts: ILang[]): Promise<any> => {
            if (query === '') return;
            try {
                setResults(
                    await getResultArray(
                        query,
                        results as ISearchResult[],
                        page,
                        dicts.filter(dict => dict.selected)
                    )
                );
            } catch (error) {
                console.error(error);
            }
        },
        []
    );

    useEffect(() => {
        delayedQuery(input, dicts);
    }, [input, dicts]);

    return (
        <Layout>
            <div className="relative flex flex-col h-full">
                <Header />
                <SearchField
                    updateInput={newInput => setInput(newInput)}
                    resetPage={() => {
                        setPage(1);
                    }}
                />
                {results !== null ? (
                    <div
                        className="relative h-screen overflow-y-auto"
                        // React.UIEventHandler<HTMLDivElement> causes trouble when attempting to access scrollProperties
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onScroll={(e: any) => {
                            const bottom =
                                e.target.scrollHeight - e.target.scrollTop ===
                                e.target.clientHeight;
                            if (bottom) {
                                getResultArray(
                                    input as string,
                                    results!,
                                    page + 1,
                                    cookies.dicts
                                ).then(res => {
                                    setResults(res);
                                });
                                setPage(page + 1);
                            }
                        }}
                    >
                        <SearchResultList results={results} />
                    </div>
                ) : (
                    <div className="p-4">
                        <NoSearch />
                    </div>
                )}
            </div>
        </Layout>
    );
};

const getResultArray = async (
    input: string,
    currentArray: ISearchResult[],
    currentPage: number,
    cookies: ILang[]
) => {
    const newData: ISearchResult[] = await search(input, currentPage, cookies);
    if (currentPage === 1) {
        return newData;
    } else {
        return currentArray.concat(newData);
    }
};

export default Search;
