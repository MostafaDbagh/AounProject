import React from 'react'
import { Repeateddiv } from '../style/commonstyle'
const Img = ({myimg}) => {
    return (  
<Repeateddiv>
    <img src={myimg} style={{width:"100%",height:'100%'}}/>
</Repeateddiv>
    );
}
 
export default Img;