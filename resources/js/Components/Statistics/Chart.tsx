import {trans} from 'matice';
import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';

interface Props {
    labels: string[];
    data: number[];
}

const test = [
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 206, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)',
];

const test1 = [
    'rgba(255, 99, 132, 1.0)',
    'rgba(54, 162, 235, 1.0)',
    'rgba(255, 206, 86, 1.0)',
    'rgba(75, 192, 192, 1.0)',
    'rgba(153, 102, 255, 1.0)',
    'rgba(255, 159, 64, 1.0)',
];

const Chart = (props: Props) => {
    const [labels, setLabels] = useState<any[]>([]);

    useEffect(() => {
        if (props.labels.length > 12) {
            setLabels(props.labels);
        } else {
            setLabels(
                props.labels.map(label => {
                    return trans(`Statistics.${label}`);
                })
            );
        }
    }, [props.labels]);

    return (
        <div className="p-12">
            <Bar
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: trans('Statistics.number_of_search'),
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
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
};

export default Chart;
