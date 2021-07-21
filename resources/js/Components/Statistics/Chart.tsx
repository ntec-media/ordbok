import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

interface Props {
    labels: string[];
    data: number[];
}

const test = [
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(255, 206, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(255, 159, 64, 0.5)",
];

const test1 = [
    "rgba(255, 99, 132, 1.0)",
    "rgba(54, 162, 235, 1.0)",
    "rgba(255, 206, 86, 1.0)",
    "rgba(75, 192, 192, 1.0)",
    "rgba(153, 102, 255, 1.0)",
    "rgba(255, 159, 64, 1.0)",
];

const Chart = (props: Props) => {
    return (
        <Bar
            data={{
                labels: props.labels,
                datasets: [
                    {
                        label: "Antall Søk",
                        data: props.data,
                        backgroundColor: test,
                        borderColor: test1,
                        borderWidth: 1,
                    },
                ],
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRaio: false,
            }}
            type=""
        />
    );
};

export default Chart;
