import{Div,ColumnSec,ArticleSec,Subinput,Subbutton,Anchorsocial} from '../style/subscribestyle'

import React from 'react'

import Aos from 'aos';
import{useState,useEffect,useRef} from 'react'
import "aos/dist/aos.css";
import apis from '../api/api'

const spanStyle ={
    color:'red',
    fontFamily:'signika,sans-serif',
    fontSize:'12px',
    display:'none',
    fontWeight:'bold',
    margin:' 0'
}
const Subscribe = () => {
   const spanRef1 =useRef();
    const [sub_email,setSubemail] = useState('')
    useEffect(()=>{
        Aos.init({duration:2000})
        Aos.refresh()
    },[])
    const emailCheck = (email)=>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const handleSubscribe = async()=>{
        if(!emailCheck(sub_email)) {
            spanRef1.current.style.display='block'
            return
       
        }else{
            const payload = {sub_email};
            await apis.addSubscriber(payload)
            alert('we add subscrib successfuly')
        }
        const payload = {sub_email};
        await apis.addSubscriber(payload)
        alert('we add subscrib successfuly')
    
    }
    return ( 
        <Div>
            <ColumnSec data-aos='slide-right' data-aos-duration='800'>

    <h3 style={{ padding:'26px 10px',margin:'8px 0 8px auto',
    color:'rgb(248,248,251)',fontFamily:"tajawal,sans-serif",fontSize:'24px',width:'100%',textAlign:'end',color:'black'}}>تابع اخر الأخبار ليصلك كل جديد</h3>

    <Subinput type="text" placeholder="أدخل بريدكالإلكتروني هنا" style={{marginBottom:'32px'}} onChange={(e)=>setSubemail(e.target.value)}>
  
    </Subinput>
    <span style={spanStyle} ref={spanRef1}>الايميل المدخل غير صحيح</span>
  
    <Subbutton onClick={()=>handleSubscribe}  >اشتراك</Subbutton>
    </ColumnSec>


        
        <ArticleSec data-aos='slide-left' data-aos-duration='1000'data-aos-delay='300'>
            <h2 style={{marginBottom:'12px',textAlign:'end',width:"90%",marginRight:'10%',fontFamily:'Cairo,sans-serif'}}>اتصل بنا</h2>
            <p  style={{marginBottom:'8px',width:"90%" ,textAlign:'end',fontSize:'18px',marginRight:'10%',fontFamily:'tajawal,sans-serif'}}>  الأردن عمان</p>
            <p style={{marginBottom:'8px',width:"90%" ,textAlign:'end',fontSize:'18px',marginRight:'10%',fontFamily:'tajawal,sans-serif'}}><strong >+هاتف. &nbsp;</strong>06/5055713</p>
            <p style={{marginBottom:'8px',width:"90%" ,textAlign:'end',fontSize:'18px',marginRight:'10%',fontFamily:'tajawal,sans-serif'}}><strong>+جوال. &nbsp;</strong>077889929</p>
            <p style={{marginBottom:'8px',width:"90%" ,textAlign:'end',fontSize:'18px',marginRight:'10%',fontFamily:'tajawal,sans-serif'}}><strong>العنوان. &nbsp;</strong>
                   عمان-الهاشمي الشمالي-اشارة الأمير حمزة<br/>-مجمع اسماعيل البلبيسي ط2 مكتب 2.</p>
                   <p style={{marginBottom:'8px',width:"90%" ,textAlign:'end',fontSize:'18px',marginRight:'10%',fontFamily:'tajawal,sans-serif'}}>info@awnfinance.com<strong>&nbsp;البريدالإلكتروني </strong></p>
                  <Anchorsocial href="">صفحتنا على الفيس بوك</Anchorsocial>

           
         
         
        </ArticleSec>
  

        </Div>
     );
}
 
export default Subscribe;