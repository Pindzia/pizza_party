import { Typography } from "@mui/material";

const Error = () => {
  return (
    <div>
      <Typography
        variant="h1"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        There is no pizza that you looking for...
      </Typography>
    </div>
  );
};

export default Error;
