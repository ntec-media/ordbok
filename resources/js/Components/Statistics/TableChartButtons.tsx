import React from 'react';
import {TableIcon, ChartBarIcon} from '@heroicons/react/outline';

const TableChartButtons = (props: {showTable: boolean; toggle: () => void}) => {
    const toggle = (bool: boolean) => {
        if (bool !== props.showTable) props.toggle();
    };

    return (
        <span className="relative z-0 inline-flex rounded-md shadow-sm">
            <button
                type="button"
                className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                onClick={() => toggle(false)}
            >
                <ChartBarIcon
                    className={
                        'h-5 w-5 ' +
                        (props.showTable ? 'text-gray-400' : 'text-blue-600')
                    }
                />
            </button>
            <button
                type="button"
                className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                onClick={() => toggle(true)}
            >
                <TableIcon
                    className={
                        'h-5 w-5 ' +
                        (props.showTable ? 'text-blue-600' : 'text-gray-600')
                    }
                />
            </button>
        </span>
    );
};

export default TableChartButtons;
