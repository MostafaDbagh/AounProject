import {Commondiv,H2} from '../style/commonstyle'
import React from 'react'

const Partner = () => {
    return ( 
        <>
                 <Commondiv>
            <H2> تفضلوا في زيارتنا </H2>
        </Commondiv>
        <div style={{width:"100%",height:"400px",marginBottom:'52px'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.2739737347642!2d35.93830771516205!3d31.980587681219866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU4JzUwLjEiTiAzNcKwNTYnMjUuOCJF!5e0!3m2!1sen!2sae!4v1620635231675!5m2!1sen!2sae" 
        width="100%" height="100%"  allowfullscreen="" loading="lazy" ></iframe>
        </div>
        </>
     );
}
 
export default Partner;