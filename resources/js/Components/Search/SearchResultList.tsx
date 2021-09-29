import {Button, List, ListItem} from '@material-ui/core';
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
        if (!searching) {
            search(
                props.input,
                page,
                props.dicts?.filter(dict => dict.selected) ||
                    localDictsSupported
            ).then(res => {
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
                    <div className="flex justify-between w-full mt-2">
                        <h2 className="px-4 text-gray-500">
                            {results.length === 250
                                ? 'Viser 250 ord'
                                : trans('Search.SearchResult.found') +
                                  ' ' +
                                  results.length +
                                  ' ' +
                                  trans('Search.SearchResult.words')}
                        </h2>
                        <h2 className="hidden px-4 text-gray-500 md:flex">
                            {props.dicts.map(
                                dict => dict.selected && dict.name + ', '
                            )}
                        </h2>
                    </div>
                    <List>
                        {results.map((res: ISearchResult, index: number) => (
                            <ListItem key={index} className="py-2">
                                <ResultCard input={props.input} result={res} />
                            </ListItem>
                        ))}
                    </List>
                    <div className="flex justify-center mx-4 mb-4">
                        <Button
                            color="primary"
                            className="w-full h-16"
                            variant="outlined"
                            onClick={() => setPage(page + 1)}
                        >
                            Last flere resultater
                        </Button>
                    </div>
                </>
            ) : props.input !== '' ? (
                <h2 className="text-xl italic text-center">Fant ingen ord</h2>
            ) : (
                <NoSearch />
            )}
        </div>
    );
};

export default SearchResultList;
