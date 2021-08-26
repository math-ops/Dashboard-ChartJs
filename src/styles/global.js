import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
//Mobile
@media (max-width: 768px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 93.75%;
  }

  body {
      background: #f0f2f5;
  }
}
//Desktop
@media (min-width: 769px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 86.25%;
    }

    body {
        background: #f0f2f5;
    }

    .graphdon {
        width: 400px;
        height: 600px;
        margin-left: 150px;
        margin-top: 50px;
        justify-content: center;
        align-items: center;
    }

    .infoboxdonut { 
        justify-content: right;
        align-items: right;
        margin-top: -250px;
        margin-left: 500px;
        height: 200px;
        width: 400px;        
    }    

    .graphbar {
        width: 400px;
        height: 600px;
        margin-left: 700px;
        margin-top: -50px;

    }

    .infoboxbar { 
        justify-content: left;
        align-items: left;
        margin-top: -150px;
        margin-left: -500px;
        height: 200px;
        width: 400px;
        
    }

    .graphline {
        width: 400px;
        height: 600px;
        margin-left: 150px;
        margin-top: -150px;
        justify-content: center;
        align-items: center;
    }

    .infoboxline { 
        justify-content: right;
        align-items: right;
        margin-top: -150px;
        margin-left: 550px;
        height: 200px;
        width: 400px;        
    } 
}





`;