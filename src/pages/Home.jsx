import ImageCard from "../Components/ImageCard";
import GalleryList from "../Data";
import { useState, useCallback } from "react";
import ImageSearch from "../Components/ImageSearch";

const Home = () => {
  const [images, setImages] = useState(GalleryList);
  const [filteredImages, setFilteredImages] = useState(GalleryList);

  const moveImage = useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];

      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const filtered = images.filter((image) =>
        image?.tags.some((tag) => tag.toLowerCase().includes(term))
      );
      setFilteredImages(filtered);
    } else {
      setFilteredImages(images);
    }
  };

  console.log(images);
  return (
    <main>
      <ImageSearch onSearch={handleSearch} />
      {filteredImages.map((image, index) => (
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
