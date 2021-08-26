import React from 'react'

import { Bar } from 'react-chartjs-2'
import { Subtitle } from '../../styles/app';

const data = {
    labels: ['Vermelho', 'Azul', 'Amarelho', 'Verde'],
    datasets: [
        {
            label: "# de votos",
            data: [12, 19, 4, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',        
            ],
            borderWidth: 1,
        },
    ],
};

const BarChart = () => (
    <>
    <div className="graphbar">
    <Subtitle>
        Bar Chart Example
    </Subtitle>
    <Bar 
    height={200}
    width={400}
    data={data}/>

    <div className="infoboxbar">
        <h3>Subtitle Example</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </div>
    </div>
    </>
)

export default BarChart;