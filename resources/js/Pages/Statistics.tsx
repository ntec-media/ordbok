import {Dialog} from '@material-ui/core';
import {trans} from 'matice';
import React, {useEffect, useState} from 'react';
import CountUp from 'react-countup';
import Layout from '../Components/Shared/Layout';
import Chart from '../Components/Statistics/Chart';
import {month, week, year} from '../utils';

interface Data {
    id: number;
    date: string;
    searches: number;
}

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
    const [data, setData] = useState({
        day: 0,
        week: 0,
        month: 0,
        year: 0,
    });
    const [weekData, setWeekData] = useState<Data[]>([]);
    const [monthData, setMonthData] = useState<Data[]>([]);
    const [yearData, setYearData] = useState<number[]>([]);

    const [chartLabels, setChartLabels] = useState<string[]>([]);
    const [chartData, setChartData] = useState<number[]>([]);
    const [chartOpen, setChartOpen] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const [weekRes, monthRes, yearRes] = await Promise.all([
                week(),
                month(),
                year(),
            ]);
            const chd = monthRes.map((s: any) => s.searches);
            setChartData(chd);
            setData({
                day: weekRes[0].searches,
                week: weekRes.reduce(
                    (sum: number, obj: {searches: number}) =>
                        sum + obj.searches,
                    0
                ),
                month: monthRes.reduce(
                    (sum: number, obj: {searches: number}) =>
                        sum + obj.searches,
                    0
                ),
                year: yearRes.reduce(
                    (sum: number, searches: number) => sum + searches,
                    0
                ),
            });
            setWeekData(weekRes);
            setMonthData(monthRes);
            setYearData(yearRes);
        };

        getData();
    }, []);

    const handleClick = (opt: number) => {
        switch (opt) {
            default: {
                const dataArr = [];
                for (let i = 0; i < 7; i++) {
                    const searches = weekData.find(
                        d => new Date(d.date).getDay() - 1 === i
                    );
                    dataArr[i] = searches?.searches || 0;
                    setChartData(dataArr);
                }
                setChartLabels([
                    'monday',
                    'tuesday',
                    'weednesday',
                    'thirsday',
                    'friday',
                    'saturday',
                    'sunday',
                ]);
                break;
            }
            case 1: {
                const dataArr = [];
                for (let i = 1; i < 32; i++) {
                    const item = monthData.find(
                        (s: any) => parseInt(s.date.split('-')[2]) === i
                    );
                    dataArr[i - 1] = item ? item.searches : 0;
                }
                setChartData(dataArr);
                setChartLabels(
                    Array.from({length: 31}, (_, i) => (i + 1).toString())
                );
                break;
            }
            case 2: {
                setChartData(yearData.map(month => month));
                setChartLabels(months);
                break;
            }
        }
        setChartOpen(true);
    };

    const MapDialog = () => (
        <Dialog
            open={chartOpen}
            onClose={() => setChartOpen(false)}
            maxWidth="md"
            fullWidth
        >
            <Chart data={chartData} labels={chartLabels} />
        </Dialog>
    );
    const content = (
        <div className="flex flex-col items-center mt-10 md:min-h-screen lg:mt-20 fadeIn">
            <h1 className="text-xl text-blue-600 md:text-3xl ">
                {trans('Statistics.number_of_search')}
            </h1>
            <div className="w-4/12 px-4 mt-10 text-center md:hidden md:px-10 md:w-3/12">
                <p className="text-sm text-center text-gray-500 md:text-lg">
                    I dag
                </p>
                <p className="py-2 text-blue-600">
                    <CountUp duration={1.5} end={data.day} />
                </p>
                <p className="text-sm text-center text-gray-500 md:text-lg ">
                    {trans('Statistics.search')}
                </p>
            </div>
            <div className="flex flex-wrap justify-center w-full mt-10 text-xl md:text-3xl lg:mt-20">
                <div className="hidden w-4/12 px-4 text-center md:inline md:px-10 md:w-3/12">
                    <p className="text-sm text-center text-gray-500 md:text-lg">
                        I dag
                    </p>
                    <p className="py-2 text-blue-600">
                        <CountUp duration={1.5} end={data.day} />
                    </p>
                    <p className="text-sm text-center text-gray-500 md:text-lg ">
                        {trans('Statistics.search')}
                    </p>
                </div>
                <div
                    onClick={() => handleClick(0)}
                    className="w-4/12 px-4 text-center cursor-pointer md:px-10 md:w-3/12 icon-link"
                >
                    <p className="text-sm text-center text-gray-500 md:text-lg">
                        Siste uke
                    </p>
                    <p className="py-2 text-blue-600">
                        <CountUp duration={1.5} end={data.week} />
                    </p>
                    <p className="text-sm text-center text-gray-500 md:text-lg ">
                        {trans('Statistics.search')}
                    </p>
                </div>
                <div
                    onClick={() => handleClick(1)}
                    className="w-4/12 px-4 text-center cursor-pointer md:px-10 md:w-3/12 icon-link"
                >
                    <p className="text-sm text-center text-gray-500 md:text-lg ">
                        {trans(`Statistics.${months[new Date().getMonth()]}`)}
                    </p>
                    <p className="py-2 text-blue-600">
                        <CountUp duration={1.5} end={data.month} />
                    </p>
                    <p className="text-sm text-center text-gray-500 md:text-lg ">
                        {trans('Statistics.search')}
                    </p>
                </div>
                <div
                    onClick={() => handleClick(2)}
                    className="w-4/12 px-4 text-center cursor-pointer md:px-10 md:w-3/12 icon-link"
                >
                    <p className="text-sm text-center text-gray-500 md:text-lg ">
                        {new Date().getFullYear()}
                    </p>
                    <p className="py-2 text-blue-600">
                        <CountUp duration={1.5} end={data.year} />
                    </p>
                    <p className="text-sm text-center text-gray-500 md:text-lg ">
                        {trans('Statistics.search')}
                    </p>
                </div>
                <MapDialog />
            </div>
        </div>
    );

    return (
        <>
            <div className="md:hidden fadeIn">
                <Layout>{content}</Layout>
            </div>
            <div className="hidden md:block fadeIn">{content}</div>
        </>
    );
};

export default Statistics;
