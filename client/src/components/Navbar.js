
import {Nav,Unorderlist,List,Anchor,Sublist,Subul } from '../style/headerstyle'
const Navbar = () => {
    return ( 
        <Nav>
<Unorderlist>
    <List><Anchor href="/">الرئيسية</Anchor></List>
    <List><Anchor href="#">الأخبار</Anchor></List>
    <List><Anchor href="/contact">اتصل بنا</Anchor></List>
    <List><Anchor href="#">موقعنا</Anchor></List>
    <List><Anchor href="/about">منتجاتنا التمويلية</Anchor></List>
    <List><Anchor href="/intro" > من نحن</Anchor>
    <Subul>
    <Sublist><Anchor href="/intro">نبذة عن الشركة</Anchor></Sublist>
    <Sublist><Anchor href="/speech">كلمة رئيس مجلس الإدارة</Anchor></Sublist>
    <Sublist><Anchor href="#">الإدارة التنفيذية</Anchor></Sublist>
    </Subul>
    </List>
    </Unorderlist>
</Nav>
     );
}
 
export default Navbar;