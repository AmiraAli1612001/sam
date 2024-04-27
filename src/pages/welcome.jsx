import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import "../css/style.css";

import Al from "../images/al.webp";
import LeftAndRight from "../components/LeftAndRight";
import Footer from "../components/footer";
import Owl from "../components/owl";
const Welcome = () => {
  const data = [
    {
      img: Al,
      h1: "اهلا وسهلا بكم في مصنع سمافكو (smafco)",
      p: `يقوم مصنع سمافكو الواجهــــــــــات الذكية بتلبية جمع متطلبات
        التصاميم الهندسية لـــــكل مشـــــــــروع بمساندة القسم الهندسي الذي
        تم تزويده بكـــــــــــــــــــــامل أدوات التصميم الحـــــديثة
        والكـــــــــــــوادر الفـــــــــنية كما بقوم القسم
        الهـــــــــــــــــــندسي بأعداد المخـــــــــططات التي تحتوي
        علـــــى المساقط العامة والتصاميم التنفيذية وأخيرا يقوم بحساب
        الكميات التي ترسل لقسم المشتريات للقيام بدوره ولقسم الإنتاج للبدء في
        التنفيذ ولقسم المبيعات لحســـــــــــاب تكلفة العملية ولقسم التفتيش
        لمراقبة الجودة .`,
    },
  ];
  return (
    <Box className="welcome">
      <title>ترحيب</title>
      <LeftAndRight data={data}></LeftAndRight>
      <Footer/>

    </Box>

  );
};

export default Welcome;
