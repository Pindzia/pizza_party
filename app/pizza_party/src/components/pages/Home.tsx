import { Box, Grow, Icon, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const Home = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setChecked(true);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grow
        in={checked}
        style={{ transformOrigin: "0 50 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".2rem",
            mt: 10,
          }}
        >
          Pizza Party ©
        </Typography>
      </Grow>
      <Grow
        in={checked}
        style={{ transformOrigin: "0 50 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <Icon sx={{ width: "100px", height: "100px", mt: 10 }}>
          <img src="/src/assets/pizza_logo.png" alt="pizza icon" />
        </Icon>
      </Grow>
    </Box>
  );
};

export default Home;
