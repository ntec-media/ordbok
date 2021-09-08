import React from 'react';
import ISearchResult from '../../Interfaces/ISearchResult';

const ResultCard = (props: ISearchResult) => {
    return (
        <div className="flex-col w-full p-4 border border-indigo-200 rounded-lg shadow-md bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100">
            <div className="flex justify-between w-full mb-6">
                <p className="font-bold">{props.fra}</p>
                <p className="italic font-bold text-blue-600">
                    {props.kredittering}
                </p>
            </div>
            <div className="flex justify-between w-full mb-6">
                <p className="italic">{props.til}</p>
            </div>
        </div>
    );
};

export default ResultCard;
