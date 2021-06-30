import React from "react";

export interface IResultCard {
    word: string;
    translation: string;
    source: string;
}

const ResultCard = (props: IResultCard) => {
    return (
        <div className="flex-col border border-gray-300 rounded-lg p-4 w-full">
            <div className="flex w-full justify-between mb-6">
                <p>{props.word}</p>
                <p>{props.source}</p>
            </div>
            <div className="flex w-full justify-between mb-6">
                <p>{props.translation}</p>
                <p className="text-blue-400 cursor-pointer">Se bøyning</p>
            </div>
        </div>
    );
};

export default ResultCard;
