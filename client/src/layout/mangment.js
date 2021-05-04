
import React from 'react'
import  Repeateddiv  from './imgtitle'
import {H1,P} from '../style/layoutstyle'
import myimg from '../img/s3.jpg'
const Mangment = () => {
    return ( 
        <>
        <Repeateddiv myimg={myimg}  />
        <article style={{direction:'rtl'}}>
            <H1>الإدارة التنفيذية</H1>
            <div style={{width:"100%",height:"24px"}}></div>
            <table >
                <tbody>
                    <tr>
                        <td>
                            <h2 style={{marginRight:'32px',fontFamily:'tajawal,sans-serif'}}>
                                <em>
                            مدير العام
                            </em>
                            </h2>
                            </td>
                       
                    </tr>
                    <tr>
                        <td>
                            <p style={{margin:" 12px 64px 12px 0",fontSize:"22px",fontFamily:'cairo,sans-serif'}}><b>محمد نجيب المومني </b></p></td>
                       
                    </tr>
                    <tr>
                        <td>
                            <h2 style={{marginRight:'32px',fontFamily:'tajawal,sans-serif'}}>
                                <em>
                                              
    رئيس مجلس الإدارة 
                       
                            </em>
                            </h2>
                            </td>
                       
                    </tr>
                    <tr>
                        <td>
                            <p style={{margin:" 12px 84px 72px 0",fontSize:"22px",fontFamily:'cairo,sans-serif'}}><b>
                         
    رامي نجيب المومني
                                 </b></p></td>
                       
                    </tr>
                  
                </tbody>
            </table>
            </article>
            </>
     );
}
 
export default Mangment;

