import React from "react"
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import GlobalStyle from './styles/global'
import  Head  from "./components/Header"
import Foot from "./components/Footer"
import Vacineflex from "./components/routes/Dashboard"
import backgroundImage from './styles/assets/background.png'
import MenuCadastro from './components/routes/Menu'
import Cadastro from './components/routes/Cadastro'
import Controle from "./components/routes/Controle"

function App() {
  return (
    <>
      <Head />
      <div className="backgroundcover" style={{ background: `url(${backgroundImage})`}} />
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Vacineflex}/>
        <Route path="/Menu" exact component={MenuCadastro}/>
        <Route path="/Cadastro" component={Cadastro}/>
        <Route path="/Controle" component={Controle}/>
      </Switch>
      </BrowserRouter>

      
      
      <Foot />
      <GlobalStyle />
    </>
  )
}

export default App;
