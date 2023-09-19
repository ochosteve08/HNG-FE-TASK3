import ImageCard from "../Components/ImageCard";
import GalleryList from "../Data";
import { useState, useCallback } from "react";

const Home = () => {
  const [images, setImages] = useState(GalleryList);

  const moveImage = useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];

      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  }, []);

  console.log(images);
  return (
    <main>
      {images.map((image, index) => (
        <ImageCard
          key={image.id}
          src={image.img}
          title={image.title}
          id={image.id}
          index={index}
          moveImage={moveImage}
        />
      ))}
    </main>
  );
};

export default Home;
