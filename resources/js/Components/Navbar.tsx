/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { GlobeAltIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { InertiaLink } from "@inertiajs/inertia-react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const [path, setPath] = useState("");
    useEffect(() => {
        setPath(window.location.pathname);
    }, []);

    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto rounded-3xl"
                                        src="https://www.beneathnorthernlights.com/wp-content/uploads/2019/01/Design-uten-navn-5-e1549918936927-746x550.jpg"
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto"
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
                                        href="/newWord"
                                        className={
                                            path === "/newWord"
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
                                        App
                                    </InertiaLink>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    {({ open }) => (
                                        <>
                                            <div>
                                                <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                        <span className="sr-only">
                                                            Velg språk
                                                        </span>
                                                        <GlobeAltIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
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
                                                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                >
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100"
                                                                        : "",
                                                                    "block px-4 py-2 text-sm text-gray-700"
                                                                )}
                                                            >
                                                                Norsk
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100"
                                                                        : "",
                                                                    "block px-4 py-2 text-sm text-gray-700"
                                                                )}
                                                            >
                                                                Lulesamisk
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100"
                                                                        : "",
                                                                    "block px-4 py-2 text-sm text-gray-700"
                                                                )}
                                                            >
                                                                Nordsamisk
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </>
                                    )}
                                </Menu>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
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
                            <a
                                href="/"
                                className={
                                    path === "/"
                                        ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                }
                            >
                                Søk
                            </a>
                            <a
                                href="/newWord"
                                className={
                                    path === "/newWord"
                                        ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                }
                            >
                                Nytt ord
                            </a>
                            <a
                                href="/statistics"
                                className={
                                    path === "/statistics"
                                        ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                }
                            >
                                Statistikk
                            </a>

                            <a
                                href="/lang"
                                className={
                                    path === "/lang"
                                        ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                }
                            >
                                Velg språk
                            </a>

                            <a
                                href="/app"
                                className={
                                    path === "/app"
                                        ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                }
                            >
                                Last ned App
                            </a>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}