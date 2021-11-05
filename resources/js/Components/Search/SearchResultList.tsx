import {CircularProgress, List, ListItem} from '@material-ui/core';
import {trans} from 'matice';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useWordSearch} from '../../Hooks/useWordSearch';
import ISearchResult from '../../Interfaces/ISearchResult';
import CustomSnackbar, {CustomSnackbarProps} from '../Shared/CustomSnackbar';
import ResultCard from './ResultCard';

interface Props {
    input: string;
    orderBy: string;
}

const RESULTS_PER_PAGE = 25;

const SearchResultList = (props: Props) => {
    const [page, setPage] = useState<number>(1);
    const {results, loading, hasMore, error} = useWordSearch(
        props.input,
        page,
        props.orderBy
    );
    const [snackbarProps, setSnackbarProps] = useState<CustomSnackbarProps>({
        type: 'error',
        open: error,
        message: 'En feil har oppstått på serveren',
        handleClose: () => setSnackbarProps({...snackbarProps, open: false}),
    });

    const observer = useRef<IntersectionObserver>();
    const lastElementRef = useCallback(
        node => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage(prevPage => prevPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    useEffect(() => {
        setPage(1);
    }, [props.input]);

    useEffect(() => {
        if (window.innerWidth < 768) return;
        results.length <= RESULTS_PER_PAGE && window.scrollTo(0, 305);
    }, [results]);
    return (
        <div className="mb-12">
            {loading && results.length === 0 && (
                <div className="mt-24 text-center">
                    <CircularProgress size={60} />
                </div>
            )}
            <List>
                {results.map((res: ISearchResult, index: number) =>
                    results.length === index + 1 ? (
                        <ListItem
                            ref={lastElementRef}
                            key={index}
                            style={{padding: '2px 0px'}}
                        >
                            <ResultCard input={props.input} result={res} />
                        </ListItem>
                    ) : (
                        <ListItem key={index} style={{padding: '2px 0px'}}>
                            <ResultCard input={props.input} result={res} />
                        </ListItem>
                    )
                )}
            </List>
            {loading && results.length > 0 && (
                <div className="mt-24 text-center">
                    <CircularProgress size={60} />
                </div>
            )}
            {!hasMore && (
                <p>
                    {trans('Search.SearchResult.found') +
                        ' ' +
                        results.length +
                        ' ' +
                        trans('Search.SearchResult.words')}
                </p>
            )}
            <CustomSnackbar {...snackbarProps} />
        </div>
    );
};

export default SearchResultList;
