
import {Main,Section,Select,Form,Input,Label,Inputdiv,Sectionbtn,Buttonud,Buttondiv} from '../style/servicestyle'
import React from 'react'
import {Anchor} from '../style/headerstyle'
import {Commondiv,H2} from '../style/commonstyle'
import {useState,useEffect,useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp,faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {useMediaQuery} from 'react-responsive'
import Aos from 'aos';
import apis from '../api/api'
import{Safinput}from '../style/subscribestyle'


import "aos/dist/aos.css";

const Service  = () => {
    const spanStyle ={
        color:'red',
        fontFamily:'signika,sans-serif',
        fontSize:'12px',
        display:'none',
        fontWeight:'bold',
        margin:'2px 0'
    }
const inputRef1 = useRef();
const inputRef2= useRef();
const selectRef1 = useRef();
const selectRef2 = useRef();

const spanRef = useRef();
const spanRef1 = useRef();
const spanRef2 = useRef();
const spanRef3 = useRef();

    const upRef = useRef();
    const downRef = useRef();
    const [data,setData] = useState([]);
    const [financeInfo ,setFinanceinfo] = useState({
        first:'',
        second:'',
        three:'',
        four:'',
 
    })
    const handleSubmit =async (e)=>{
        e.preventDefault();

        const span = [spanRef,spanRef1,spanRef2,spanRef3]
        const input = [selectRef1.current,selectRef2.current,inputRef1.current,inputRef2.current];
        input.map((item,i) => item.value =='' ? span[i].current.style.display='block':span[i].current.style.display='none')
       input.map((item,i)=>console.log(item.value))
        const {first,second,three,four}=financeInfo;
        for(let  i = 0;i<=input.length-1;i++) if(input[i].value =='') return
            
     
        const payload ={first,second,three,four}
       await apis.addFinance(payload)
       alert('we send request quiclly')
        
    }
    const safiquery = useMediaQuery({
        query:'(max-width:670px)'
    })

let [obj,setObj] = useState({
    safi:0,
    up:0,
    down:3,
})
useEffect(()=> fetch('./service.json').then(res =>res.json()).then(da =>setData(da)),[])




function safi(){
    if(safiquery){
        if(obj['up']==0){
            downRef.current.style.display='none';
            upRef.current.style.display='block'; 
        }
       else if(obj['up']==1){
            downRef.current.style.display='block';
            upRef.current.style.display='block';
     
        }else if(obj['up']==3) {
            upRef.current.style.display='none';
            downRef.current.style.display='block';
        }else {
            downRef.current.style.display='block';
            upRef.current.style.display='block';
        }
    }
    else return

}
useEffect(()=>{
    Aos.init({duration:2000})
    Aos.refresh()
    safi();
 

   
},[obj['safi'],obj['up']])

let styles = {
 width:"270px",
height:"206px",
texatAlign:"center",
margin:"8px",
position:'relative',

top:`${safiquery ? obj['safi']:0}px`,
borderRadius:"15px"

}



return ( 
    <>
   
        <Commondiv>
            <H2>خدماتنا التمويلية</H2>
        </Commondiv>
    
    
         <div style={{width:'86%',margin:'32px auto',display:'flex'}} >
        <Main>
      
           
            {data.map(item =>
             

             <section key={item.id}  style={styles}    >
             <figure>
               <img src={item.image} alt="Trulli" />
               <Anchor href={item.routes}>
               <figcaption>{item.caption}</figcaption>
               </Anchor>
             </figure>
             </section> 
       
           
                )}
        </Main>
        {safiquery &&<Sectionbtn>

        <Buttonud ref={upRef} onClick={()=>{
 
 setObj({
     ...obj,
       safi:obj['safi']-225,
       up:obj['up']+1,
   
 }) 
 
        }}><FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon></Buttonud>

        <Buttonud ref={downRef}   onClick={()=>{
  setObj({
    ...obj,
      safi:obj['safi']+225,
      up:obj['up']-1,
  
}) 

        }}>
            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></Buttonud>
        </Sectionbtn>
    }
        </div>

   
       
        <Section>


         
        <Commondiv>
            <H2> احسب قسطك</H2>
        </Commondiv>

        <Form onSubmit={handleSubmit}>
<Inputdiv data-aos="fade-down"   >

     <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}  >
            <Label htmlFor="cars">نوع التمويل *</Label>
          <Select ref={selectRef1} onChange={(e)=>setFinanceinfo({
            ...financeInfo,
            first:e.target.value
        })}>
           
          <option value="" disabled defaultValue>- اختر قيمة -</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
          </Select> 
          <span style={spanStyle} ref={spanRef}>not valid</span>
      </div>

      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
      <Label htmlFor="cars"></Label>
      <Select ref={selectRef2}  onChange={(e)=>setFinanceinfo({
          ...financeInfo,
          second:e.target.value
      })}>
      <option value="" disabled defaultValue hidden>- اختر قيمة -</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
          </Select>
          <span style={spanStyle} ref={spanRef1}>not valid</span>
      </div>


 <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
 <Label htmlFor="cars">القيمة الشرائية</Label>  
 <Input ref={inputRef1} type="text" placeholder="ادخل القيمة الشرائية" onChange={(e)=>setFinanceinfo({
     ...financeInfo,
     three:e.target.value,
 })}/> 
 <span style={spanStyle} ref={spanRef2}>not valid</span>
 </div>

 <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
 <Label htmlFor="cars">قيمة التمويل</Label>  
 <Input ref={inputRef2} type="text" placeholder="ادخل قيمة التمويل" onChange={(e)=>{setFinanceinfo({
     ...financeInfo,
      four:e.target.value
 })}}/> 
 <span style={spanStyle} ref={spanRef3}>not valid</span>
 </div>
 
 </Inputdiv>

 <Buttondiv >

 {/* <Button>احسب</Button>
 <Button>تقديم طلب</Button> */}
 <Safinput type="submit"></Safinput>
 </Buttondiv> 

        </Form>
        </Section>

 </>
     );
}
 
export default Service ;