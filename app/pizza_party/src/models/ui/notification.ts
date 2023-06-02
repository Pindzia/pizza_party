import { AlertColor } from "@mui/material/Alert";

type NoteModel = {
  fromWhere: string;
  title: string;
  message: string;
  type: AlertColor | null | undefined;
};

export default NoteModel;
