import styled from 'styled-components'
import Amman from '../img/amman.jpg'

export const MainDiv = styled.div`
width:100%;
height:650px;
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
font-family:Cairo,sans-serif;

`
export const P = styled.p`
width:80%;
text-align:center;
padding:16px;
font-size:24px;
color:RGB(248,248,251);
font-family:Tajawal,sans-serif;
@media(max-width:760px){
    font-size:20px
}

`