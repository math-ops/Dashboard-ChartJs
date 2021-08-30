import { Header, Title } from '../styles/app'
import Logo from '../styles/assets/logo.png'

export default function Head(){
    return(
        <>
            <Header>                
                <Title>Vacinômetro Flex - Covid19</Title>
                <img className="logo" src={Logo} alt="Flex"/>
                  
                <div className="topbar">
                    <strong>Bem-Vindo(a) Fulano</strong>
                        <div className="log-topbar">
                            <a href="/Login">Login </a>                            
                            <a href="/">Logout</a>
                        </div>    
                </div>               
                
            </Header>        
        </>
    )
}