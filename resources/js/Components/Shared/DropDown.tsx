import {Menu, Transition} from '@headlessui/react';
import {CheckIcon} from '@heroicons/react/outline';
import {trans} from 'matice';
import React, {ElementType, Fragment} from 'react';

interface Props {
    items: {
        display: string;
        id?: string | number;
    }[];
    title: string;
    onSelect: (itemSelected: string | number) => void;
    mainIcon: ElementType<any>;
    itemSelected?: string | number;
}

const DropDown = (props: Props) => {
    return (
        <div className="flex items-center ml-6">
            <Menu as="div" className="relative ml-3">
                {({open}) => (
                    <>
                        <div>
                            <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <div className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="sr-only">Velg språk</span>
                                    <props.mainIcon
                                        className="w-6 h-6"
                                        aria-hidden="true"
                                    />
                                </div>
                            </Menu.Button>
                        </div>
                        <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                static
                                className="absolute right-0 z-50 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                {props.items.map((item, index) => (
                                    <Menu.Item key={index}>
                                        <p
                                            className="flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                                            onClick={() =>
                                                props.onSelect(
                                                    item.id || item.display
                                                )
                                            }
                                        >
                                            {item.id
                                                ? trans(
                                                      `Layout.navbar.languages.${item.id}`
                                                  )
                                                : item.display}
                                            {props.itemSelected &&
                                                props.itemSelected ===
                                                    item.id && (
                                                    <CheckIcon
                                                        className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                        </p>
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    );
};

export default DropDown;
