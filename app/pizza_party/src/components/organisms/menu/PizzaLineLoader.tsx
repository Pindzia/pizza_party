import { Box, Skeleton } from "@mui/material";

type Props = {
  skeletonCount?: number;
};

const PizzaLineLoader = (props: Props = { skeletonCount: 1 }) => {
  const amountOfElement = Array.from(Array(props.skeletonCount).keys());

  return (
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
      {amountOfElement.length === 1 && (
        <Skeleton variant="text" width="100%" sx={{ m: 2 }} />
      )}
      {amountOfElement.length > 1 &&
        amountOfElement.map((element) => (
          <Skeleton
            key={element}
            variant="text"
            sx={{ maxWidth: 1 / amountOfElement.length, width: "100%", m: 2 }}
          />
        ))}
    </Box>
  );
};

export default PizzaLineLoader;
