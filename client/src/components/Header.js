import {Column,Header,Logo,Phone,Mail,Divbutton,Button } from '../style/headerstyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEnvelope, faPhone,faBars, faRubleSign } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Navbar from './Navbar'
import {useState} from 'react'
import Logoimg from '../img/logo.png'
import {useMediaQuery} from 'react-responsive'

const NavSec = () => {
    const safiquery = useMediaQuery({
        query:'(max-width:470px)'
    })
const [isClicked,setClicked] = useState(false);
    return (
<Header>
   
    <Column>
    <Logo>
    <img src={Logoimg} alt="awnLogo" width="140px" height="85px"/>
    </Logo>
    <Phone>
     <FontAwesomeIcon icon={faPhone} style={{ marginRight:'8px',color:'rgb(10,183,255)'}}/> 
     <span style={{fontFamily:'tajawal,sans-serif',fontWeight:'bold',fontSize:'22px'}}>065055713</span>  
    </Phone>
    <Mail>
    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight:'8px',color:'rgb(10,183,255)'}}/> 
     <span style={{fontFamily:'tajawal,sans-serif',fontWeight:'bold',fontSize:'22px'}}>info@Aounfinance.com</span>  
    </Mail>

    <Divbutton >
    <Button onClick={()=>setClicked(!isClicked)}>
     
        <FontAwesomeIcon icon={isClicked ?faTimes:faBars} style={{color:"rgb(10,183,255)"}}></FontAwesomeIcon>
    </Button>
    </Divbutton>
</Column>

<div>
    {isClicked ? <Navbar/>: null }
    </div>
     </Header>
      );
}
 
export default NavSec;

