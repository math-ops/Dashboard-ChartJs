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
        margin-left: 200px;
        justify-content: center;
        align-items: center;
    }

    .graphbar {
        width: 400px;
        height: 600px;
        margin-left: 800px;
        margin-top: -33rem;
        justify-content: center;
        align-items: center;
    }
}





`;