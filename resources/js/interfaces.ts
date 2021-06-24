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

export const languagesSupported: ILang[] = [
    { name: "Norsk", short: "nob" },
    { name: "Engelsk", short: "eng" },
    { name: "Lulesamisk", short: "lusm" },
    { name: "Nordsamisk", short: "nosm" },
];

export const translateLanguagesSupported: ILang[] = [
    { name: "Norsk", short: "no", selected: false },
    { name: "Engelsk", short: "eng", selected: false },
    { name: "Lulesamisk", short: "smj", selected: false },
    { name: "Nordsamisk", short: "sme", selected: false },
    { name: "Sørsamisk", short: "sma", selected: false },
    { name: "Inarisamisk", short: "smn", selected: false },
    { name: "Skoltsamisk", short: "sms", selected: false },
    { name: "Finsk", short: "fin", selected: false },
    { name: "Svensk", short: "swe", selected: false },
    { name: "Nynorsk", short: "nno", selected: false },
];
