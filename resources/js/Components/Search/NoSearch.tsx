import React from 'react';
import {trans} from 'matice';

const NoSearch = () => {
    return (
        <div className="p-4 mt-6 text-gray-500 md:text-black">
            <h2 className="text-3xl text-center">
                {trans('Search.NoSearch.header')}
            </h2>
            <h3 className="py-4 text-xl text-center">
                {trans('Search.NoSearch.subtitle')}
            </h3>
            <div className="flex justify-center w-full">
                <h3 className="py-10 text-xl italic text-center text-gray-500 md:w-8/12 lg:w-10/12 2xl:w-8/12">
                    {trans('Search.NoSearch.subtitle2')}
                </h3>
            </div>
        </div>
    );
};

export default NoSearch;
