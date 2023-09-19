import ImageCard from "../Components/ImageCard";
import GalleryList from "../Data";
import { useState } from "react";

const Home = () => {
  const [images, setImages] = useState(GalleryList);
  console.log(images);
  return (
    <main>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          src={image.img}
          title={image.title}
          id={image.id}
        />
      ))}
    </main>
  );
};

export default Home;
