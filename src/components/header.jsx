import { Box, Grid, CardMedia, Menu } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../images/logo.webp";
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
const Header = () => {
  let [drawer, setDrawer] = useState(false);
  let [drop, dropdown] = useState(false);

  let [hide, show] = useState(false);

  let  [top , setTop] = useState(false)


  function toTop() {

     window.scrollTo({
      top :0
      ,behavior :"smooth"
     })
  }
useEffect(() => {




    
  window.onscroll = function  () {
    if(window.scrollY > 20) {
        setTop(true)
    }
    else {
        setTop(false)


    }
  }
    
} )
  const links = [
    { text: "الصفحة الرئيسية", path: "/" },
    { text: "عنا", path: "#" },
    { text: " ترحيب", path: "/welcome" },
    { text: " تعريف", path: "/definition" },
    { text: " اقسامنا", path: "/departments" },
    { text: " خبرتنا", path: "/types-experience" },
    { text: " واجهات زجاجية والومنيوم", path: "/Al" },
    { text: " ابواب حديد والومنيوم و شبابيك", path: "/doors" },
    { text: " درابزين زجاج واستانلس", path: "/st" },
    { text: "مطابخ الومنيوم", path: "/kitchen" },
    { text: " الهيكل الوظيفي", path: "/structure" },


  ];

  
  return (
    <Box className="header"  sx={{backgroundColor : top ? "white" : "transparent"}}>
      <header>
        <Grid container className="container" sx={{display :"flex" , justifyContent :"space-between" , alignItems :"center" , width :"100vw"}}>
          <Grid item xs={3} sx={{ color: "black", cursor: "pointer"  , display :"flex"   , alignItems :"center" , textAlign :"left" , justifyContent:"center"}}>
            <MenuIcon
            sx={{marginTop:"-20px"}}
              onClick={() => {
                setDrawer(!drawer);
              }}
            />
          </Grid>

          <Box
            className="right"
            sx={{ textAlign: "center", height: drawer ? "100vh" : "0vh" , width :"100vw"}}
          >
            <Close
              sx={{
                position: "absolute",
                zIndex: "2",
                top: "30px",
                right: "30px",
                cursor: "pointer",
              }}
              onClick={() => {
                setDrawer(!drawer);
              }}
            />
            <Link
              to={links[0].path}
              onClick={() => {
                setDrawer(!drawer);
                toTop()
              }}
            >
              {links[0].text}
            </Link>
            {/* <Link
              className="item"
              to={links[1].path}
              onClick={() => {
                show(!hide);
                dropdown(true);
                
              }}
            >

              {links[1].text} 
            </Link> */}
            <Link
                  to={links[2].path}
                  onClick={() => {
                    setDrawer(!drawer);
                    toTop()
                  }}
                >
                  {links[2].text}
                </Link>
                <Link
                  to={links[3].path}
                  onClick={() => {
                    setDrawer(!drawer);
                    toTop()
                  }}
                 
                >
                  {links[3].text}
                </Link>
                <Link
                  to={links[4].path}
                  onClick={() => {
                    setDrawer(!drawer);
                    toTop()
                  }}
                 
                >
                  {links[4].text}
                </Link>
                <Link
                  to={links[5].path}
                  onClick={() => {
                    setDrawer(!drawer);
                    toTop()
                  }}
                 
                >
                  {links[5].text}
                </Link>
                <Link
                  to={links[6].path}
                  onClick={() => {
                    setDrawer(!drawer);
                    toTop()
                  }}
                 
                >
                  {links[6].text}
                </Link>
                <Link
                  to={links[7].path}
                  onClick={() => {
                    setDrawer(!drawer);
                    toTop()
                  }}
                 
                >
                  {links[7].text}
                </Link>
                <Link
                  to={links[8].path}
                  onClick={() => {
                    setDrawer(!drawer);
                    toTop()
                  }}
                 
                >
                  {links[8].text}
                </Link>
      
            <Link
              to={links[9].path}
              onClick={() => {
                setDrawer(!drawer);
                toTop()
              }}
            >
              {links[9].text}
            </Link>
            
            </Box>

          <Grid item xs={6} md={3}>
            <CardMedia component="img" image={logo} />
          </Grid>
        </Grid>
      </header>
    </Box>
  );
};

export default Header;
