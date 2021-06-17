import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Chart from "../Components/Statistics/Chart";
import Tab from "../Components/Statistics/Tab";
import TableChartButtons from "../Components/Statistics/TableChartButtons";
import Layout from "./Layout";

const days = [
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
    "Søndag",
];

const months = [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember",
];

const Statistics = () => {
    const [currentTab, setCurrentTab] = useState<string>("week");
    const [data, setData] = useState<number[]>([]);
    const [labels, setLabels] = useState<string[]>([]);
    const [showTable, setShowTable] = useState(false);

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
            <div className="flex flex-col px-4">
                <div className="flex justify-around items-center mt-8">
                    <TableChartButtons
                        toggle={() => setShowTable(!showTable)}
                    />
                    <Tab setTab={(newTab) => setCurrentTab(newTab)} />
                    <p>{}</p>
                </div>
                <div className="flex justify-center mt-8">
                    {showTable ? <></> : <Chart data={data} labels={labels} />}
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
