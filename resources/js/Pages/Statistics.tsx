import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import Chart from '../Components/Statistics/Chart';
import Tab from '../Components/Statistics/Tab';
import Table from '../Components/Statistics/Table';
import TableChartButtons from '../Components/Statistics/TableChartButtons';
import {month, week, year} from '../utils';
import Layout from './Layout';

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
    const [currentTab, setCurrentTab] = useState<string>('week');
    const [data, setData] = useState<number[]>([]);
    const [labels, setLabels] = useState<string[]>([]);
    const [showTable, setShowTable] = useState(true);

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
        <Layout>
            <div className="relative flex flex-col h-full px-4">
                <div className="flex items-center justify-around mt-8">
                    <TableChartButtons
                        showTable={showTable}
                        toggle={() => setShowTable(!showTable)}
                    />
                    <Tab setTab={newTab => setCurrentTab(newTab)} />
                    <p>{}</p>
                </div>
                <div className="flex justify-center mt-8 h-5/6 md:mx-24">
                    {showTable ? (
                        <Table data={data} labels={labels} />
                    ) : (
                        <Chart data={data} labels={labels} />
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Statistics;
