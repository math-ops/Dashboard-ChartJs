import React from 'react'
import { Line } from 'react-chartjs-2'
import { Subtitle } from '../../styles/app'

const data = {
  labels: ['1', '2', '3', '4'],
  datasets: [
    {
      label: "Nº de Votos",
      data: [12, 19, 4, 5],
      fill: false,
      backgroundColor: 'rgba(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const LineChart = () => (
  <>
    <div className="graphline">
      <Subtitle>
        Line Chart Example
      </Subtitle>
     <Line 
    height={200}
    width={400}
    data={data}/> 

      <div className="infoboxline">
        <h3>Subtitle Example</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </div>
     
    </div>
  </>
)

export default LineChart;