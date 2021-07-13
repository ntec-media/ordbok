import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
    GlobeAltIcon,
    MenuIcon,
    XIcon,
    CheckIcon,
} from "@heroicons/react/outline";
import { InertiaLink } from "@inertiajs/inertia-react";
import { useCookies } from "react-cookie";
import LanguageModal from "./Modals/LanguageModal";
import { languagesSupported } from "../interfaces";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const [path, setPath] = useState("");
    const [cookies, setCookies] = useCookies(["lang"]);
    const [langModalOpen, setLangModalOpen] = useState(false);

    useEffect(() => {
        if (!cookies.lang) setCookies("lang", "no", { path: "/" });
        setPath(window.location.pathname);
    }, []);

    const updateLang = (newLang: string) => {
        setCookies("lang", newLang, { path: "/" });
    };

    return (
        <>
            <Disclosure
                as="nav"
                className="z-50 w-full bg-white border-b-2 border-gray-300 shadow"
            >
                {({ open }) => (
                    <>
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="flex">
                                    <div className="flex items-center flex-shrink-0">
                                        <img
                                            className="block w-auto h-8 lg:hidden rounded-3xl"
                                            src="https://www.beneathnorthernlights.com/wp-content/uploads/2019/01/Design-uten-navn-5-e1549918936927-746x550.jpg"
                                            alt="Workflow"
                                        />
                                        <img
                                            className="hidden w-auto h-8 lg:block"
                                            src="https://www.beneathnorthernlights.com/wp-content/uploads/2019/01/Design-uten-navn-5-e1549918936927-746x550.jpg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                        {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                        <InertiaLink
                                            href="/"
                                            className={
                                                path === "/"
                                                    ? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                            }
                                        >
                                            Søk
                                        </InertiaLink>
                                        <InertiaLink
                                            href="/word"
                                            className={
                                                path === "/word"
                                                    ? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                            }
                                        >
                                            Ordforslag
                                        </InertiaLink>
                                        <InertiaLink
                                            href="/statistics"
                                            className={
                                                path === "/statistics"
                                                    ? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                            }
                                        >
                                            Statistikk
                                        </InertiaLink>
                                        <InertiaLink
                                            href="/app"
                                            className={
                                                path === "/app"
                                                    ? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                            }
                                        >
                                            Last ned app
                                        </InertiaLink>
                                    </div>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        {({ open }) => (
                                            <>
                                                <div>
                                                    <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                        <div className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                            <span className="sr-only">
                                                                Velg språk
                                                            </span>
                                                            <GlobeAltIcon
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
                                                        {languagesSupported.map(
                                                            (language) => (
                                                                <Menu.Item
                                                                    key={
                                                                        language.short
                                                                    }
                                                                >
                                                                    <p
                                                                        className="flex justify-between block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                                                                        onClick={() =>
                                                                            updateLang(
                                                                                language.short
                                                                            )
                                                                        }
                                                                    >
                                                                        {
                                                                            language.name
                                                                        }
                                                                        {cookies.lang ===
                                                                            language.short && (
                                                                            <CheckIcon
                                                                                className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                                                                aria-hidden="true"
                                                                            />
                                                                        )}
                                                                    </p>
                                                                </Menu.Item>
                                                            )
                                                        )}
                                                    </Menu.Items>
                                                </Transition>
                                            </>
                                        )}
                                    </Menu>
                                </div>
                                <div className="flex items-center -mr-2 sm:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                                <InertiaLink
                                    href="/"
                                    className={
                                        path === "/"
                                            ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                            : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                    }
                                >
                                    Søk
                                </InertiaLink>
                                <InertiaLink
                                    href="/newWord"
                                    className={
                                        path === "/word"
                                            ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                            : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                    }
                                >
                                    Nytt ord
                                </InertiaLink>
                                <InertiaLink
                                    href="/statistics"
                                    className={
                                        path === "/statistics"
                                            ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                            : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                    }
                                >
                                    Statistikk
                                </InertiaLink>

                                <p
                                    onClick={() => setLangModalOpen(true)}
                                    className={
                                        path === "/lang"
                                            ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                            : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                    }
                                >
                                    Velg språk
                                </p>

                                <InertiaLink
                                    href="/app"
                                    className={
                                        path === "/app"
                                            ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                            : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                    }
                                >
                                    Last ned App
                                </InertiaLink>

                                <InertiaLink
                                    href="/about"
                                    className={
                                        path === "/about"
                                            ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                            : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                    }
                                >
                                    Om appen
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
