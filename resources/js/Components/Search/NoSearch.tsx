import React from 'react';
import {trans} from 'matice';

const NoSearch = () => {
    return (
        <div className="p-4 text-gray-500 md:text-black ">
            <h2 className="text-3xl text-center">
                {trans('Search.NoSearch.header')}
            </h2>
            <h3 className="py-4 text-xl text-center">
                {trans('Search.NoSearch.subtitle')}
            </h3>
        </div>
    );
};

export default NoSearch;
