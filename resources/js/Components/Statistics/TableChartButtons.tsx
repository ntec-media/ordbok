import React from "react";
import { TableIcon, ChartBarIcon } from "@heroicons/react/outline";
import { useState } from "react";

const TableChartButtons = (props: { toggle: () => void }) => {
    const [showTable, setShowTable] = useState(false);

    const toggle = (bool: boolean) => {
        if (bool !== showTable) {
            setShowTable(bool);
            props.toggle();
        }
    };

    return (
        <span className="relative z-0 inline-flex shadow-sm rounded-md">
            <button
                type="button"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                onClick={() => toggle(false)}
            >
                <ChartBarIcon
                    className={
                        "h-5 w-5 " +
                        (showTable ? "text-gray-400" : "text-blue-600")
                    }
                />
            </button>
            <button
                type="button"
                className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                onClick={() => toggle(true)}
            >
                <TableIcon
                    className={
                        "h-5 w-5 " +
                        (showTable ? "text-blue-600" : "text-gray-600")
                    }
                />
            </button>
        </span>
    );
};

export default TableChartButtons;
