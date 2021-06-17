import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

interface Props {
    labels: string[];
    data: number[];
}

const Chart = (props: Props) => {
    const [bgColors, setBgColors] = useState<string[]>([]);

    useEffect(() => {
        setBgColors(props.data.map((d) => getRandomColor()));
    }, [props.data]);

    return (
        <Bar
            data={{
                labels: props.labels,
                datasets: [
                    {
                        label: "Antall Søk",
                        data: props.data,
                        backgroundColor: bgColors,
                        borderColor: bgColors,
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

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
