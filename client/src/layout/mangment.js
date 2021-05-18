
import React from 'react'
import  Repeateddiv  from './imgtitle'
import {H1,P} from '../style/layoutstyle'
import myimg from '../img/s3.jpg'
const Mangment = () => {
    return ( 
        <>
        <Repeateddiv myimg={myimg}  />
        <article style={{direction:'rtl'}}>
            <H1 style={{textAlign:'start'}}>الإدارة التنفيذية</H1>
            <div style={{width:"100%",height:"24px"}}></div>
            <table style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                <tbody>
                <tr>
                        <td>
                            <p style={{margin:" 12px 0px 12px 0",fontSize:"22px",fontFamily:'Almarai, sans-serif'}}><b>رامي  المومني </b></p></td>
                       
                    </tr>
                    <tr>
                        
                        <td>
                            <h2 style={{fontFamily: 'tajawal,sans-serif',textAlign:'center'}}>
                                <em>
رئيس مجلس الإدارة
                            
                            </em>
                            </h2>
                            </td>
                       
                    </tr>
               

                  
                  
                </tbody>
            </table>
            <table style={{display:'flex',justifyContent:'flex-start',alignItems:'center',marginBottom:'32px'}} >
                <tbody >

                <tr>
                        <td>
                            <p style={{margin:" 12px 0px 12px 0",fontSize:"22px",fontFamily:'Almarai, sans-serif',marginRight:'32px'}}><b>محمد  المومني </b></p></td>
                       
                    </tr>
                    <tr>
                        <td>
                            <h2 style={{fontFamily:'tajawal,sans-serif',textAlign:'center',marginRight:'32px'}}>
                                <em>
                            مدير العام
                            
                            </em>
                            </h2>
                            </td>
                       
                    </tr>
                
                   
                  
                  
                </tbody>
            </table>
            </article>
            </>
     );
}
 
export default Mangment;

                   