import {CircularProgress, List, ListItem} from '@material-ui/core';
import {trans} from 'matice';
import React, {useEffect, useState} from 'react';
import ISearchResult from '../../Interfaces/ISearchResult';
import {search} from '../../utils';
import NoSearch from './NoSearch';
import ResultCard from './ResultCard';

interface Props {
    input: string;
    page: number;
    orderBy: string;
}

const SearchResultList = (props: Props) => {
    const [results, setResults] = useState<ISearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        setPage(1);
        if (props.input !== '') {
            getResultsArray(1);
        } else setResults([]);
    }, [props.input, props.orderBy]);

    const getResultsArray = (searchPage: number) => {
        setLoading(true);
        search(props.input, searchPage, props.orderBy)
            .then(res => {
                if (results.length > 0 && searchPage > 1) {
                    setResults(results.concat(res.data));
                } else {
                    setResults(res.data);
                }
                setLoading(false);
                res.next_page_url === null && setPage(0);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            {results.length > 0 ? (
                <>
                    <div className="flex justify-between">
                        <h2 className="text-gray-500 ">
                            {results.length === 250
                                ? 'Viser 250 ord'
                                : trans('Search.SearchResult.found') +
                                  ' ' +
                                  results.length +
                                  ' ' +
                                  trans('Search.SearchResult.words')}
                        </h2>
                    </div>
                    <List>
                        {results.map((res: ISearchResult, index: number) => (
                            <ListItem key={index} style={{padding: '2px 0px'}}>
                                <ResultCard input={props.input} result={res} />
                            </ListItem>
                        ))}
                    </List>
                    {page !== 0 && (
                        <button
                            className="w-full"
                            onClick={() => {
                                const newPage = page + 1;
                                setPage(newPage);
                                getResultsArray(newPage);
                            }}
                        >
                            Last flere resultater
                        </button>
                    )}
                </>
            ) : props.input !== '' ? (
                !loading ? (
                    <h2 className="text-xl italic text-center">
                        Fant ingen ord
                    </h2>
                ) : (
                    <div className="flex items-center justify-center">
                        <h2 className="mr-2 text-xl italic">Søker...</h2>
                        <CircularProgress size={20} />
                    </div>
                )
            ) : (
                <div>
                    <NoSearch />
                </div>
            )}
        </div>
    );
};

export default SearchResultList;
