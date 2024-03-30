import { useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const OrderDialog = (props: { open: boolean; onClose: () => void }) => {
  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (props.open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [props.open]);

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      scroll="paper"
      aria-labelledby="order-dialog-title"
      aria-describedby="order-dialog-description"
      fullWidth={true}
    >
      <DialogActions>
        <Button onClick={props.onClose}>Edit</Button>
      </DialogActions>
      <DialogTitle id="order-dialog-title">Order</DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          Order 就是醫囑，醫囑就是 Order。
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
