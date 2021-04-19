import {useState,useEffect,useRef} from 'react'
import {Main} from '../style/servicestyle'
import {Anchor} from '../style/headerstyle'
const Service = () => {
    const [data,setData] = useState([]);
    useEffect(()=> fetch('./service.json').then(res =>res.json()).then(da =>setData(da)),[])
    let styles = {
        width:"270px",
       height:"206px",
       texatAlign:"center",
       margin:"8px",
    
   
       
       }
    return ( 
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',alignItems:'center'}}  >
 
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
    </div>
     );
}
 
export default Service;