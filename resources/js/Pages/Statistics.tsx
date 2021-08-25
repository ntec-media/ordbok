import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Chart from "../Components/Statistics/Chart";
import Tab from "../Components/Statistics/Tab";
import Table from "../Components/Statistics/Table";
import TableChartButtons from "../Components/Statistics/TableChartButtons";
import Layout from "./Layout";

const days = [
    "monday",
    "tuesday",
    "weednesday",
    "thirsday",
    "friday",
    "saturday",
    "sunday",
];

const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
];

const Statistics = () => {
    const [currentTab, setCurrentTab] = useState<string>("week");
    const [data, setData] = useState<number[]>([]);
    const [labels, setLabels] = useState<string[]>([]);
    const [showTable, setShowTable] = useState(true);

    useEffect(() => {
        switch (currentTab) {
            case "week":
                {
                    setData(getMockWeek());
                    setLabels(days);
                }
                break;
            case "month":
                {
                    const monthData = getMockMonth();
                    const monthLabels = monthData.map((d, i) =>
                        (i + 1).toString()
                    );
                    setData(monthData);
                    setLabels(monthLabels);
                }
                break;
            case "year":
                {
                    setData(getMockYear());
                    setLabels(months);
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
                    <Tab setTab={(newTab) => setCurrentTab(newTab)} />
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

const getMockWeek = () => {
    const data = [];
    for (let i = 0; i < 7; i++) {
        data.push(Math.floor(Math.random() * 1200 + 900));
    }
    return data;
};

const getMockMonth = () => {
    const data = [];
    for (let i = 0; i < 31; i++) {
        data.push(Math.floor(Math.random() * 1200 + 900));
    }
    return data;
};

const getMockYear = () => {
    const data = [];
    for (let i = 0; i < 12; i++) {
        data.push(Math.floor(Math.random() * 8000 + 10000));
    }
    return data;
};
