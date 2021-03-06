// Satni api Lemmas
export interface wordSearch {
    search: string;
    result: string[];
}

// Satni api articles
export interface searchResult {
    input: string;
    result: {
        word: string;
        lang: string;
        source: string;
    }[];
}

export interface ILang {
    name: string;
    short: string;
    selected?: boolean;
}

// Short must be same as i language->Layout php file
export const languagesSupported: ILang[] = [
    {name: 'Norsk', short: 'nb'},
    {name: 'Lulesamisk', short: 'smj'},
    {name: 'Engelsk', short: 'en'},
];

// Based of Divvun's current API.
export const translateLanguagesSupported: ILang[] = [
    {name: 'Norsk', short: 'nb', selected: false},
    {name: 'Engelsk', short: 'eng', selected: false},
    {name: 'Lulesamisk', short: 'smj', selected: false},
    {name: 'Nordsamisk', short: 'sme', selected: false},
    {name: 'Sørsamisk', short: 'sma', selected: false},
    {name: 'Inarisamisk', short: 'smn', selected: false},
    {name: 'Skoltsamisk', short: 'sms', selected: false},
    {name: 'Finsk', short: 'fin', selected: false},
    {name: 'Svensk', short: 'swe', selected: false},
    {name: 'Nynorsk', short: 'nno', selected: false},
];

// Dictionaries available in local database
export const localDictsSupported: ILang[] = [
    {
        name: 'Anders Kintel 2013',
        short: 'A. Kintel 2013',
        selected: true,
    },
    {
        name: 'Sáme Giellagálldo 2013',
        short: 'Sáme Giellagálldo 2013',
        selected: true,
    },
    {
        name: 'Medisijnalasj báhkogirjje',
        short: 'Medisijnalasj báhkogirjje',
        selected: true,
    },
];

// Dictionaries available in divvun database
export const dicstSupported: ILang[] = [
    {
        name: "Pekka Sammalahti's North Sami – Finnish dictionary",
        short: 'sammallahtismefin',
        selected: false,
    },
    {
        name: "Giellagáldu's multilingual terms",
        short: 'termwiki',
        selected: false,
    },
    {
        name: "Giellatekno's North Sami – Bokmål dictionary",
        short: 'gtsmenob',
        selected: false,
    },
    {
        name: "Giellatekno's Bokmål – North Sami dictionary",
        short: 'gtnobsme',
        selected: false,
    },
    {
        name: "Giellatekno's Bokmål – South Sami dictionary",
        short: 'gtnobsma',
        selected: false,
    },
    {
        name: "Giellatekno's South Sami – Bokmål dictionary",
        short: 'gtsmanob',
        selected: false,
    },
    {
        name: "Giellatekno's North Sami – Finnish dictionary",
        short: 'gtsmefin',
        selected: false,
    },
    {
        name: "Giellatekno's Finnish – North Sami dictionary",
        short: 'gtfinsme',
        selected: false,
    },
    {
        name: "Giellatekno's North Sami – Inari Sami dictionary",
        short: 'gtsmesmn',
        selected: false,
    },
    {
        name: "Giellatekno's Inari Sami – North Sami dictionary",
        short: 'gtsmnsme',
        selected: false,
    },
    {
        name: "Giellatekno's Finnish – Inari Sami dictionary",
        short: 'gtfinsmn',
        selected: false,
    },
    {
        name: "Giellatekno's Inari Sami – Finnish dictionary",
        short: 'gtsmnfin',
        selected: false,
    },
    {
        name: "Trond Trosterud's Finnish – Norwegian dictionary",
        short: 'gtfinnob',
        selected: false,
    },
];
