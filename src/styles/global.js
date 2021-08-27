import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
//Desktop
@media (min-width: 769px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 86.25%;
    }

    .backgroundcover {
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: -1rem;
    min-height:100vh;
    opacity: 0.8;
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





`;