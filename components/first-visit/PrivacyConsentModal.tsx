import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleAgree: (agreed: boolean) => void;
};
export default function PrivacyConsentModal({ open, setOpen, handleAgree }: Props) {
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
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          개인정보 제공 동의 약관
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <p>
              {`안녕하세요, 고객님. 

                본 약관은 개인정보보호법에 따라, 고객님의 개인정보 수집 및 활용에 대한 동의를 받기 위해 작성되었습니다. 아래의 사항을 충분히 숙지하시고, 동의 여부를 결정해 주시기 바랍니다. 

                1. 개인정보 수집 목적 및 이용 범위 
                    - 수집 목적: 환자의 문진표 작성 및 PDF 출력
                    - 이용 범위: 문진표는 환자가 직접 의사에게 전달하며, 이를 위해 환자의 이름, 나이, 성별, 증상 등의 정보를 수집합니다. 
                2. 수집하는 개인정보 항목 
                    - 환자의 이름 
                    - 환자의 나이 
                    - 환자의 성별 
                    - 환자의 증상 
                3. 개인정보 보유 및 이용 기간 
                    - 환자의 문진표는 PDF 출력 목적에 한해 수집되며, 출력 후에는 개인정보가 저장되지 않습니다. 
                4. 개인정보의 제3자 제공 
                    - 수집된 정보는 환자가 직접 의사에게 전달하는 용도로만 사용되며, 제3자에게 제공되지 않습니다. 
                5. 동의 거부권 및 불이익 고지 
                    - 귀하는 개인정보 제공에 대해 동의하지 않을 권리가 있으며, 동의하지 않는 경우에는 문진표 작성을 통한 PDF 출력을 진행할 수 없습니다. 
                
                본 동의서를 충분히 읽어보시고, 개인정보 제공에 대해 동의하신다면 아래의 동의 버틀을 클릭해 주시기 바랍니다.`}
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="warning">
            동의 안 함
          </Button>
          <Button
            onClick={() => {
              handleAgree(true);
              handleClose();
            }}
            variant="outlined"
          >
            동의
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
