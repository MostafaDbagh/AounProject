import styled from 'styled-components'
import styeld from 'styled-components'


export const Div  = styeld.div`

overflow:hidden;

margin: 0 auto 32px;
display:grid;
grid-template-columns:1fr 1fr;
grid-gap:8px;
justify-items:right;


@media(max-width:670px){
 
    grid-template-columns:1fr ;
}

`
export const Subinput = styled.input`
width:370px;
height:44px;
margin:0 10px 0 0 ;
padding:12px 18px;
background:#fff;
direction:rtl;
border-radius:5px;
border:0;
box-shadow:0px 0 1px 1px rgb(16,18,20) inset;
`
export const Subbutton = styled.button`
margin: 0 8px ;
background:rgb(10,183,255);
padding:6px 18px;
width:112px;
height:38px;
border-radius:2px;
border:1px solid white;
font-size:16px;
font-family:tajawal,sans-serif;
color:rgb(248,248,251)
`
export const Anchorsocial = styled.a`
display:block;
width;:180px;
height:40px;
background:rgb(46,49,144);
text-decoration:none;
color:rgb(248,248,251);
line-height:20px;
padding:10px 20px;
font-family:tajawal,sans-serif;
margin-right:-99px;

margin-top:16px;



`
export const Safinput = styled.input`
margin: 0 8px 16px 0 ;
background:rgb(10,183,255);
padding:6px 18px;
width:112px;
height:38px;
border-radius:2px;
border:1px solid white;
font-size:16px;
font-family:tajawal,sans-serif;
color:rgb(248,248,251)
`
export const ColumnSec = styled.section`
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;
margin:8px;
position:relative;


`
export const ArticleSec = styled.article`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;
margin:8px
padding:15px;


`