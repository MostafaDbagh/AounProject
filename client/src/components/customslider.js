import {useState,useEffect,useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft,faLongArrowAltRight,} from '@fortawesome/free-solid-svg-icons'
import {Arrowbtn,Containerdiv,Childiv,Buttondiv} from '../style/customsliderstyle'
import img1 from '../img/1.jpeg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.png'
import img4 from '../img/4.jpg'

const Customslider = () => {
    let[num,setNum] = useState(0)
    const imgArr = [img1,img2,img3,img4];

  
    return ( 
        <Containerdiv >
        
      <Childiv >
        <img src={imgArr[num]} width="100%"height="100%"  />
      </Childiv>

      <Childiv >
      <img src={imgArr[num+1]} width="100%"height="100%"  />
      </Childiv>
  <Buttondiv >
      <Arrowbtn onClick={()=> {
if(num >1){
    setNum(0)
    return
} 
setNum(++num)
      } }><FontAwesomeIcon icon={faLongArrowAltLeft}></FontAwesomeIcon></Arrowbtn>

        <Arrowbtn onClick={()=>{
         if(num <1){
            setNum(1)
            return;
         }
         
            setNum(--num)
        

        } }><FontAwesomeIcon icon={faLongArrowAltRight} ></FontAwesomeIcon></Arrowbtn>
    
    </Buttondiv>
        </Containerdiv>
     );
}
 
export default Customslider;