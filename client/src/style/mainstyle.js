import styled from 'styled-components'
import { keyframes } from 'styled-components'
import Amman from '../img/amman.jpg'

const breatheAnimation = keyframes`
 0% { left:-1000px;opacity:0 }

 100% { left:0;opacity:1 }
`
const textup = keyframes`
 0% { bottom:-1000px;opacity:0 }
 70%{opacity:0.6}
 100% { bottom:0;opacity:1 }
`

export const MainDiv = styled.div`
width:100%;
height:550px;
background:url(${Amman});
background-size:cover;
background-position:center bottom;

`
export const Overlay = styled.div`
width:100%;
height:100%;
background:rgba(0,0,0,0.7);
background-size:cover;
background-position:center bottom;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const H1 = styled.h1`
font-size:48px;
color:RGB(191,214,48);
position:relative;
font-family:Cairo,sans-serif;
animation-name: ${breatheAnimation};
animation-duration: 1.7s;
animation-iteration-count: 1;
animation-delay:0.7,
@media(max-width:450px){
    font-size:36px
}

`
export const P = styled.p`
width:90%;
text-align:center;
padding:16px;
font-size:24px;
position:relative;
color:RGB(248,248,251);
font-family:Tajawal,sans-serif;
animation-name: ${textup};
animation-duration: 1.7s;
animation-iteration-count: 1;
animation-delay:0.7,
@media(max-width:760px){
    font-size:16px
}

`