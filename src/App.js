import React from "react";

import GlobalStyle from './styles/global'
import  Head  from "./components/Header"
import Foot from "./components/Footer"
import DoughnutChart from "./components/routes/Doughnut"
import Bar from "./components/routes/Bar"


function App() {
  return (
    <>
      <Head />
      <DoughnutChart />
      <Bar />
      <Foot />

      <GlobalStyle />
    </>
  )
}

export default App;
