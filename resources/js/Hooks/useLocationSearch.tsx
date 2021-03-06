import axios from 'axios';
import React, {useEffect, useState} from 'react';

export interface ILocation {
    stedsnummer: number;
    stedsnavn: {
        skrivemåte: string;
        skrivemåtestatus: string;
        språk: string;
    }[];
    navneobjekttype: string;
    representasjonspunkt: {
        øst: number;
        nord: number;
    };
    fylker: {
        fylkesnavn: string;
    }[];
    kommuner: {
        kommunenavn: string;
    }[];
}

export const useLocationSearch = (input: string) => {
    const [results, setResults] = useState<ILocation[]>([]);
    const fuzzy = false; // Fuzzy can return very large results

    useEffect(() => {
        setResults([]);
    }, [input]);

    useEffect(() => {
        const filter =
            'metadata,navn.stedsnavn.skrivemåte,navn.stedsnavn.språk,navn.navneobjekttype,navn.representasjonspunkt,navn.fylker.fylkesnavn,navn.kommuner.kommunenavn,navn.stedsnavn.skrivemåtestatus';

        let cancel: () => void;
        axios({
            method: 'GET',
            url: `https://ws.geonorge.no/stedsnavn/v1/sted?sok=${input}&fuzzy=${fuzzy}&treffPerSide=500&filter=${filter}`,
            cancelToken: new axios.CancelToken(c => (cancel = c)),
        }).then(res => {
            filterResults(res.data.navn);
        });
        return () => cancel();
    }, [input]);

    const filterResults = (results: ILocation[]) => {
        const resFiltered: ILocation[] = [];
        const languages = ['Lulesamisk', 'Nordsamisk', 'Sørsamisk'];
        results.forEach(res => {
            let isPushed = false;
            res.stedsnavn.forEach(sted => {
                if (!isPushed && languages.includes(sted.språk)) {
                    resFiltered.push(res);
                    isPushed = true;
                }
            });
        });
        setResults(resFiltered);
    };

    return results;
};
