import { Section } from "../style/servicestyle";
import{SectionPro,H2,Li,P}from '../style/productstyle'

import React from 'react'

import  Repeateddiv  from './imgtitle'
import myimg from '../img/bat.jpg'
const ServiceTwo = () => {
    return ( 
        <>
        <Repeateddiv img={myimg} />
        <SectionPro>
<H2>
    تمويل الاطارات وبطاريات السيارات الكهربائية (الهايبرد)</H2>
<ul>


<P>المزايا  :</P>
    <Li>متوافقة احكام الشريعة الإسلامية</Li>
    <Li>
        تمويل لغاية 100%</Li>
    <Li>
        تمويل من 200-3000دينار</Li>
    <Li>
        مدد السداد من 4  شهور لغاية 24 شهر
        
        </Li>
    
</ul>
<br/>
<ul>
<P>المستندات لمطلوبة  :</P>
<Li>تعبئة طلب تمويل</Li>
    <Li>
        عرض سعر موجه الى شركة عون للتمويل من الجهة التي ترغب شراء السلعة منها</Li>
    <Li>
        هوية أحوال مدنية أو شهادة تعيين لأفراد القوات المسلحة</Li>
    <Li>
        كشف راتب لأخر شهر مثبت بكشف ضمان اجتماعي</Li>
    <Li>
    رخصة مهن سارية المفعول لأصحاب المحلات والأعمال الحرة</Li>
    <Li>
        
     رخصة السيارة سارية المفعول لأصحاب السيارات العمومي
    </Li>
</ul>

        </SectionPro>
        </>
     );
}
 
export default ServiceTwo;