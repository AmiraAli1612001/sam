import { Box, CardMedia } from "@mui/material";
import React from "react";
import img from "../images/background.webp";
import "../css/style.css";
import Header from "../components/header";
const Index = () => {
  return (
    <Box className="index">

      <title>الصفحة الرئيسية</title>

      <Box className="img">
        <CardMedia component="img" image={img} />
      </Box>

      <Box className="layer">
        <Box className="border">
          <p className="big">مصنع</p>
          <p className="h1">سمافكو</p>
        </Box>
        <p className="bold"> WWW.SMAFCO.NET</p>
      </Box>
      
    </Box>
  );
};

export default Index;
