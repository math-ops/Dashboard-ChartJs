import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
//Desktop Portrait(Retrato)
@media (min-width: 1080px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 86.25%;
    }

    .backgroundcover {
        background-attachment: local;
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        padding-top: -2.5rem;
        min-height: 100vh;
        min-width: 100vw;
        opacity: 1;
    }

    .totalvacinados {
        position: absolute;
        width: 950px;
        height: 100px;
        background: #f1b52c;
        border: 1px solid #ce6d28;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        margin-top: -800px;
        margin-left: 900px;
    }

    .totalvacinados .number {
        font-family: "Play", sans-serif;
        font-size: 3rem;
        position: absolute;
        text-align: center;
        color: #000;
        margin-left: 400px;
        margin-top: -53px;

    }

    .elegiveis {
        position: absolute;
        width: 300px;
        height: 200px;
        background: #82bc00;
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -680px;
        margin-left: 900px;
    }

    .elegiveis .number {
        font-family: "Play", sans-serif;
        font-size: 3rem;
        position: absolute;
        text-align: center;
        color: #000;
        margin-left: 100px;

    }

    .dose-um {
        position: absolute;
        width: 300px;
        height: 200px;
        background: #ba257d;
        border: 1px solid #7f1e5e;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -680px;
        margin-left: 1220px;
    }

    .dose-um .number {
        font-family: "Play", sans-serif;
        font-size: 3rem;
        position: absolute;
        text-align: center;
        color: #000;
        margin-left: 100px;

    }

    .dose-dois {
        position: absolute;
        width: 300px;
        height: 200px;
        background: #ba257d;
        border: 1px solid #7f1e5e;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -450px;
        margin-left: 1220px;
    }

    .dose-dois .number {
        font-family: "Play", sans-serif;
        font-size: 3rem;
        position: absolute;
        text-align: center;
        color: #000;
        margin-left: 100px;

    }

    .unica {
        position: absolute;
        width: 300px;
        height: 200px;
        background: #82bc00;
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -450px;
        margin-left: 900px;
    }

    .unica .number {
        font-family: "Play", sans-serif;
        font-size: 3rem;
        position: absolute;
        text-align: center;
        color: #000;
        margin-left: 100px;

    }

    .alimentos {
        position: absolute;
        width: 300px;
        height: 430px;
        background: #009add;
        border: 1px solid #005486;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -680px;
        margin-left: 1550px;
    }

    .alimentos .number {
        font-family: "Play", sans-serif;
        font-size: 3rem;
        position: absolute;
        text-align: center;
        color: #000;
        margin-top: 100px;
        margin-left: 90px;

    }

}


//Desktop Landscape(Paisagem)
@media (min-width: 769px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 86.25%;
    }

    a {
        text-decoration: none;
    }

    .backgroundcover {
        background-attachment: local;
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        padding-top: -2.5rem;
        min-height: 100vh;
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
        font-size: 70px;
        position: absolute;
        text-align: center;
        color: #000;
        margin-left: 550px;
        margin-top: -75px;

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
        font-size: 70px;
        position: absolute;
        text-align: center;
        color: #000;
        margin-top: 10px;
        margin-left: 95px;

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
        font-size: 70px;
        position: absolute;
        text-align: center;
        color: #000;
        margin-top: 10px;
        margin-left: 95px;

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
        font-size: 70px;
        position: absolute;
        text-align: center;
        color: #000;
        margin-top: 10px;
        margin-left: 95px;

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
        font-size: 70px;
        position: absolute;
        text-align: center;
        color: #000;
        margin-top: 10px;
        margin-left: 95px;

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
        font-size: 70px;
        position: absolute;
        text-align: center;
        color: #000;
        margin-top: 100px;
        margin-left: 30px;

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
        grid-template-columns: repeat(4, 4fr);
        width: 700px;
        height: 600px;
        background: #fff;
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -750px;
        margin-left: 1000px;
       
    }
    
    .form-controle .form-label{
        font-size: 20px;
        margin-left: 20px;
        margin-right: 10px;
        margin-top: 20px;

    }

    .form-controle .form-input{
        height: 50px;
        width: 200px;
        margin-left: 0;
        margin-right: 10px;
        margin-top: 30px;
        justify-self: initial;
        background: #fff;
        border: 1px solid #000;
        border-radius: 10px;

        }

    .form-controle .form-button{
        position: absolute;
        width: 90px;
        height: 50px;
        background: #82bc00;
        border: none;
        border-radius: 10px;


    }
}





`;