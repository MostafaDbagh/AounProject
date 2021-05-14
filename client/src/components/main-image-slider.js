

import {MainDiv,Overlay,H1,P,Image,Image2} from '../style/mainstyle'
import React  from 'react'
import resp from '../img/resp.jpg'
import resp2 from '../img/resp3.jpg'
import Firts from '../img/anwar.jpg'
import Second from '../img/second.jpg'
import {useMediaQuery} from 'react-responsive'
import { useState } from 'react'
const Main  = () => {
  const [change,setChange] = useState(false);
  
  const query = useMediaQuery({
    query:'(max-width:510px)'
})
  return (  

     <MainDiv >
       {query ?
       <>
          <img src={resp2} width="100%" height="100%" style={{objectFit:'container',position:'absolute',top:'0',left:'0'}}/> 
          <Image src={resp1} width="100%" height="100%" style={{objectFit:'container',position:'absolute',top:'0',left:'0'}}/>
          </>
          : <>
          <img src={ Second} width="100%" height="100%" style={{objectFit:'container',position:'absolute',top:'0',left:'0'}}/> 
         <Image src={ Firts} width="100%" height="100%" style={{objectFit:'container',position:'absolute',top:'0',left:'0'}}/> 
        </>

       }
      
 </MainDiv> 

   
  );
}
 
export default Main ;