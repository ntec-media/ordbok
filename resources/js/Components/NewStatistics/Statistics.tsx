import {Dialog} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import CountUp from 'react-countup';
import {month, week, year} from '../../utils';
import Chart from '../Statistics/Chart';

interface Data {
    id: number;
    date: string;
    searches: number;
}

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
                setChartData(weekData.map(day => day.searches));
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
                        (s: any) => s.date.split('-')[2] === i.toString()
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
                setChartLabels([
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
                ]);
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

    return (
        <div className="flex flex-col items-center justify-center mt-10 lg:mt-20 fadeIn">
            <h1 className="text-xl text-blue-600 md:text-3xl ">
                Søk den siste tiden
            </h1>
            <div className="flex flex-wrap-reverse justify-center w-full mt-10 text-xl md:text-3xl lg:mt-20">
                <div className="w-4/12 px-4 text-center md:px-10 md:w-3/12">
                    <p className="text-sm text-center text-gray-500 md:text-lg">
                        I dag
                    </p>
                    <p className="py-2 text-blue-600">
                        <CountUp duration={1.5} end={data.day} />
                    </p>
                    <p className="text-sm text-center text-gray-500 md:text-lg ">
                        Søk
                    </p>
                </div>
                <div
                    onClick={() => handleClick(0)}
                    className="w-4/12 px-4 text-center cursor-pointer md:px-10 md:w-3/12 icon-link"
                >
                    <p className="text-sm text-center text-gray-500 md:text-lg">
                        Uke 43
                    </p>
                    <p className="py-2 text-blue-600">
                        <CountUp duration={1.5} end={data.week} />
                    </p>
                    <p className="text-sm text-center text-gray-500 md:text-lg ">
                        Søk
                    </p>
                </div>
                <div
                    onClick={() => handleClick(1)}
                    className="w-4/12 px-4 text-center cursor-pointer md:px-10 md:w-3/12 icon-link"
                >
                    <p className="text-sm text-center text-gray-500 md:text-lg ">
                        Juni
                    </p>
                    <p className="py-2 text-blue-600">
                        <CountUp duration={1.5} end={data.month} />
                    </p>
                    <p className="text-sm text-center text-gray-500 md:text-lg ">
                        Søk
                    </p>
                </div>
                <div
                    onClick={() => handleClick(2)}
                    className="w-4/12 px-4 text-center cursor-pointer md:px-10 md:w-3/12 icon-link"
                >
                    <p className="text-sm text-center text-gray-500 md:text-lg ">
                        2021
                    </p>
                    <p className="py-2 text-blue-600">
                        <CountUp duration={1.5} end={data.year} />
                    </p>
                    <p className="text-sm text-center text-gray-500 md:text-lg ">
                        Søk
                    </p>
                </div>
                <MapDialog />
            </div>
        </div>
    );
};

export default Statistics;
