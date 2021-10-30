import axios from 'axios';
import {useEffect, useState} from 'react';
import ISearchResult from '../Interfaces/ISearchResult';

export const useWorkSearch = (
    input: string,
    pageNumber: number,
    orderBy: string
) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [results, setResults] = useState<ISearchResult[]>([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setResults([]);
        setHasMore(true);
    }, [input]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel: () => void;
        axios({
            method: 'POST',
            url: '/api/search',
            params: {search: input, page: pageNumber, orderBy: orderBy},
            cancelToken: new axios.CancelToken(c => (cancel = c)),
        })
            .then(res => {
                setResults(prevResult => {
                    return [...prevResult, ...res.data.data];
                });
                setHasMore(res.data.data.length > 0);
                setLoading(false);
            })
            .catch(e => {
                if (axios.isCancel(e)) return;
                setError(true);
            });
        return () => cancel();
    }, [input, pageNumber]);
    return {loading, error, results, hasMore};
};
