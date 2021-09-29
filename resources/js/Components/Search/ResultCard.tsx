import React from 'react';
import ISearchResult from '../../Interfaces/ISearchResult';

interface Props {
    input: string;
    result: ISearchResult;
}

const ResultCard = (props: Props) => {
    function getHighlightedText(text: string) {
        // Split text on highlight term, include term itself into parts, ignore case
        const parts = text.split(new RegExp(`(${props.input})`, 'gi'));
        return (
            <span>
                {parts.map(part =>
                    part.toLowerCase() === props.input.toLowerCase() ? (
                        <span className="bg-yellow-200">{part}</span>
                    ) : (
                        part
                    )
                )}
            </span>
        );
    }

    return (
        <div className="flex-col w-full p-4 border border-indigo-200 rounded-lg shadow-md bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100">
            <div className="flex justify-between w-full mb-6">
                <p className="font-bold">
                    {getHighlightedText(props.result.fra)}
                </p>
                <p className="italic font-bold text-blue-600">
                    {props.result.kredittering}
                </p>
            </div>
            <div className="flex justify-between w-full mb-6">
                {getHighlightedText(props.result.til)}
            </div>
        </div>
    );
};

export default ResultCard;
