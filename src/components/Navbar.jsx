import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

export default function Navbar() {
  const pages = [
    "Home",
    "About me",
    "Services provided",
    "Blogs",
    "Testimonials and Cases",
    "Appointment",
    "Gallery",
    "Contact",
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "black" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dr. Sherebanu M. Milky
          </Typography>
          {pages.map((page) => (
            <MenuItem key={page}>
              <a href="#text-as" style={{ color: "white" }}>
                {page}
              </a>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
