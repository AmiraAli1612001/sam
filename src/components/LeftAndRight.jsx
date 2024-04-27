import { Box, CardMedia, Grid } from "@mui/material";
import React from "react";

const LeftAndRight = (props) => {
  return (
    <Box className="left-right">
      <Box sx={{width :"100vw"}}>
        {props.data.map((item) => {
          return (
            <Grid container className="container" sx={{width :"100vw"}}>
              <Grid item xs={12} lg={6} className="item">
                <Box className="layer"></Box>
                <CardMedia component="img" image={item.img} />
              </Grid>
              <Grid item xs={12} lg={6} className="item right">
                <h1>{item.h1}</h1>
                <p>{item.p}</p>
              </Grid>
            </Grid>
          );
        })}
      </Box>
      {props.data2 ? (
        <Box>
          {props.data2.map((item) => {
            return (
              <Grid
                container
                className="container"
                sx={{ flexDirection: "row-reverse" }}
              >
                <Grid item xs={12} lg={6} className="item">
                  <Box className="layer"></Box>
                  <CardMedia component="img" image={item.img} />
                </Grid>
                <Grid item xs={11} lg={6} className="item right">
                  <h1>{item.h1}</h1>
                  <p>{item.p}</p>
                </Grid>
              </Grid>
            );
          })}
        </Box>
      ) : undefined}
    </Box>
  );
};

export default LeftAndRight;
