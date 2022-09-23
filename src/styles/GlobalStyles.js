import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala"
import "@fontsource/sora"




const GlobalStyles = createGlobalStyle`

${'' /* 
*{
    outline: 1px solid red !important;
} */}

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Sora', sans-serif;
    overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}

.modal {  font-size: 12px;}.modal > .header {  width: 100%;  border-bottom: 1px solid gray;  font-size: 18px;  text-align: center;  padding: 5px;}.modal > .content {  width: 100%;  padding: 10px 5px;}.modal > .actions {  width: 100%;  padding: 10px 5px;  margin: auto;  text-align: center;}.modal > .close {  cursor: pointer;  position: absolute;  display: block;  padding: 2px 5px;  line-height: 20px;  right: -10px;  top: -10px;  font-size: 24px;  background: #ffffff;  border-radius: 18px;  border: 1px solid #cfcece;}
`

export default GlobalStyles;