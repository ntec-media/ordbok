import {Button, CircularProgress, List, ListItem} from '@material-ui/core';
import {trans} from 'matice';
import React, {useEffect, useState} from 'react';
import {ILang, localDictsSupported} from '../../interfaces';
import ISearchResult from '../../Interfaces/ISearchResult';
import {search} from '../../utils';
import NoSearch from './NoSearch';
import ResultCard from './ResultCard';

interface Props {
    input: string;
    page: number;
    dicts: ILang[];
}

const SearchResultList = (props: Props) => {
    const [results, setResults] = useState<ISearchResult[]>([]);
    const [searching, setSearching] = useState(false);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.input !== '') {
            getResultArray();
        }
    }, [page]);

    useEffect(() => {
        if (props.input !== '') {
            getResultArray();
        } else setResults([]);
        setPage(props.page);
    }, [props.input, props.page, props.dicts]);

    const getResultArray = () => {
        setLoading(true);
        if (!searching) {
            search(props.input, page, 'norwegian').then(res => {
                setLoading(false);
                if (page === 1) {
                    setResults(res);
                } else {
                    setResults(results.concat(res));
                }
            });
        }
    };

    return (
        <div>
            {results.length > 0 ? (
                <>
                    <div className="flex justify-between w-full">
                        <h2 className="text-gray-500 ">
                            {results.length === 250
                                ? 'Viser 250 ord'
                                : trans('Search.SearchResult.found') +
                                  ' ' +
                                  results.length +
                                  ' ' +
                                  trans('Search.SearchResult.words')}
                        </h2>
                        <h2 className="hidden text-gray-500 md:flex">
                            {props.dicts.map(
                                dict => dict.selected && dict.name + ', '
                            )}
                        </h2>
                    </div>
                    <List>
                        {results.map((res: ISearchResult, index: number) => (
                            <ListItem
                                key={index}
                                style={{paddingLeft: 0, paddingRight: 0}}
                            >
                                <ResultCard input={props.input} result={res} />
                            </ListItem>
                        ))}
                    </List>
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
                <NoSearch />
            )}
        </div>
    );
};

export default SearchResultList;
