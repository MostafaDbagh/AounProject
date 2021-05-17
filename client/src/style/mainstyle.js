import styled from 'styled-components'
import { keyframes } from 'styled-components'



const breatheAnimation = keyframes`
 0% { left:-1000px;opacity:0 }

 100% { left:0px;opacity:1 }
`
const textup = keyframes`
 0% { bottom:-1000px;opacity:0 }
 70%{opacity:0.6}
 100% { bottom:0;opacity:1 }
`
const movedimage = keyframes`
0%{opacity:1 }
50%{opcity:0.6}
75%{opacity:0.1}
90%{opacity:0}


100%{opacity:0}
`
const movedimage2 = keyframes`
0%{opacity:0 }


80%{opacity:0.2}
100%{opacity:1}


`

export const MainDiv = styled.div`

height:550px;
position:relative;




`
export const Image = styled.img`
animation: ${movedimage};
animation-duration: 8s;
animation-iteration-count: infinite;
animation-fill-mode:forwords;
animation-delay: 3s;
`
export const Image2 = styled.img`
animation-name: ${movedimage2};
animation-duration: 4s;
animation-iteration-count: infinite;
animation-fill-mode:both;
animation
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
font-size:38px;
color:RGB(191,214,48);
position:relative;
font-family:Cairo,sans-serif;
animation-name: ${breatheAnimation};
animation-duration: 1.7s;
animation-iteration-count: 1;
animation-delay:1.2s,
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