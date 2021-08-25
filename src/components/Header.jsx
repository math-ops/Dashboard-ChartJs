import { Header, Title } from '../styles/app'
import Logo from '../styles/assets/logo.png'

export default function Head(){
    return(
        <>
            <Header>
                <img src={Logo} alt="Flex"/>
                <Title>Dashboard Index</Title>
            </Header>        
        </>
    )
}