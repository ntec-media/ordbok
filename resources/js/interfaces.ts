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

export const languagesSupported: { name: string; short: string }[] = [
    { name: "Norsk", short: "no" },
    { name: "Engelsk", short: "en" },
    { name: "Lulesamisk", short: "lusm" },
    { name: "Nordsamisk", short: "nosm" },
];
