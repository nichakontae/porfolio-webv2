import { ImageList, ImageListItem } from "@mui/material";
import { PhotoList } from "../../resources/photolist";
import { useState } from "react";
import FullImg from "./FullImg";
import { PhotoListType } from "../../types/photo";
import WavyLine from "../utils/WavyLine";

const Photographs = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<PhotoListType>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onImgClick = (select: PhotoListType) => setSelectedImg(select);

  return (
    <>
      <WavyLine />
      <ImageList sx={{ width: "100%" }} cols={3} gap={3} variant="masonry">
        {PhotoList.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              onClick={() => {
                onImgClick(item);
                handleOpen();
              }}
            />
          </ImageListItem>
        ))}
        <FullImg handleClose={handleClose} open={open} data={selectedImg} />
      </ImageList>
    </>
  );
};

export default Photographs;
