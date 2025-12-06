import { useState } from "react";
import one from "../img/001.png";
import two from "../img/002.png";
import three from "../img/003.png";
import four from "../img/004.png";
import five from "../img/005.png";
import six from "../img/006.jpg";

import ImageModal from "../components/ui/imageModal";
import GalleryItem from "../components/ui/galleryItem";

const photos = [
  { src: one, caption: "Momento especial 1" },
  { src: two, caption: "Momento especial 2" },
  { src: three, caption: "Momento especial 3" },
  { src: four, caption: "Momento especial 4" },
  { src: five, caption: "Momento especial 5" },
  { src: six, caption: "Momento especial 6" },
];

const GaleriaPage = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (photo) => {
    const index = photos.indexOf(photo);
    setCurrentIndex(index);
  };

  const closeModal = () => setCurrentIndex(null);

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === photos.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="section-title text-center">Galeria de Momentos</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Algumas fotos que contam um pouco da minha história
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <GalleryItem
              key={index}
              photo={photo}
              onClick={openModal}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ImageModal
        photo={currentIndex !== null ? photos[currentIndex] : null}
        onClose={closeModal}
        onPrev={showPrev}
        onNext={showNext}
      />
    </main>
  );
};

export default GaleriaPage;
