import React from 'react';
import { Box } from '@mui/material';

import left from "../images/4_OMAA_011.jpg"
import right from "../images/6_OMAA_017.jpg"
import LeftAndRight from '../components/LeftAndRight';
import Footer from '../components/footer';

const Doors = () => {
    const data = [
        {
            img: left,
            h1 : "أعمال الالمنيوم " , 
            p: `نحن نتميز في تصنيع منتجات الألمنيوم عالية الجودة، باستخدام أحدث التقنيات والمعدات. سواء كنت بحاجة إلى إطارات نوافذ، أبواب، أو تفاصيل معدنية، نقدم منتجات مخصصة تلبي احتياجاتك بدقة فائقة و ,  نحن نوفر خدمات التوريد والتركيب بكفاءة عالية. فريقنا المهني يتعامل بحرفية مع كل مشروع، مما يضمن التركيب السلس والفعال للمنتجات الألمنيوم`
        }
    ]

    const data2 = [
        {
            img: right,
            h1 : "زجاج استركشر" , 
            p: `لمسة فنية للمساحات
            تقدم تقنية الزجاج استركشر لمسة فنية للمساحات الداخلية والخارجية، مع تأثيرات ضوء مذهلة وتصميمات مبتكرة ,  شفافية وأناقة
            تمتع بشفافية وأناقة متفوقة مع نوافذ وواجهات زجاجية فريدة. تصاميم تجمع بين الجمال والأداء العالي , حماية وراحة
            نقدم حلول زجاجية توفر الأمان والعزل الحراري، مع التركيز على جمالية المظهر وكفاءة الطاقة`
        }
    ]

    return (
        <Box className = "welcome door">
            <title>ابواب حديد و الومنيوم  و شبابيك</title>


            <LeftAndRight data={data} data2={data2} />
            <Footer/>




            
        </Box>
    );
}

export default Doors;
