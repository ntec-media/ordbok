import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Chart from "../Components/Statistics/Chart";
import Tab from "../Components/Statistics/Tab";
import Table from "../Components/Statistics/Table";
import TableChartButtons from "../Components/Statistics/TableChartButtons";
import { week } from "../utils";
import Layout from "./Layout";

const Statistics = () => {
    const [currentTab, setCurrentTab] = useState<string>("week");
    const [data, setData] = useState<number[]>([]);
    const [labels, setLabels] = useState<string[]>([]);
    const [showTable, setShowTable] = useState(true);

    useEffect(() => {
        week().then((res) => {
            console.log(res);
        });
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
