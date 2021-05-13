import styled from 'styled-components'
import myimg from '../img/safi1.jpg'

export const Repeateddiv = styled.div`
width:100%;
height:220px;
padding:0;
margin:0 0 32px 0;
// background:url(${myimg}) no-repeat;
// background-size:cover;
margin:0 auto 32px auto;


`

export const Commondiv = styled.div`
width:90%;
height:100px;
text-align:center;
margin:0 auto;
line-height:100px;
over-flow:hidden;
`
export const H2 = styled.h2`

font-family:Cairo,sans-serif;
width:165px;
margin:0 auto;
color:rgb(191,214,48);

position:relative;
&:before{
    position:absolute;
    content:'';
    width:85px;
    height:2px;
    background:black;
    top:50%;
    left:-90px;
  
    
  
}
&:after{
    position:absolute;
    content:'';
    width:85px;
    height:2px;
    background:black;
    top:50%;
    right:-90px;
   
}
`