import styled from 'styled-components'


export const Commondiv = styled.div`
width:94%;
height:100px;
text-align:center;
margin:0 auto;
color:black;
position:relative;
line-height:100px;
`
export const H2 = styled.h2`
font-family:Cairo,sans-serif;
position:relative;
&:before{
    position:absolute;
    content:'';
    width:150px;
    height:2px;
    background:black;
    top:50%;
    left:300px
}
&:after{
    position:absolute;
    content:'';
    width:150px;
    height:2px;
    background:black;
    top:50%;
    right:300px
}
`

export const Sectionbtn =styled.section`
margin-right:5%;
display:flex;
flex-direction:column;
justify-content:space-around;

`
export const Main = styled.main`


display:flex;
height:225px;
justify-content:center;
align-items:center;
flex-wrap:wrap;
margin:32px auto;
text-align:center;

padding:6px;
overflow:hidden;






`

export const Divbutton = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
max-height:50px;
margin:8px;
`




export const Section = styled.section`


background:rgb(16,30,40);
border-radius:25px;
overflow:hidden;
width:98%;
margin:0 auto;
min-height:288px;
`
export const Form = styled.form`
width:100%;

direction:rtl;


`
export const Inputdiv = styled.div`
display:flex;
justify-content:center;
margin-bottom:32px;
flex-wrap:wrap;



`
export const Label = styled.label`
width:245px;
height:20px;
font-size:14px;
margin:8px 0 8px;
color:rgb(248,248,251);
@media(max-width:670px){
    width:84vw;
   margin:0;
    padding:15px;
    text-align:start;
    margin:8px;
   }
`
export const Select = styled.select`
width:265px;
height:46px;
outline:0;
margin:0 25px 0 0 ;
padding:6px 12px;
background:#fff;
box-shadow: 0 0 3px 1px rgb(172,173,177) inset;
color:rgb(16,30,40);
@media(max-width:670px){
    width:84vw;
    height:34px;
   margin:0;
    
   }
`
export const Input = styled.input`
width:265px;
height:44px;
margin:0 25px 0 0 ;
padding:6px 12px;
background:#fff;
direction:rtl;
box-shadow: 0 0 3px 1px rgb(172,173,177) inset;
outline:0;
border:0;
@media(max-width:670px){
 width:84vw;
margin:0;
 padding:15px
}



`

export const Button = styled.button`
margin:0  28px 30px 0;
padding:6px 18px;
width:112px;
height:34px;
background:rgb(10,183,255);
color:rgb(248,248,251);
border:0;
border-radius:7px;
font-family:Tajawal,sans-serif;

`
export const Buttondiv = styled.div`
width:80vw;
margin:0 auto;

&:first-child{
    margin-right:550px;
}
`

export const Buttonud = styled.button`
border:0;
font-size:24px;
background:transperent;
outline:none;
border:0;
width:30px;
height:30px;
padding:10px;
color:rgb(10,183,255);

&:hover{
    transform:scale(1.3)
}

`