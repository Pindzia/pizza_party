import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import MuiAlert from "@mui/material/Alert";
import { uiActions } from "../../../store/ui-slice";
import { RootState } from "../../../store";
import NoteModel from "../../../models/ui/notification";

type Props = {};

const NotificationSnackbar = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const lastNotification = useSelector<RootState, NoteModel | null>(
    (state: RootState) => state.ui.notification
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (lastNotification) setOpen(true);
    return () => {
      setTimeout(() => {
        if (lastNotification) {
          setOpen(false);
          dispatch(uiActions.hideNotification());
        }
      }, 6000);
    };
  }, [lastNotification, dispatch]);
  return (
    <Snackbar
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <MuiAlert
        severity={(lastNotification && lastNotification.type) ?? "info"}
        sx={{ width: "100%" }}
      >
        {lastNotification && lastNotification.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default NotificationSnackbar;
