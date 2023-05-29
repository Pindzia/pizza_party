import { Box, Container, Typography, Link, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{ bgcolor: "background.paper", p: 2 }}
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
          sx={{ mt: 2.2 }}
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
};

export default Footer;
