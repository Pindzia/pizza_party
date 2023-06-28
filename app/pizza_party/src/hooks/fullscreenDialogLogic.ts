import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const useFullscreenDialogLogic = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return { fullScreen };
};

export default useFullscreenDialogLogic;
