import styled from 'styled-components'
import myimg from '../img/safi1.jpg'

export const Repeateddiv = styled.div`
width:100%;
height:220px;
padding:0;
margin:0;
// background:url(${myimg}) no-repeat;
// background-size:cover;
margin:0 auto 32px auto;


`

export const Commondiv = styled.div`
width:80%;
height:100px;
text-align:center;
margin:0 auto;


position:relative;
line-height:100px;
`
export const H2 = styled.h2`
position:relative;
font-family:Cairo,sans-serif;
color:rgb(191,214,48);
&:before{
    position:absolute;
    content:'';
    width:120px;
    height:2px;
    background:black;
    top:50%;
    left:300px
}
&:after{
    position:absolute;
    content:'';
    width:120px;
    height:2px;
    background:black;
    top:50%;
    right:300px
}
`