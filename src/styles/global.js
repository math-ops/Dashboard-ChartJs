import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
//Desktop Landscape(Paisagem)
//@media only screen and (min-width: 800px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 86.25%;
    }

    body {
        
    zoom: 67%;
    }

    a {
        text-decoration: none;
    }

    .topbar {
        position: absolute;
        margin-top: -55px;
        margin-left: 1000px;
    }

    .log-topbar {
        position: absolute;
        margin-top: -55px;
        margin-left: 1050px;
    }

    .logo {
      width: 120px;
      height: 60px;
      margin-top: -110px;
    }

    .backgroundcover {
        background-attachment: local;
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        padding-top: -2.5rem;
        min-height: 140vh;
        min-width: 100vw;
        opacity: 1;
    }

    .totalvacinados {
        position: absolute;
        width: 1050px;
        height: 150px;
        background: #f1b52c;
        background-image: linear-gradient(to bottom, #f1b52c, #ce6d28);
        border: 1px solid #ce6d28;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        margin-top: -850px;
        margin-left: 800px;
    }

    .totalvacinados .number {
        font-family: "Play", sans-serif;
        font-size: 85px;
        position: absolute;
        text-align: center;
        color: #fff;
        margin-left: 550px;
        margin-top: -100px;

    }

    .elegiveis {
        position: absolute;
        width: 350px;
        height: 250px;
        background: #82bc00;
        background-image: linear-gradient(to bottom, #82bc00, #006432);
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -680px;
        margin-left: 800px;
    }

    .elegiveis .number {
        font-family: "Play", sans-serif;
        font-size: 85px;
        position: absolute;
        text-align: center;
        color: #fff;
        margin-top: 10px;
        margin-left: 85px;

    }

    .dose-um {
        position: absolute;
        width: 350px;
        height: 250px;
        background: #ba257d;
        background-image: linear-gradient(to bottom, #ba257d, #7f1e5e);
        border: 1px solid #7f1e5e;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -680px;
        margin-left: 1180px;
    }

    .dose-um .number {
        font-family: "Play", sans-serif;
        font-size: 85px;
        position: absolute;
        text-align: center;
        color: #fff;
        margin-top: 10px;
        margin-left: 85px;

    }

    .dose-dois {
        position: absolute;
        width: 350px;
        height: 250px;
        background: #ba257d;
        background-image: linear-gradient(to bottom, #ba257d, #7f1e5e);
        border: 1px solid #7f1e5e;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -400px;
        margin-left: 1180px;
    }

    .dose-dois .number {
        font-family: "Play", sans-serif;
        font-size: 85px;
        position: absolute;
        text-align: center;
        color: #fff;
        margin-top: 10px;
        margin-left: 85px;

    }

    .unica {
        position: absolute;
        width: 350px;
        height: 250px;
        background: #82bc00;
        background-image: linear-gradient(to bottom, #82bc00, #006432);
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -400px;
        margin-left: 800px;
    }

    .unica .number {
        font-family: "Play", sans-serif;
        font-size: 85px;
        position: absolute;
        text-align: center;
        color: #fff;
        margin-top: 10px;
        margin-left: 85px;

    }

    .alimentos {
        position: absolute;
        width: 300px;
        height: 530px;
        background: #009add;
        background-image: linear-gradient(to bottom, #009add, #005486);
        border: 1px solid #005486;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -680px;
        margin-left: 1550px;
    }

    .alimentos .number {
        font-family: "Play", sans-serif;
        font-size: 85px;
        position: absolute;
        text-align: center;
        color: #fff;
        margin-top: 100px;
        margin-left: 20px;

    }

    .menu-title {
        position: absolute;
        margin-top: -700px;
        margin-left: 900px;
        font-size: 25px;
    }

    .option-col {
        position: absolute;
        width: 350px;
        height: 250px;
        background: #fff;
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -500px;
        margin-left: 850px;
    }

    .option-vac {
        position: absolute;
        width: 350px;
        height: 250px;
        background: #fff;
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -500px;
        margin-left: 1250px;
    }

    .menu-button {
        position: absolute;
        border: 1px solid #006432;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        align-items: center;
        background: #82bc00;
        padding: 5px 40px;
        font-size: 35px;
        color: #fff;
        border-radius: 20px;
        margin-top: 30px;
        margin-left: 80px;
    }

    .form-controle{
        position: absolute;
        display: grid;
        grid-template-columns: repeat(6, 150px);
        width: 900px;
        height: 600px;
        background: #fff;
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -750px;
        margin-left: 880px;
       
    }
    
    .form-label{
        display: inline-flex;
        justify-content: left;
        align-items: left;
        font-size: 25px;
        margin-left: 10px;
        margin-right: 100px;
        margin-top: 20px;

    }

    .form-input{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 280px;
        border-radius: 10px;
        background: #f0f0f0;
        border: none;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

        margin-left: -140px;
        margin-right: auto;
        margin-top: 80px;

        }

    .form-button{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 20px;
        height: 50px;
        width: 300px;
        border-radius: 10px;
        background: #82bc00;
        border: #006432;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

        margin-left: 10px;
        margin-right: auto;
        margin-top: 80px;


    }

    .image-top {
        margin-top: -700px;
        margin-left: 900px;
        width: 100px;
        height: 100px;
    }

    .cadastro-colaborador{
        position: absolute;
        display: grid;
        grid-template-columns: repeat(4, 4fr);
        width: 400px;
        height: 500px;
        background: #fff;
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -730px;
        margin-left: 1030px;
    }

    .login-label {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35px;
        margin-left: 130px;
        margin-right: 100px;
        margin-top: 20px;
    }

    .login-input {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 280px;
        border-radius: 10px;
        background: #f0f0f0;
        border: none;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

        margin-left: 65px;
        margin-right: auto;
        margin-top: 20px;
    }

    .login-button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 20px;
        height: 50px;
        width: 150px;
        border-radius: 10px;
        background: #82bc00;
        border: #006432;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

        margin-left: 125px;
        margin-right: auto;
        margin-top: 60px;
    }

    .cad-colaborador{
        position: absolute;
        display: grid;
        grid-template-columns: repeat(6, 150px);
        width: 900px;
        height: 500px;
        background: #fff;
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -600px;
        margin-left: 880px;
    }

    .cad-label {
        display: inline-flex;
        justify-content: left;
        align-items: left;
        font-size: 25px;
        margin-left: 10px;
        margin-right: 100px;
        margin-top: 20px;
    }

    .cad-input {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 280px;
        border-radius: 10px;
        background: #f0f0f0;
        border: none;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

        margin-left: -140px;
        margin-right: auto;
        margin-top: 80px;
        margin-bottom: -150px;
    }

    .cad-button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 20px;
        height: 50px;
        width: 250px;
        border-radius: 10px;
        background: #82bc00;
        border: #006432;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

        margin-left: 30px;
        margin-right: auto;
        margin-top: 80px;
    }
//}





`;