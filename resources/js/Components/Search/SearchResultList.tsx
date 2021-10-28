import {Button, CircularProgress, List, ListItem} from '@material-ui/core';
import React, {useEffect, useRef, useState} from 'react';
import ISearchResult from '../../Interfaces/ISearchResult';
import {search} from '../../utils';
import CustomSnackbar, {CustomSnackbarProps} from '../Shared/CustomSnackbar';
import ResultCard from './ResultCard';

interface Props {
    input: string;
    orderBy: string;
}

const SearchResultList = (props: Props) => {
    const [results, setResults] = useState<ISearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState<number>(1);
    const mountedRef = useRef(true);
    const [snackbarProps, setSnackbarProps] = useState<CustomSnackbarProps>({
        type: 'error',
        open: false,
        message: 'En feil har oppstått på serveren',
        handleClose: () => setSnackbarProps({...snackbarProps, open: false}),
    });

    useEffect(() => {
        setPage(1);
        if (props.input !== '') {
            getResultsArray(1);
        }
        setResults([]);
    }, [props.input, props.orderBy]);

    useEffect(() => {
        return () => {
            mountedRef.current = false;
        };
    }, []);

    const getResultsArray = async (searchPage: number) => {
        setLoading(true);
        search(props.input, searchPage, props.orderBy)
            .then(res => {
                if (!mountedRef.current) return null;
                if (results?.length > 0 && searchPage > 1) {
                    setResults(results.concat(res.data));
                } else {
                    res.data
                        ? setResults(res.data)
                        : setSnackbarProps({...snackbarProps, open: true});
                    window.innerWidth >= 768 &&
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        (window.location = '#searchfield');
                }
                setLoading(false);
                res.next_page_url === null && setPage(0);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <>
            {results?.length > 0 ? (
                <>
                    {loading && (
                        <div className="mt-24 text-center">
                            <CircularProgress size={60} />
                        </div>
                    )}
                    <List>
                        {results.map((res: ISearchResult, index: number) => (
                            <ListItem key={index} style={{padding: '2px 0px'}}>
                                <ResultCard input={props.input} result={res} />
                            </ListItem>
                        ))}
                    </List>
                    {page !== 0 ? (
                        <div className="mt-2 mb-6">
                            {!loading ? (
                                <Button
                                    fullWidth
                                    variant="contained"
                                    style={{
                                        border: '1px solid rgba(59, 130, 246, 0.5',
                                    }}
                                    onClick={() => {
                                        const newPage = page + 1;
                                        setPage(newPage);
                                        getResultsArray(newPage);
                                    }}
                                >
                                    {'Viser ' +
                                        results.length +
                                        ' treff, last flere?'}
                                </Button>
                            ) : (
                                <div className="text-center">
                                    <CircularProgress size={60} />
                                </div>
                            )}
                        </div>
                    ) : (
                        <p>{'Viser ' + results.length + ' '}</p>
                    )}
                </>
            ) : loading ? (
                <div className="mt-24 text-center">
                    <CircularProgress size={60} />
                </div>
            ) : (
                <h2 className="mt-12 text-xl text-center">
                    Fant Ingen resultat
                </h2>
            )}
            <CustomSnackbar {...snackbarProps} />
        </>
    );
};

export default SearchResultList;
