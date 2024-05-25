import { TextField } from "@mui/material";
import React from "react";

interface Props {
  label: string;
}
export const InputText: React.FC<Props> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <TextField {...props} sx={{ height: "70px" }} />
    </div>
  );
};
