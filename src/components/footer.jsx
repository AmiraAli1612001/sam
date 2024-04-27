import { Box, Grid } from '@mui/material';
import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
    const data = [
        {icon : <LocationOnIcon/> , text :"المملكة العربية السعودية - الرياض مبنى الادارة شارع الوشم - مجمع المربع المصنع السلي - حي المشاغل"},
        {icon : <LanguageIcon/> , text : " www.smafco.net"},
        {icon : <EmailIcon/> , text : " sasmafco@gmail.com"},
        {icon : <InstagramIcon/> , text :  " smafco11"},
        {icon : <FacebookIcon/> , text :" Smafco Sa"},
        {icon : <XIcon/>, text : " @smafco"},
        {icon : <LinkedInIcon/> , text : " Smafco SA"},
        {icon : <FaTiktok/> , text  : " smafco11"},


    ]
    return (
     <Box className="footer" >
        <Grid container className='footercon'>

                {
                    data.map((item)=> {
                        return(
            <Grid item xs={11} md ={5}>

                           
                                <Box sx={{display :"flex" , alignItems :"center"}}><span style={{margin :"10px 5px"}}>{item.icon}</span> <span style={{display :"flex" , alignItems :"center"}}>{item.text}</span> </Box>
                       
            </Grid>

                        )
                    })
                }


        </Grid>

     </Box>
    );
}

export default Footer;
