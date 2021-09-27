import React from 'react';
import {InformationCircleIcon} from '@heroicons/react/solid';
import {trans} from 'matice';

const CookiePopup = (props: {setCookieTrue: () => void}) => {
    return (
        <div className="absolute bottom-0 left-0 right-0 z-50 w-full mx-auto mb-12 md:w-4/6 md:mb-32 lg:mb-36 lg:w-2/6">
            <div className="p-4 rounded-md bg-blue-50 ">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <InformationCircleIcon
                            className="w-5 h-5 text-blue-700"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">
                            {trans('Layout.cookie.header')}
                        </h3>
                        <div className="mt-2 text-sm text-blue-600">
                            <p>{trans('Layout.cookie.content')}</p>
                        </div>
                        <div className="mt-4">
                            <div className="-mx-2 -my-1.5 flex">
                                <button
                                    type="button"
                                    className="bg-blue-200 px-2 py-1.5 rounded-md text-sm font-medium text-blue-800 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50 focus:ring-blue-600"
                                    onClick={() => props.setCookieTrue()}
                                >
                                    {trans('Layout.cookie.btnText')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookiePopup;
