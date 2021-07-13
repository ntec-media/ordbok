import React from "react";

interface Props {
    labels: string[];
    data: number[];
}

const Table = (props: Props) => {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 max-h-16">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-center text-gray-500 uppercase w-96"
                                    >
                                        Dag
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-center text-gray-500 uppercase w-96"
                                    >
                                        Søk
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data.map((data, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "bg-white"
                                                : "bg-gray-50"
                                        }
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                            {props.labels[index]}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                            {data}
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
