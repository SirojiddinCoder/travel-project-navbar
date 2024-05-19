import React, { useState } from "react";
import Logo from '../assets/img/logo.svg'

import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
   
    },
    {
      text: "About",
   
    },
    {
      text: "Tours",
    
    },
    {
      text: "Contacts",
     
    },
    {
      text: "UZ",
   
    },
    {
      text: "ENG",
  
    },
    {
      text: "RU",
     
    },
    {
     
      text: <FaTelegramPlane />,
    },
    {
      text: <AiOutlineInstagram />,
    },
    
  ];
  return (
    
    <div className="navbar-header">
      <nav>
    <div className="nav-logo-container">
      <img src={Logo} alt="" />
    </div>
    <div className="navbar-links-container">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#Tours">Tours</a>
      <a href="#contact">Contacts</a>
    

  
    </div>
    <div className="navbar-icons-container">
      <a href="#">UZ</a>
      <a href="#">ENG</a>
      <a href="#">RU</a>

      <a className="telegramIcon" href="#">

<FaTelegramPlane />
</a>
    <a className="instagramIcon" href="#">
    
    <AiOutlineInstagram />
  </a>
 
    </div>

    <div className="navbar-menu-container">
      <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>

    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
      >
        <List>
          {menuOptions.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  </nav>

    </div>
  )
}
