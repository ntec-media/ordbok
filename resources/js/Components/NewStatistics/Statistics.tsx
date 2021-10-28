import React, {useEffect, useState} from 'react';
import CountUp from 'react-countup';
import {month, week, year} from '../../utils';
import Chart from '../Statistics/Chart';

const days = [
    'monday',
    'tuesday',
    'weednesday',
    'thirsday',
    'friday',
    'saturday',
    'sunday',
];

const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
];

const Statistics = () => {
    const [data, setData] = useState<number[]>([]);
    const [currentTab, setCurrentTab] = useState<string>('week');
    const [labels, setLabels] = useState<string[]>([]);

    useEffect(() => {
        switch (currentTab) {
            case 'week':
                {
                    week().then(res => {
                        setLabels(days);
                        setData(res.map((obj: any) => obj.searches));
                    });
                }
                break;
            case 'month':
                {
                    month().then(res => {
                        setLabels(
                            Array.from({length: 31}, (_, i) =>
                                (i + 1).toString()
                            )
                        );
                        const dataArr = [];
                        for (let i = 1; i < 32; i++) {
                            const item = res.find(
                                (s: any) =>
                                    s.date.split('-')[2] === i.toString()
                            );
                            dataArr[i - 1] = item ? item.searches : 0;
                        }
                        setData(dataArr);
                    });
                }
                break;
            case 'year':
                {
                    year().then(res => {
                        setLabels(months);
                        setData(res);
                    });
                }
                break;
        }
    }, [currentTab]);

    return (
        <div className="flex flex-col items-center justify-center mt-8 space-y-6">
            <h1 className="text-4xl text-center text-blue-700">
                Søk den siste tiden
            </h1>
            <div className="flex justify-center mt-10 text-3xl">
                <div className="py-2 text-center border-b border-blue-500 cursor-pointer icon-link">
                    <p className="text-blue-500 ">
                        <CountUp duration={1.5} end={2300} />
                    </p>
                    <p className="px-10 mx-6 text-sm text-center text-gray-500">
                        Uke 43
                    </p>
                </div>
                <div className="text-center cursor-pointer icon-link">
                    <p className="text-blue-500 ">
                        <CountUp delay={0.5} duration={1.5} end={3200} />
                    </p>
                    <p className="px-10 mx-6 text-sm text-center text-gray-500">
                        Juni
                    </p>
                </div>
                <div className="text-center cursor-pointer icon-link">
                    <p className="text-blue-500 ">
                        <CountUp delay={1} duration={1.5} end={492034} />
                    </p>
                    <p className="px-10 mx-6 text-sm text-center text-gray-500">
                        2021
                    </p>
                </div>
            </div>
            <div>
                <Chart data={data} labels={labels} />
            </div>
        </div>
    );
};

export default Statistics;
