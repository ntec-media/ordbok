import {trans} from 'matice';
import React from 'react';

interface Props {
    labels: string[];
    data: number[];
}

const Table = (props: Props) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 max-h-16">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase w-96"
                                    >
                                        {props.labels.length === 12
                                            ? trans('Statistics.month')
                                            : trans('Statistics.day')}
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase w-96"
                                    >
                                        {trans('Statistics.search')}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.labels.map((label, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? 'bg-white'
                                                : 'bg-gray-50'
                                        }
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                            {props.labels.length <= 12 // check if tab is not month
                                                ? trans(`Statistics.${label}`)
                                                : label}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                            {props.data[index]
                                                ? props.data[index]
                                                : 0}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
