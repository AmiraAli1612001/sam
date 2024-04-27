import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import Footer from "../components/footer";

const Department = () => {
  return (
  <div>
      <Box className="department">
        <title>اقسامنا</title>
      <h1>اقسامنا</h1>

        <Box className="row">

          <Grid container className="container">
            <Grid item xs={11} sm={6} md={3} lg={2}>
              <Box className="circle">
                <RoomIcon />
    
                <span>01</span>
              </Box>
    
              {/* <img class="dMHlHA" crossorigin="anonymous" src="blob:https://www.canva.com/a102a6fa-009a-41ff-9ac1-31c825f44a79" draggable="false" alt="."/>           <Box className="circle">01</Box> */}
            </Grid>
            <Grid item xs={11} sm={6} md={3} lg={2}>
              <Box className="circle">
                <RoomIcon />
    
                <span>02</span>
              </Box>
            </Grid>
    
            <Grid item xs={11} sm={6} md={3} lg={2}>
              <Box className="circle">
                <RoomIcon />
    
                <span>03</span>
              </Box>
            </Grid>
    
            <Grid item xs={11} sm={6} md={3} lg={2}>
              <Box className="circle">
                <RoomIcon />
    
                <span>04</span>
              </Box>
            </Grid>
            <Grid item xs={11} sm={6} md={3} lg={2}>
              <Box className="circle">
                <RoomIcon />
    
                <span>05</span>
              </Box>
            </Grid>
          </Grid>
        </Box>
    
        <Box>
          <Grid container className="container">
            <Grid item xs={11} sm={6} md={3} lg={2}>
              <p className="title">القسم الهندسي : </p>
              <p className="text">
                بقوم مصنع الوجهات الذكية بتلبية جمع متطلبات التصاميم الهندسية لكل
                مشروع بمساندة القسم الهندسي الذي تم تزويده بكامل أدوات التصميم
                الحديثة والكوادر الفنية كما بقـــــوم القــــــسم الهندسي بأعداد
                المخططات التــــــي تــــــحتوي على المساقط العامة والتصاميم
                التنفيذية وأخيرا يقوم بحساب الكميات التي ترسل لقسم المشتريات
                للقيام بدوره ولقسم الإنتاج للبدء في التنفيذ ولقسم المبيعات لحساب
                تكلفة العملية .
              </p>
            </Grid>
            <Grid item xs={11} sm={6} md={3} lg={2}>
              <p className="title">قسم الانتاج : </p>
              <p className="text">
                يتسلم أوامر التشغيل من القسم الهندسي بكل التفاصيل الدقيقة ويتم
                التنفيذ طبقا للمواصفات العالمية لصناعة الالمنيوم باستخدام أحدث
                المعدات وأفضل الخامات بيد مجموعة من الفنيين المهرة تحت اشراف مدير
                الإنتاج .{" "}
              </p>
            </Grid>
            <Grid item xs={11} sm={6} md={3} lg={2}>
              <p className="title">قسم التركيبات</p>
              <p className="text">
                يتم التركيب حسب المخططات المنفذة من القسم الهندسي من قبل مجموعات
                من الفنيين ذوي الكفاءة العالية وباستخدام المواد المطابقة للمواصفات
                العالمية التي تضمن ثبات المنتج أطول فترة ممكنة تحت اشراف مهندسين
                لهم خبرة كبيرة في هذا المجال .
              </p>
            </Grid>
            <Grid item xs={11} sm={6} md={3} lg={2}>
              <p className="title">قسم المبيعات والتسويق</p>
              <p className="text">
                يقوم بتحديد الأهداف والرؤية والرسالة الاستراتيجية للمصنع وتحليل
                البيئة التنظيمية الداخلية والخارجية للتعرف على مواطن القوة والضعف
                والفرص والتهديدات في إدارة التسويق والمبيعات , ومسئول عن إعداد
                ووضع الخطط التسويقية والبيعية وتنظيم النشاط البيعي والرقابة
                والتقويم للأنشطة البيعية والتسويقية{" "}
              </p>
            </Grid>
            <Grid item xs={11} sm={6} md={3} lg={2}>
              <p className="title">قسم التفتيش ومراقبة الجودة:</p>
              <p className="text">
                يتابع هذا القسم جميع مراحل الإنتاج بداية من المشتريات لضمان
                استخدام أجود أنواع الاكسسوارات وكذلك مرحلة التخزين حيث يراقب طريقة
                التخزين لتظل الخامات محتفظة بجودتها طوال مدة تخزينها ثم يتابع طرية
                إخراجها من المستودع والتعامل معاها في صالات الإنتاج لضمان عدم خدش
                أي جزء من المواد ثم يتابع طريقة تغليف وتخزين المنتجات الجاهزة
                للتركيب بعد الانتهاء من تجميعها استعدادا لنقلها لموقع التركيب .{" "}
              </p>
            </Grid>
          </Grid>
        </Box>
    
    
      </Box>
      <Footer/>
  </div>
  );
};

export default Department;
