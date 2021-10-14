import {
    CircularProgress,
    FormControl,
    FormControlLabel,
    List,
    ListItem,
    Radio,
    RadioGroup,
} from '@material-ui/core';
import {trans} from 'matice';
import React, {useEffect, useState} from 'react';
import {ILang} from '../../interfaces';
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
    const [loading, setLoading] = useState(false);
    const [orderBy, setOrderBy] = useState('sami');

    useEffect(() => {
        if (props.input !== '') {
            getResultsArray();
        } else setResults([]);
    }, [props.input, orderBy]);

    const getResultsArray = () => {
        setLoading(true);
        search(props.input, 1, orderBy)
            .then(res => {
                setLoading(false);
                setResults(res);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const GroupByInput = () => (
        <FormControl component="fieldset">
            <RadioGroup
                row
                aria-label="order by"
                value={orderBy}
                onChange={e => setOrderBy(e.target.value)}
                name="controlled-radio-buttons-group"
            >
                <FormControlLabel
                    value="sami"
                    control={<Radio color="primary" />}
                    label="Lulesamisk-Norsk"
                />
                <FormControlLabel
                    value="norwegian"
                    control={<Radio color="primary" />}
                    label="Norsk-Lulesamisk"
                />
            </RadioGroup>
        </FormControl>
    );

    return (
        <div>
            {results.length > 0 ? (
                <>
                    <div className="flex justify-between">
                        <GroupByInput />
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
                    <GroupByInput />
                    <NoSearch />
                </div>
            )}
        </div>
    );
};

export default SearchResultList;
