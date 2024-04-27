import { Box } from '@mui/material';
import React from 'react';

import en from "../images/engineer.webp"
import LeftAndRight from '../components/LeftAndRight';
import Header from '../components/header';
import Footer from '../components/footer';

const Define = () => {

    const data = [
        {img : en, h1 :"تعريف المصنع" , p : `متخصص لتصنيع نوعيات متخصصة جدا لجميع انواع الالومنيوم من جدران زجاجية وشبابيك وابواب سحابات و مفصلات بجميع انواعها و ابواب سحابة و ستائر خارجية واقية  من العوامل الخارجية وعلى ان يكون المنتج مطابقا  لاعلى المواصفات العالمية` }
    ]


    return (
   <Box className="define welcome">
    <title>تعريف المصنع</title>

     <LeftAndRight data= {data}/>
     <Footer/>

   </Box>
    );
}

export default Define;
