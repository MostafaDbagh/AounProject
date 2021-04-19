import {Column,Header,Logo,Phone,Mail,Divbutton,Button } from '../style/headerstyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEnvelope, faPhone,faBars } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'
import {useState} from 'react'
import Logoimg from '../img/logo.png'

const NavSec = () => {
const [isClicked,setClicked] = useState(false);
    return (
<Header>
    <Column>
    <Logo>
    <img src={Logoimg} alt="awnLogo" width="140px" height="90px"/>
    </Logo>
    <Phone>
     <FontAwesomeIcon icon={faPhone} style={{ marginRight:'8px',color:'rgb(10,183,255)'}}/> 
     <span>+586057772</span>  
    </Phone>
    <Mail>
    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight:'8px',color:'rgb(10,183,255)'}}/> 
     <span>mostafadbagh52@gmail.com</span>  
    </Mail>

    <Divbutton >
    <Button onClick={()=>setClicked(!isClicked)}>
     
        <FontAwesomeIcon icon={isClicked ?faTimes:faBars}></FontAwesomeIcon>
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

