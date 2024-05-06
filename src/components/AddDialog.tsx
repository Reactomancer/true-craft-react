import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";

interface DialogProps {
  open: boolean;
  onClose: MouseEventHandler;
  children: ReactNode;
}

const AddDialog: React.FC<DialogProps> = ({
  open,
  onClose: handleClose,
  children,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className="text-white"
      maxWidth="lg"
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#5F5757",
        },
      }}
      fullWidth={true}
      scroll="paper"
    >
      <DialogTitle sx={{ color: "white" }}>Add New Product</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default AddDialog;
