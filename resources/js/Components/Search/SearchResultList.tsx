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
                    <h2 className="px-4 text-gray-500">
                        {trans('Search.SearchResult.found') +
                            ' ' +
                            results.length +
                            ' ' +
                            trans('Search.SearchResult.words')}
                    </h2>
                    <List>
                        {results.map((res: ISearchResult, index: number) => (
                            <ListItem key={index} className="py-2">
                                <ResultCard {...res} />
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
            ) : (
                <NoSearch />
            )}
        </div>
    );
};

export default SearchResultList;
