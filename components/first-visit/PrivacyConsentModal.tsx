import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LangContents } from "@/lang/lang";
import { Divider, Typography } from "@mui/material";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleAgree: (agreed: boolean) => void;
  lang: keyof typeof LangContents;
};
export default function PrivacyConsentModal({
  open,
  setOpen,
  handleAgree,
  lang,
}: Props) {
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Dialog
        // fullScreen={true}
        fullWidth={true}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="scroll-dialog-title">
          {LangContents[lang].privacy[0]}
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Typography variant="body1">
              {LangContents[lang].privacy[1][0]}
            </Typography>
            <br></br>
            <Typography variant="body1">
              {LangContents[lang].privacy[1][1]}
            </Typography>

            <Divider sx={{ m: 1 }} />

            <Typography variant="body1">
              {LangContents[lang].privacy[2][0]}
            </Typography>
            <Typography variant="body2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;
              {LangContents[lang].privacy[2][1][0]}
            </Typography>
            <Typography variant="body2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;
              {LangContents[lang].privacy[2][1][1]}
            </Typography>

            <Divider sx={{ m: 1 }} />

            <Typography variant="body1">
              {LangContents[lang].privacy[3][0]}
            </Typography>
            <Typography variant="body2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;
              {LangContents[lang].privacy[3][1][0]}
            </Typography>
            <Typography variant="body2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;
              {LangContents[lang].privacy[3][1][1]}
            </Typography>
            <Typography variant="body2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;
              {LangContents[lang].privacy[3][1][2]}
            </Typography>
            <Typography variant="body2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;
              {LangContents[lang].privacy[3][1][3]}
            </Typography>

            <Divider sx={{ m: 1 }} />

            <Typography variant="body1">
              {LangContents[lang].privacy[4][0]}
            </Typography>
            <Typography variant="body2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;
              {LangContents[lang].privacy[4][1]}
            </Typography>

            <Divider sx={{ m: 1 }} />

            <Typography variant="body1">
              {LangContents[lang].privacy[5][0]}
            </Typography>
            <Typography variant="body2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;
              {LangContents[lang].privacy[5][1]}
            </Typography>

            <Divider sx={{ m: 1 }} />

            <Typography variant="body1">
              {LangContents[lang].privacy[6][0]}
            </Typography>
            <Typography variant="body2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;
              {LangContents[lang].privacy[6][1]}
            </Typography>

            <Divider sx={{ m: 1 }} />

            <Typography variant="body1">
              {LangContents[lang].privacy[7]}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="warning">
            {LangContents[lang].agree[1]}
          </Button>
          <Button
            onClick={() => {
              handleAgree(true);
              handleClose();
            }}
            variant="outlined"
          >
            {LangContents[lang].agree[0]}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
