import React from 'react'


//Importando os componentes do React-chartjs
import { Doughnut } from 'react-chartjs-2'
import { Subtitle } from '../../styles/app';


//criando as informações do gráfico
const data = {
    //definindo os campos
    labels: ['Vermelho', 'Azul', 'Amarelho', 'Verde'],
    //definindo as informações "fixas"
    datasets: [
        {
            //nome do gráfico
            label: "# de votos",
            //informações exibidas
            data: [12, 19, 4, 5],
            //definição de cores
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

//constante que irá exibir o gráfico
const DoughnutChart = () => (
    <>
    <div className="graphdon">
    <Subtitle>
        Donut Chart Example
    </Subtitle>
    <Doughnut 
    height={100}
    width={200}
    data={data}/>    
    
    <div className="infoboxdonut">
        <h3>Subtitle Example</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </div>
    
    </div>
    
    </>
)

export default DoughnutChart;