import React, { Component } from "react";
import { Box, Container, Typography, Link, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type Props = Record<string, never>;

type State = Record<string, never>;

class Footer extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Box
        sx={{ bgcolor: "background.paper", p: 4 }}
        component="footer"
        bottom={0}
        position="fixed"
        alignContent={"center"}
        width={"100%"}
      >
        <Divider />
        <Container maxWidth="sm">
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 3 }}
          >
            {"Copyright © "}
            <Link color="inherit" component={RouterLink} to="/">
              Pizza Party
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </Box>
    );
  }
}

export default Footer;
