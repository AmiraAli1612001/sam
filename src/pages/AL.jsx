import React from 'react';
import { Box } from '@mui/material';
import LeftAndRight from '../components/LeftAndRight';
import left from "../images/7_OMAA_053.jpg"
import right from "../images/3_OMAA_059.jpg"
import Footer from '../components/footer';



const AL = () => {
    const data = [
        {
            img: left,
            h1 : "الواجهات الزجاجية" , 
            p: `تحفة معمارية تجمع بين الأناقة والأداء
            تعتبر الواجهات الزجاجية منتجًا فريدًا يعكس الجمال والتطور في التصميم المعماري. تقدم مؤسستنا الواجهات الزجاجية بتصميمات مبتكرة لتحويل المباني إلى أعمال فنية تعكس الأناقة والتميز.
            `
        }
    ]

    const data2 = [
        {
            img: right,
            h1 : "تصميمات فريدة" , 
            p: `تأتي الواجهات الزجاجية بتصميمات معمارية فريدة تلبي متطلبات العصر وتضفي جاذبية استثنائية , يتم استخدام زجاج عازل عالي الجودة لضمان عزل حراري وصوتي فعّال`
        }
    ]

    return (
        <Box className = "welcome al">
            <title>واجهة زجاجية والومنيوم</title>
    
                <LeftAndRight data={data} data2={data2}/>
                <Footer/>
            

               {/* <LeftAndRight /> */}
 {/*  */}

            {/* <LeftAndRight data={data2} className="bottom"/>             */}
        </Box>
    );
}

export default AL;
