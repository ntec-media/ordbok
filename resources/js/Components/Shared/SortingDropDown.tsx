/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/solid';
import {CheckIcon} from '@heroicons/react/outline';
import React from 'react';
import {trans} from 'matice';

interface Props {
    setOrderBy: (newVal: string) => void;
}

export default function SortingDropDown(props: Props) {
    const [selected, setSelected] = useState('sami');

    useEffect(() => {
        const initOrder = localStorage.getItem('orderBy');
        if (initOrder) setSelected(initOrder);
    }, []);

    useEffect(() => {
        props.setOrderBy(selected);
        localStorage.setItem('orderBy', selected);
    }, [selected]);

    return (
        <Menu as="div" className="relative z-40 inline-block text-left">
            <div>
                <Menu.Button className="flex items-center mx-2 text-gray-400 bg-gray-100 rounded-full hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    <span className="sr-only">Open options</span>
                    <ChevronDownIcon className="w-8 h-8 " aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-56 mt-4 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            <p className="px-4 py-2 font-bold text-md">
                                {trans('Layout.general.sort')}
                            </p>
                        </Menu.Item>
                        <Menu.Item>
                            <p
                                onClick={() => setSelected('sami')}
                                className="flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                            >
                                {trans('Layout.general.lulesami') +
                                    '-' +
                                    trans('Layout.general.norwegian')}
                                {selected === 'sami' && (
                                    <CheckIcon
                                        className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                )}
                            </p>
                        </Menu.Item>
                        <Menu.Item>
                            <p
                                onClick={() => setSelected('norwegian')}
                                className="flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                            >
                                {trans('Layout.general.norwegian') +
                                    '-' +
                                    trans('Layout.general.lulesami')}
                                {selected === 'norwegian' && (
                                    <CheckIcon
                                        className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                )}
                            </p>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
