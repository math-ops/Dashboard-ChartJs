import React from "react";

import GlobalStyle from './styles/global'
import  Head  from "./components/Header"
import Foot from "./components/Footer"
//import Vacineflex from "./components/routes/Dashboard"
import backgroundImage from './styles/assets/background.png'
import MenuCadastro from './components/routes/Menu'

function App() {
  return (
    <>
      <Head />
      <div className="backgroundcover" style={{ background: `url(${backgroundImage})`}} />

      
      <MenuCadastro />
      <Foot />
      <GlobalStyle />
    </>
  )
}

export default App;
