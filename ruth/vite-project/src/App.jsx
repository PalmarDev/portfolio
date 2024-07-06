import { useState } from "react";
import ImageGallery from "react-image-gallery";
import { FaHeart } from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";
import "./App.css";
import * as fotos from "./assets/js/fotos.js";

const photos = [
  { original: fotos.fotos1, thumbnail: fotos.fotos1, alt: "Foto 1" },
  { original: fotos.fotos2, thumbnail: fotos.fotos2, alt: "Foto 2" },
  { original: fotos.fotos3, thumbnail: fotos.fotos3, alt: "Foto 3" },
  { original: fotos.fotos4, thumbnail: fotos.fotos4, alt: "Foto 4" },
  { original: fotos.fotos5, thumbnail: fotos.fotos5, alt: "Foto 5" },
  { original: fotos.fotos6, thumbnail: fotos.fotos6, alt: "Foto 6" },
  { original: fotos.fotos7, thumbnail: fotos.fotos7, alt: "Foto 7" },
  { original: fotos.fotos8, thumbnail: fotos.fotos8, alt: "Foto 8" },
  { original: fotos.fotos9, thumbnail: fotos.fotos9, alt: "Foto 9" },
  { original: fotos.fotos10, thumbnail: fotos.fotos10, alt: "Foto 10" },
  { original: fotos.fotos11, thumbnail: fotos.fotos11, alt: "Foto 11" },
  { original: fotos.fotos12, thumbnail: fotos.fotos12, alt: "Foto 12" },
  { original: fotos.fotos13, thumbnail: fotos.fotos13, alt: "Foto 13" },
  { original: fotos.fotos14, thumbnail: fotos.fotos14, alt: "Foto 14" },
  { original: fotos.fotos15, thumbnail: fotos.fotos15, alt: "Foto 15" },
  { original: fotos.fotos16, thumbnail: fotos.fotos16, alt: "Foto 16" },
  { original: fotos.fotos17, thumbnail: fotos.fotos17, alt: "Foto 17" },
  { original: fotos.fotos18, thumbnail: fotos.fotos18, alt: "Foto 18" },
  { original: fotos.fotos19, thumbnail: fotos.fotos19, alt: "Foto 19" },
  { original: fotos.fotos20, thumbnail: fotos.fotos20, alt: "Foto 20" },
  { original: fotos.fotos21, thumbnail: fotos.fotos21, alt: "Foto 21" },
  { original: fotos.fotos22, thumbnail: fotos.fotos22, alt: "Foto 22" },
  { original: fotos.fotos23, thumbnail: fotos.fotos23, alt: "Foto 23" },
  { original: fotos.fotos24, thumbnail: fotos.fotos24, alt: "Foto 24" },
  { original: fotos.fotos25, thumbnail: fotos.fotos25, alt: "Foto 25" },
  { original: fotos.fotos26, thumbnail: fotos.fotos26, alt: "Foto 26" },
  { original: fotos.fotos27, thumbnail: fotos.fotos27, alt: "Foto 27" },
  { original: fotos.fotos28, thumbnail: fotos.fotos28, alt: "Foto 28" },
  { original: fotos.fotos29, thumbnail: fotos.fotos29, alt: "Foto 29" },
  { original: fotos.fotos30, thumbnail: fotos.fotos30, alt: "Foto 30" },
  { original: fotos.fotos31, thumbnail: fotos.fotos31, alt: "Foto 31" },
  { original: fotos.fotos32, thumbnail: fotos.fotos32, alt: "Foto 32" },
  { original: fotos.fotos33, thumbnail: fotos.fotos33, alt: "Foto 33" },
  { original: fotos.fotos34, thumbnail: fotos.fotos34, alt: "Foto 34" },
  { original: fotos.fotos35, thumbnail: fotos.fotos35, alt: "Foto 35" },
  { original: fotos.fotos36, thumbnail: fotos.fotos36, alt: "Foto 36" },
  { original: fotos.fotos37, thumbnail: fotos.fotos37, alt: "Foto 37" },
  { original: fotos.fotos38, thumbnail: fotos.fotos38, alt: "Foto 38" },
];

function App() {
  const [heartVisible, setHeartVisible] = useState(false);

  const handleSlide = () => {
    setHeartVisible(true);
    setTimeout(() => {
      setHeartVisible(false);
    }, 3000); // Mostrar el corazón por 1 segundo
  };

  return (
    <div className='App'>
      <div className='content-title'>
        <h1 className='title'>
          Mi Amor por ti es inmenso y tengo la dicha de que eres mi esposa y lo seguiras
          siendo hasta llegar a viejos
        </h1>
      </div>
      <div className='heart-overlay' style={{ opacity: heartVisible ? 1 : 0 }}>
        <FaHeart color='red' size='3em' />
      </div>
      <ImageGallery
        items={photos}
        showPlayButton={false}
        showFullscreenButton={false}
        showIndex={true}
        showBullets={true}
        onSlide={handleSlide}
        useBrowserFullscreen={false}
        slideDuration={1000}
        slideInterval={3000}
        showThumbnails={false}
      />
    </div>
  );
}

export default App;
