import React from "react";

import GlobalStyle from './styles/global'
import  Head  from "./components/Header"
import Foot from "./components/Footer"
import DoughnutChart from "./components/routes/Doughnut"
import Bar from "./components/routes/Bar"
import Line from "./components/routes/Line"

function App() {
  return (
    <>
      <Head />
      <DoughnutChart />
      <Bar />
      <Line />
      <Foot />

      <GlobalStyle />
    </>
  )
}

export default App;
