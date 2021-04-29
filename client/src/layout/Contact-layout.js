import {Contactinput,Contactlabel,DivInput,Introdiv,Contactmessage,Contactform} from '../style/layoutstyle'
import {H1,H2,P}from '../style/productstyle'
import {Repeateddiv}from '../style/commonstyle'
import {useState,useRef} from 'react'
import {Subbutton} from '../style/subscribestyle'
import apis from '../api/api'
import React from 'react'
const Service = () => {
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
    const inputRef3 = useRef();
    const inputRef4 = useRef();
    const inputRef5 = useRef();
    
    const spanRef = useRef();
    const spanRef1 = useRef();
    const spanRef2 = useRef();
    const spanRef3 = useRef();
    const spanRef4 = useRef();
    const [contact,setContact] = useState({
        name:'',
        product:'',
        tel:'',
        awnknow:'',
        message:''
    })
    const handleContact =async (e)=>{
e.preventDefault()

const span = [spanRef,spanRef1,spanRef2,spanRef3,spanRef4]
const input = [inputRef1.current,inputRef2.current,inputRef3.current,inputRef4.current,inputRef5.current];
input.map((item,i) => item.value =='' ? span[i].current.style.display='block':span[i].current.style.display='none')


for(let  i = 0;i<=input.length-1;i++) if(input[i].value =='') return

        const {name,product,tel,awnknow,message} = contact;
        const payload = {name,product,tel,awnknow,message}
        console.log(payload)
      await apis.addContact(payload)
        console.log('fininsh requ   ')
    }
    return ( 
        <>
             <Repeateddiv>
                
                </Repeateddiv>
        <Introdiv >
       
  <H1 >اتصل بنا</H1>

  <Contactform> 

  <DivInput style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
 <Contactlabel htmlFor="cars">الإسم</Contactlabel>  
 <Contactinput ref={inputRef1} type="text" placeholder="الإسم" onChange={(e)=>setContact({
     ...contact,
     name:e.target.value
 })}></Contactinput>
  <span style={spanStyle} ref={spanRef}>الايميل المدخل غير صحيح</span>

 </DivInput>

 <DivInput style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
 <Contactlabel htmlFor="cars">
     المنتج الراغب بالحصول عليه
     </Contactlabel>  
 <Contactinput ref={inputRef2} type="text" placeholder="المنتج الراغب بالحصول عليه"  onChange={(e)=>setContact({
     ...contact,
     product:e.target.value
 })}  /> 
  <span style={spanStyle} ref={spanRef1}>الايميل المدخل غير صحيح</span>
 </DivInput>

 <DivInput style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
 <Contactlabel htmlFor="cars">رقم الهاتف</Contactlabel>  
 <Contactinput ref={inputRef3} type="text" placeholder="رقم الهاتف"    onChange={(e)=>setContact({
     ...contact,
     tel:e.target.value
 })}/> 
  <span style={spanStyle} ref={spanRef2}>الايميل المدخل غير صحيح</span>
 </DivInput>

 
 <DivInput style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
 <Contactlabel htmlFor="cars">كيف علمت عن عون للتمويل</Contactlabel>  
 <Contactinput  ref={inputRef4}type="text" placeholder="كيف علمت عن عون للتمويل"   onChange={(e)=>setContact({
     ...contact,
     awnknow:e.target.value
 })}/> 
  <span style={spanStyle} ref={spanRef3}>الايميل المدخل غير صحيح</span>
 </DivInput>

 <DivInput style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
 <Contactlabel htmlFor="cars">الرسالة</Contactlabel>  
 <Contactmessage ref={inputRef5} placeholder="الرسالة"  onChange={(e)=>setContact({
     ...contact,
     message:e.target.value
 })}/> 
  <span style={spanStyle} ref={spanRef4}>الايميل المدخل غير صحيح</span>
 </DivInput>
 <Subbutton style={{margin:"16px 52px 0 0"}} onClick={handleContact} >إرسال</Subbutton>

  </Contactform>

        </Introdiv>
          <section>
              <article style={{direction:'rtl',margin:'16px 42px 32px 0'}}>
              <H2 style={{margin:"16px auto"}}> موقعنا</H2>
              <P> 
                   عمان-الهاشمي الشمالي-اشارة الأمير حمزة-مجمع اسماعيل البلبيسي ط2 مكتب 2.

              </P>
              </article>
         

      </section>
      </>
     );
}
 
export default Service;