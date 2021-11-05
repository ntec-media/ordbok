import React, {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {CheckIcon} from '@heroicons/react/outline';
import LanguageIcon from '@material-ui/icons/Language';
import {languagesSupported} from '../../interfaces';
import {trans} from 'matice';

interface Props {
    selected: string;
    setSelected: (newLang: string) => void;
}

const LanguageDropDown = (props: Props) => {
    return (
        <Menu as="div" className="relative z-50 ml-3">
            {({open}) => (
                <>
                    <div>
                        <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <div className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="sr-only">
                                    {trans('Layout.navbar.choose_language')}
                                </span>
                                <LanguageIcon
                                    aria-hidden="true"
                                    style={{width: 32, height: 32}}
                                    className="text-blue-500"
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
                            {languagesSupported.map((lang, index) => (
                                <Menu.Item key={index}>
                                    <p
                                        onClick={() =>
                                            props.setSelected(lang.short)
                                        }
                                        className="flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                                    >
                                        {lang.short
                                            ? trans(
                                                  `Layout.navbar.languages.${lang.short}`
                                              )
                                            : lang.name}
                                        {props.selected &&
                                            props.selected === lang.short && (
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
    );
};

export default LanguageDropDown;
