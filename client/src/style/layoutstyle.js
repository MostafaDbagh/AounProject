import styled from 'styled-components'
export const Introdiv = styled.div`
width:98vw;
margin:8px auto 32px;
padding:15px;
direction:rtl;
overflow:hidden;
`
export const P = styled.p`
margin:0 0 12px;
font-size:18px;
line-height:1.6;
word-wrap:break-word;
padding:4px 8px;
margin:2px;
font-family:tajawal,sans-serif;
`
export const DivInput = styled.div`
width:48%;

margin:0 0 15px;

@media(max-width:670px){
    width:90%;
}
`
export const Contactinput = styled.input`
width:90%;
height:50px;
padding:6px 12px;
border-radius:5px;
box-shadow:0px 0px 3px 0 #3e3e3e inset;
border:0;
outline:0;
&::placeholder{
    font-family:tajawal,sans-serif;
}

`
export const Contactmessage = styled.textarea`

padding:6px 12px;
border-radius:5px;
box-shadow:0px 0px 3px 0 #3e3e3e inset;
position:relative;
border:0;
outline:0;
width:91%;
height:162px;
@media(max-width:670px){
  
    height:120px
}
&::placeholder{
    font-family:tajawal,sans-serif;
} 

`
export const Contactlabel = styled.label`
width:90%;

font-size:14px;
margin:0 4px 10px 0;
font-size:18px;
font-family:Cairo,sans-serif;
color:rgb(46,49,144)

`
export const Introul= styled.ul`
margin:0;
padding:0;
list-style:none;
width:100%;

`
export const Introli=styled.li`
list-style:none;
padding:8px;
margin:8px 0;
font-size:18px;
font-family:tajawal,sans-serif;


`
export const H1 = styled.h1`
padding:20px;
margin:21px 0 0 ;
font-family:Cairo,sans-serif;
`
export const Intorsection = styled.section`
display:grid;
grid-template-columns:1fr 1fr;
padding:18px 12px;

grid-gap:12px;
margin:32px 0;
@media(max-width:670px){
    grid-template-columns:1fr;
}
`
export const Contactform = styled.form`


`
