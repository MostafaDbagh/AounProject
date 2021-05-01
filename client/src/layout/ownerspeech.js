
import {H1,P} from '../style/layoutstyle'
import {useState,useEffect}from 'react'
import React from 'react'
import  Repeateddiv  from './imgtitle'
import myimg from '../img/s2.jpg'
const Speech = () => {
     const [sp,setSp] =useState([])
    useEffect(()=>fetch('./product.json').then(res =>res.json()).then(data =>setSp(data)),[])
    console.log(sp)
    return ( 
        <>
        <Repeateddiv myimg={myimg}  />
        <article style={{direction:'rtl',width:'74%',margin:'0 64px 32px auto'}}>
            <H1>كلمة رئيس مجلس الإدارة</H1>
            <P>يطيب لي الترحيب بكم في الموقع الإلكتروني لشركة عون للتمويل والذي من  خلاله سيكون بإمكانكم الاطلاع على غايياتنا
                وأهدافنا وخدماتنا التمويلية المتوافقة مع أحكام الشريعة اللإسلامية والتزامنا بدعم وتنمية الاقتصاد الوطني
.            </P>
            <P>انبثقت فكرة شركة عون للتمويل بعد تفكير عميق وكان القرار بضرورة تقديم تسهيلات تمويليه للفئة المستهدفة تسهيلا لهم 
                للحصول على احتياجاتهم المتنوعة بصورة عصرية
                .
            </P>
            <P>نعدكم باننا سنسعى دائما على خدمتكم بتقديمخدماتنا التمويلية 
                الإسلامية بأفضل الممارسات التمويلية ووفق اسس ائتمانية مدروسة وتدعيم الشركة بالكوادر البشرية المؤهلة لتحقيق النمو 
                المستدام ولكي نتمكن من خدمة اكبر فئة مستهدفة في جميع محافظات المملكة 
                .
            </P>
            <P>وشكرا لكم لزيارة موقعنا الالكتروني...اهلا وسهلا بكم</P>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <P>
                          <strong>  رئيس مجلس الإدارة </strong></P> </td>
                    </tr>
                    <tr>
                        <td>
                            <P><strong><em>
                            المهندس/رامي نجيب المومني
                            .
                            </em>  </strong></P>
                        </td>
                    </tr>
                </tbody>
            </table>
        </article>
</>
     );
}
 
export default Speech;