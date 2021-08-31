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
        margin-left: 730px;
        margin-top: -110px;

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

    .image-top {
        position: absolute;
        margin-top: -100px;
        margin-left: 920px;
        width: 100px;
        height: 100px;
    }

    
    
//}





`;