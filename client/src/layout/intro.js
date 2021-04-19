import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import {P,Introdiv,H1,Intorsection,Introli,Introul} from '../style/layoutstyle'

const Intro = () => {
    return ( 
    <Introdiv>
        <H1>نبذة عن الشركة</H1>

        <P> 
            شركة عون للتمويل ذ.م.م مسجلة بتاريخ 25/1/2021 تحت الرقم (59051) وتحمل الرقم الوطني للمنشأة (200180445) وعنوانها 
            عمان-الهاشمي الشمالي تم تأسيسها باستثمار رجل أعمال اردني 
            <br/>
            غايتها الرئيسية تقديم الخدمات التمويلية للأفراد والمؤسسات والشركات وفقا لأحكام الشريعة
              الإسلامية .وتم اعتماد نظام
           المرابحة الإسلامية(أمر بالشراء)كنظام أساسيفي تقديم خدماتنا    
<P>
    ومن أجل ذلك وتسهيلا للفئة المستهدفة تم تأسيس مقر للشركة في منطقة بسمان -الهاشمي  الشمالي لتتوسع لاحقا
     الى باقي محافظات المملكة الأردنية الهاشمية بلإضافة الى وجود خطة للشركة للتنوع في تقديم المنتجات التمويلية للوصول الى اكبر فئة مستهدفة لتحقيق مبدأ الشمولية في تقديم الخدمات بما يضمن ارباحها واستمراية اعمالها
</P>
        </P>
        <Intorsection>
        <article >

        <P><strong>رؤيتنا</strong></P>
        <P>نسعى لأن نكون افضل في تقديم المنتجات التمويلية متنوعة بأسلوب حديث ضمن أحكام الشريعة الإسلامية</P>
        <P><strong>رسالتنا</strong></P>
        <P>ان نكون الخيارالأفضل للأفراد بتقديم حلول مالية متوافقة مع أحكام الشريعة الإسلامية وباتباع 
            المعايير المصرفية الأفضل لعملائنا وتوفير منتجات تنافسية وطلوبة بالسوق  المحلية الأردنية 
            وتلبية اختياجات الأفرادوخدمتهم بأسلوب احترافي عبر فريق عمل مؤهل ومحترف .
        </P>
        </article>
      
        <article>
        <P style={{marginRight:'8px'}}><strong>قيمنا</strong></P>
        <Introul>
            <Introli><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft:'16px',color:'rgb(10,183,255)'}}></FontAwesomeIcon><em>الالتزام بقيمنا الإسلامية</em></Introli>
            <Introli><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft:'16px',color:'rgb(10,183,255)'}}></FontAwesomeIcon><em>العمل باحترافية وكفائة وبروح الفريق  الواحد</em></Introli>
            <Introli><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft:'16px',color:'rgb(10,183,255)'}}></FontAwesomeIcon><em>نسعى دائما لإرضاء عملائنا</em></Introli>
            <Introli><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft:'16px',color:'rgb(10,183,255)'}}></FontAwesomeIcon><em>احترام الموظفين ونثمن جهودهم في تحقيق اهداف الشركة</em></Introli>
        </Introul>
        </article>

  

       
        </Intorsection>
    </Introdiv> );
}
 
export default Intro;