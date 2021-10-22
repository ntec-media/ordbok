import React, {useEffect, useState} from 'react';
import CountUp from 'react-countup';
import {month, week, year} from '../../utils';
import Chart from '../Statistics/Chart';
import Table from '../Statistics/Table';

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
    const [selected, setSelected] = useState(0);
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
        <div>
            <div className="flex justify-center w-full mt-10 space-x-5 text-3xl">
                <div className="text-center">
                    <CountUp duration={2} end={2300} />
                    <p className="px-10 text-sm text-center text-gray-500">
                        I Dag
                    </p>
                </div>
                <div className="text-center">
                    <CountUp delay={0.5} duration={2} end={32000} />
                    <p className="px-10 text-sm text-center text-gray-500">
                        Juni
                    </p>
                </div>
                <div className="text-center">
                    <CountUp delay={1} duration={2} end={492034} />
                    <p className="px-10 text-sm text-center text-gray-500">
                        2021
                    </p>
                </div>
            </div>
            <div className="flex ">
                <Chart data={data} labels={labels} />
            </div>
        </div>
    );
};

export default Statistics;
