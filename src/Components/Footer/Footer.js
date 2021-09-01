import React from "react";
import "./Footer.css";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2021 Movies App, all rights are reserved
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Footer;
