import Heading from "./Heading";
import "../../styles/home.css";
import { PreviewPhoto } from "../../resources/preview_photo";
import { PreviewPhotoType } from "../../types/home";

const PreviewPhotoSection = () => {
  const data: PreviewPhotoType[] = PreviewPhoto;
  return (
    <>
      <Heading
        topic="Photographer."
        head="Interesting Photographs"
        desc="A collection of my recent photographs that I absolutely adore, and I believe you'll find them interesting too."
      />

      <div className="slider">
        <div className="slide-track">
          {data.map((item, index) => (
            <div className="slide" key={index}>
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PreviewPhotoSection;
