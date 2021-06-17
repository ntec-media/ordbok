import React from "react";
import { useState } from "react";

const Tab = (props: { setTab: (newTab: string) => void }) => {
    const [tabs, setTabs] = useState([
        { key: "week", name: "Uke", current: true },
        { key: "month", name: "Måned", current: false },
        { key: "year", name: "År", current: false },
    ]);

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(" ");
    }

    const setNewTab = (newTab: {
        key: string;
        name: string;
        current: boolean;
    }) => {
        setTabs(
            tabs.map((tab) =>
                tab.key === newTab.key
                    ? { ...newTab, current: true }
                    : { ...tab, current: false }
            )
        );
        props.setTab(newTab.key);
    };

    return (
        <div className="w-4/6">
            <div>
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">
                        Select a tab
                    </label>
                    <select
                        id="tabs"
                        name="tabs"
                        onChange={(e) => {
                            const newTab = tabs.find(
                                (t) => t.name === e.target.value
                            );
                            setNewTab(newTab!);
                        }}
                        className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        defaultValue={tabs.find((tab) => tab.current)!.name}
                    >
                        {tabs.map((tab) => (
                            <option key={tab.name}>{tab.name}</option>
                        ))}
                    </select>
                </div>
                <div className="hidden sm:block">
                    <nav
                        className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
                        aria-label="Tabs"
                    >
                        {tabs.map((tab, tabIdx) => (
                            <p
                                key={tab.name}
                                onClick={() => setNewTab(tab)}
                                className={classNames(
                                    tab.current
                                        ? "text-gray-900"
                                        : "text-gray-500 hover:text-gray-700",
                                    tabIdx === 0 ? "rounded-l-lg" : "",
                                    tabIdx === tabs.length - 1
                                        ? "rounded-r-lg"
                                        : "",
                                    "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center cursor-pointer hover:bg-gray-50 focus:z-10"
                                )}
                                aria-current={tab.current ? "page" : undefined}
                            >
                                <span>{tab.name}</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        tab.current
                                            ? "bg-indigo-500"
                                            : "bg-transparent",
                                        "absolute inset-x-0 bottom-0 h-0.5"
                                    )}
                                />
                            </p>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Tab;
