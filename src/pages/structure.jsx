import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import img from "../images/screen.jpg";
import PersonIcon from '@mui/icons-material/Person';
import Footer from "../components/footer";
import Owl from "../components/owl";

const Structure = () => {
  return (
    <Box className="welcome structure">
            <title>الهيكل الوظيفي  </title>

      <Grid container className="container">
        {/* <Grid item  xs={11} md={5}> */}
          {/* <Box className="layer"></Box>
          <CardMedia component="img" image={img} className="image" />
        </Grid> */}
        <Grid item xs={11} md={11} className="struct">
            <h1>الهيكل الوظيفي</h1>

            <Box className="persons">

                <Box className="top">
                <Box className="person">
                        <PersonIcon/>
                        <p>المدير الفني</p>
                </Box>
                </Box>
                <Box className="left-right">
                <Box className="person">
                        <PersonIcon/>
                        <p>مهندس انتاج </p>
                </Box>
                <Box className="person">
                        <PersonIcon/>
                        <p>فني  انتاج</p>
                </Box>
                </Box>


                <Box className="left-right">
                <Box className="person sub" >
                        <PersonIcon/>
                        <p> مهندس تصميم</p>
                </Box>
                <Box className="person">
                        <PersonIcon/>
                        <p> عامل</p>
                </Box>
                </Box>


                <Box className="left-right">
                <Box className="person">
                        <PersonIcon/>
                        <p> مبيعات</p>
                </Box>
                <Box className="person">
                        <PersonIcon/>
                        <p> حسابات</p>
                </Box>
                </Box>

            </Box>

        </Grid>
      </Grid>

      <Footer/>

    </Box>
  );
};

export default Structure;
