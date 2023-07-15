import Heading from "./Heading";
import "../../styles/home.css";
import { PhotoListType } from "../../types/photo";
import { useState } from "react";
import { PhotoList } from "../../resources/photolist";
import FullImg from "../photographs/FullImg";

const PreviewPhotoSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<PhotoListType>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onImgClick = (select: PhotoListType) => setSelectedImg(select);

  return (
    <div id="photo">
      <Heading
        topic="Photographer."
        head="Interesting Photographs"
        desc="A collection of my recent photographs that I absolutely adore, and I believe you'll find them interesting too."
      />
      {/* อย่าลืมเปลี่ยน logic ในการดึงภาพมาโชว์หน้า home  */}
      <div className="slider">
        <div className="slide-track">
          {PhotoList.map((item, index) => (
            <div className="slide" key={index}>
              <img
                src={item.img}
                alt={item.title}
                onClick={() => {
                  onImgClick(item);
                  handleOpen();
                }}
              />
            </div>
          ))}
          <FullImg handleClose={handleClose} open={open} data={selectedImg} />
        </div>
      </div>
    </div>
  );
};

export default PreviewPhotoSection;
