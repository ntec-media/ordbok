import React from "react";

export interface IResultCard {
    word: string;
    translation: string;
    source: string;
}

const ResultCard = (props: IResultCard) => {
    return (
        <div className="flex-col w-full p-4 border border-indigo-200 rounded-lg shadow-md bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100">
            <div className="flex justify-between w-full mb-6">
                <p className="font-bold">{props.word}</p>
                <p>{props.source}</p>
            </div>
            <div className="flex justify-between w-full mb-6">
                <p className="italic">{props.translation}</p>
            </div>
        </div>
    );
};

export default ResultCard;
