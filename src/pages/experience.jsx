import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import img from "../images/square.webp";
import Owl from "../components/owl";
import Footer from "../components/footer";

const Experience = () => {
  return (
 <Box>
       <Box className="ex">
        <title>خبرتنا</title>
         <Grid container className="container">
           <Grid item xs={11} sm={10} md={2}>
             <h1>الأنــــــــــــواع</h1>
             <ul>
               <li>واجــــهـــــــات زجاجــيـــــــة </li>
               <li>واجـــــــهــــات المــنيــــــوم</li>
               <li>شبــابــيـــــك المـــــــنيــــوم</li>
               <li>أبـــــــواب حديــد والمنيـــــوم</li>
               <li>درابزين زجـــاج وستـــالـــــــــس </li>
               <li>مــــطــــــابـــخ المـــنـــيــوم</li>
             </ul>
           </Grid>
    
           <Grid item xs={11} sm={10} md={2}>
             <h1>خبرتنا</h1>
             <p>
               ويـــكــــون المصــنع متخصص لتــــصنيع نوعيات متخصصة جدا لجميع أنواع
               إعمال الألمنيوم من جدران زجاجيـــة وشبابيك وأبواب ســحــابات
               ومــفصلات بجــميع أنــواعها وأبواب سحابة وستائــر خـــارجيـــة
               واقيـــة مــــــــن الــعــــــــوامـــل الجويـــــة.
             </p>
           </Grid>
         </Grid>
    
         <Box className="d-con">
           <Box className="dashed">
             <Box className="img left">
               <CardMedia component="img" image={img} />
             </Box>
    
             <Box className="img right">
               <CardMedia component="img" image={img} />
             </Box>
           </Box>
         </Box>
         <Box sx={{ width: "90vw" }}>
           <Owl />
         </Box>
         
       </Box>
         <Footer/>
 </Box>

  );
};

export default Experience;
