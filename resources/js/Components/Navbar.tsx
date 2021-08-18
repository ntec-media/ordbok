import React, {useEffect, useState} from 'react';
import {Disclosure} from '@headlessui/react';
import {GlobeAltIcon, MenuIcon, XIcon} from '@heroicons/react/outline';
import {InertiaLink} from '@inertiajs/inertia-react';
import {useCookies} from 'react-cookie';
import LanguageModal from './Modals/LanguageModal';
import {languagesSupported} from '../interfaces';
import DropDown from './Shared/DropDown';
import {setLocale, trans} from 'matice';

export default function Navbar() {
    const [path, setPath] = useState('');
    const [cookies, setCookies] = useCookies(['lang']);
    const [langModalOpen, setLangModalOpen] = useState(false);

    useEffect(() => {
        if (!cookies.lang) {
            setCookies('lang', 'nob', {path: '/'});
        } else setLocale(cookies.lang);
        setPath(window.location.pathname);
    }, []);

    const updateLang = (newLang: string) => {
        setCookies('lang', newLang, {path: '/'});
        setLocale('en');
        window.location.href = path;
    };

    return (
        <>
            <Disclosure
                as="nav"
                className="z-50 w-full bg-blue-800 border-b-2 border-gray-300 shadow"
            >
                {({open}) => (
                    <>
                        <div className="mx-auto max-w-7xl">
                            <div className="flex justify-between h-16 mx-4 md:h-24 lg:mx-0">
                                <div className="flex">
                                    <div className="flex items-center flex-shrink-0">
                                        <img
                                            onClick={() =>
                                                (window.location.href = '/')
                                            }
                                            className="block w-auto h-16 -ml-4 cursor-pointer md:h-24 md:hidden"
                                            src="https://www.beneathnorthernlights.com/wp-content/uploads/2019/01/Design-uten-navn-5-e1549918936927-746x550.jpg"
                                            alt="sami flag"
                                        />
                                    </div>
                                    <div className="hidden sm:mr-6 sm:flex sm:space-x-8">
                                        <InertiaLink
                                            href="/"
                                            className={
                                                path === '/'
                                                    ? 'border-red-600 text-blue-300 inline-flex items-center px-1 pt-1 border-b-2 text-lg'
                                                    : 'border-transparent text-white     hover:border-gray-300 hover:text-blue-400 inline-flex items-center px-1 pt-1 border-b-2 text-lg '
                                            }
                                        >
                                            {trans('Layout.navbar.search')}
                                        </InertiaLink>
                                        <InertiaLink
                                            href="/word"
                                            className={
                                                path === '/word'
                                                    ? 'border-red-600 text-blue-300 inline-flex items-center px-1 pt-1 border-b-2 text-lg '
                                                    : 'border-transparent text-white hover:border-gray-300 hover:text-blue-400 inline-flex items-center px-1 pt-1 border-b-2 text-lg'
                                            }
                                        >
                                            {trans(
                                                'Layout.navbar.wordSuggestion'
                                            )}
                                        </InertiaLink>
                                        <InertiaLink
                                            href="/statistics"
                                            className={
                                                path === '/statistics'
                                                    ? 'border-red-600 text-blue-300 inline-flex items-center px-1 pt-1 border-b-2 text-lg'
                                                    : 'border-transparent text-white hover:border-gray-300 hover:text-blue-400 inline-flex items-center px-1 pt-1 border-b-2 text-lg'
                                            }
                                        >
                                            {trans('Layout.navbar.statistics')}
                                        </InertiaLink>
                                        <InertiaLink
                                            href="/app"
                                            className={
                                                path === '/app'
                                                    ? 'border-red-600 text-blue-300 inline-flex items-center px-1 pt-1 border-b-2 text-lg'
                                                    : 'border-transparent text-white hover:border-gray-300 hover:text-blue-400 inline-flex items-center px-1 pt-1 border-b-2 text-lg'
                                            }
                                        >
                                            {trans('Layout.navbar.app')}
                                        </InertiaLink>
                                    </div>
                                </div>
                                <div className="hidden md:flex">
                                    <DropDown
                                        items={languagesSupported.map(lang => {
                                            return {
                                                display: lang.name,
                                                id: lang.short,
                                            };
                                        })}
                                        title="Velg språk"
                                        mainIcon={GlobeAltIcon}
                                        itemSelected={cookies.lang}
                                        onSelect={newLang =>
                                            updateLang(newLang as string)
                                        }
                                    />
                                </div>
                                <div className="flex items-center -mr-2 sm:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XIcon
                                                className="block w-6 h-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <MenuIcon
                                                className="block w-6 h-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="pt-2 pb-3 space-y-1">
                                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                                <InertiaLink
                                    href="/"
                                    className={
                                        path === '/'
                                            ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                            : 'border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                    }
                                >
                                    {trans('Layout.navbar.search')}
                                </InertiaLink>
                                <InertiaLink
                                    href="/word"
                                    className={
                                        path === '/word'
                                            ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                            : 'border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                    }
                                >
                                    {trans('Layout.navbar.wordSuggestion')}
                                </InertiaLink>
                                <InertiaLink
                                    href="/statistics"
                                    className={
                                        path === '/statistics'
                                            ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                            : 'border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                    }
                                >
                                    {trans('Layout.navbar.statistics')}
                                </InertiaLink>

                                <p
                                    onClick={() => setLangModalOpen(true)}
                                    className={
                                        path === '/lang'
                                            ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                            : 'border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                    }
                                >
                                    {trans('Layout.navbar.choose_language')}
                                </p>

                                <InertiaLink
                                    href="/app"
                                    className={
                                        path === '/app'
                                            ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                            : 'border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                    }
                                >
                                    {trans('Layout.navbar.app')}
                                </InertiaLink>

                                <InertiaLink
                                    href="/about"
                                    className={
                                        path === '/about'
                                            ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                            : 'border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                    }
                                >
                                    {trans('Layout.navbar.about')}
                                </InertiaLink>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <LanguageModal
                open={langModalOpen}
                closeModal={() => setLangModalOpen(false)}
            />
        </>
    );
}
