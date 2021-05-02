import styled from  'styled-components'


export const Header = styled.header`
display:flex;
flex-direction:column;
width:90vw;
margin:0 auto ;
padding:15px;
background:rgb(255,255,255);
@media(max-width:670px){
    width:100vw;
   
}



`
export const Column = styled.div`
display:flex;
justify-content:space-between;
align-items:center;










`
export let Logo = styled.div`
flex-basis:20%;

font-family:Cairo,sans-serif;
@media(max-width:670px){
    flex-basis:auto
}

`
export let Phone = styled.div`
font-family:Cairo,sans-serif;
font-size:18px;
flex-basis:25%;
@media(max-width:670px){
    display:none
}
`
export let Mail = styled.div`
flex-basis:25%;
font-size:18px;
font-family:Cairo ,sans-serif;
@media(max-width:670px){
    display:none
}
`
export let Divbutton = styled.div`
flex-basis:20%;
text-align:center;
`

export const Nav = styled.nav`
flex-basis:80%;
@media(max-width:670px){
    flex-basis:100%;

}
`
export const Unorderlist = styled.ul`
width:80%;
direction:rtl;
margin:0 auto;
display:flex;
font-family:Cairo,sans-serif;
justify-content:space-between;
padding:0;
&:nth-child(6):hover ul{
display:block;

}
@media(max-width:670px){
   
    width:90vw;
  

    flex-direction:column;
    justify-content:center;
    align-items:center;
}`

export const List = styled.li`
list-style:none;
text-align:center;
position:relative;
padding: 8px;


&:nth-child(6):hover ul{
    display:block;
    
    }
@media(max-width:670px){
    width:100%;
    height:70px;
    border:1px solid blue;
    text-align:center;
    line-height:70px;
    margin-bottom:4px;
    border-radius:5px;
    box-shadow:0 0 2px 0px #3e3e3e;

}
`
export const Subul=styled.ul`
margin: 0;
padding: 0;
position:absolute;
text-align:start;
width: 220px;
display:none;

z-index:999;
@media(max-width:670px){
    width:100%;
    border:1px solid blue;
    text-align:center;
    line-height:35px;
    position:relative;
    margin-bottom:4px;
    border-radius:5px;
    box-shadow:0 0 2px 0px #3e3e3e;
}`
export const Sublist = styled.li`
position:relative;
list-style:none;
height:50px;
border-bottom:1px solid white;
padding:8px ;
color:black;
background:#ffffff;
`
export const Anchor = styled.a`
text-decoration:none;
font-family: 'Cairo', sans-serif;
font-weight:bold;
color:black;
&:hover{
    color:rgb(10,183,255)
}
`
export const Button = styled.button`
width:80px;
height:40px;
padding:10px 8px;
border:none;   
background: transparent;
outline:none;
font-size:24px;


`