import { Box } from "@mui/material";
import React from "react";

import left from "../images/projects/kitl.webp";
// import right from "../images/kit.webp";
import LeftAndRight from "../components/LeftAndRight";
import Footer from "../components/footer";

const Ktchn = () => {
  const data = [
    {
      img: left,
      h1: "مطابخ  | خزائن | ديكور",
      p: `نحن متخصصون في تحويل المساحات العادية إلى تحف فنية قابلة للعيش، حيث يمزج فريقنا من المصممين المبدعين والحرفيين الماهرين بين الأساليب الكلاسيكية والمعاصرة لخلق بيئات داخلية تعبر عن ذوق وشخصية كل عميل. من المطابخ العصرية بخطوطها النظيفة وتصميماتها المبتكرة إلى الديكورات الخشبية الأنيقة التي تضفي دفئًا وجمالًا على المساحات، نضمن تحقيق أعلى مستويات الجودة والرضا.`,
    },
  ];


  return (
    <Box className="welcome kit">
      <title>مطابخ الومنيوم</title>
      <LeftAndRight data={data}    />
      <Footer/>
    </Box>
  );
};

export default Ktchn;
