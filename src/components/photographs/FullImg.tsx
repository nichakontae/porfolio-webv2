import { Modal, Box, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import { PhotoListType } from "../../types/photo";

interface FullImgProps {
  handleClose: Function;
  open: boolean;
  data: PhotoListType | undefined;
}

const FullImg: FC<FullImgProps> = ({ open, handleClose, data }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    // bgcolor: "background.paper",
    // border: "2px solid #000",
    // boxShadow: 24,
    // p: 4,
  };
  return (
    <Modal open={open} onClose={() => handleClose()}>
      <Box sx={style}>
        <img
          src={data?.img}
          alt={data?.title}
          style={{
            maxWidth: "100%",
            maxHeight: "calc(100vh - 120px)",
            margin: "auto",
            display: "block",
            transform: isLargeScreen ? "scale(1.1)" : "scale(1.5)",
          }}
        />
      </Box>
    </Modal>
  );
};

export default FullImg;
