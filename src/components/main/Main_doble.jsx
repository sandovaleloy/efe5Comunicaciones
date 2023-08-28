import React, { useState } from "react";
import "./styles/Main_doble.css";
// import Main from "./Main";

const Main_doble = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="container_iframeYoutube">
      <div className="container_iframeYoutube_iframe">
        <iframe
          className="iframe_youtube"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100093630360338%2Fvideos%2F1013578406731244%2F&show_text=false&width=560&t=0"
          // scrolling="no"
        ></iframe>
        <p className="container_iframeYoutube_p">
          Juanse Solano & Danny Orozco nos cuentan en Entrevistas EFE 5 de su
          nuevo proyecto musical.
        </p>
      </div>
      <div className="container_iframeYoutube_iframe">
        <iframe
          className="iframe_youtube"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100093630360338%2Fvideos%2F1310997323187644%2F&show_text=false&width=560&t=0"
          // scrolling="no"
        ></iframe>
        <p className="container_iframeYoutube_p">
          JUANCHO DE LA ESPRIELLA estuvo en el lente de Entrevistas EFE 5,
          quedate y conoce un poco de su vida y trayectoria musical.
        </p>
      </div>
      <div className="container_iframeYoutube_iframe">
        <iframe
          className="iframe_youtube"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100093630360338%2Fvideos%2F207240801970779%2F&show_text=false&width=560&t=0"
          // scrolling="no"
        ></iframe>
        <p className="container_iframeYoutube_p">
          El Compositor Vallenato NEIL PERTUZ nos habla de su vida y sus éxitos
          musicales.
        </p>
      </div>
      <div className="container_iframeYoutube_iframe">
        <iframe
          className="iframe_youtube"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100093630360338%2Fvideos%2F238610585788741%2F&show_text=false&width=560&t=0"
        ></iframe>
        <p className="container_iframeYoutube_p">
          En video revivamos la victoria que obtuvo el Club Sampdoria de
          Becerril frente al Club Nápoles de Becerril en la fecha 12 del Torneo
          Nacional Primera C.
        </p>
      </div>
      <div className="container_iframeYoutube_iframe">
        <iframe
          className="iframe_youtube"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100093630360338%2Fvideos%2F976906123363665%2F&show_text=false&width=560&t=0"
        ></iframe>
        <p className="container_iframeYoutube_p">
          "FUTURO MEJOR" al M/pio de Becerril, Cesar. Fabian Martinez, candidato
          a la alcaldía de este Municipio nos cuenta su proyección en
          ENTREVISTAS EFE 5.
        </p>
      </div>
      <div className="container_iframeYoutube_iframe">
        <iframe
          className="iframe_youtube"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100093630360338%2Fvideos%2F824433582324629%2F&show_text=false&width=560&t=0"
        ></iframe>
        <p className="container_iframeYoutube_p">
          Un ingeniero ambiental quiere llevar al municipio "BECERRIL SOCIAL Y
          SOSTENIBLE"; Andrés Fernandez, Candidato en ENTREVISTAS EFE 5.
        </p>
      </div>
      <div className="container_iframeYoutube_iframe">
        <iframe
          className="iframe_youtube"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100093630360338%2Fvideos%2F577259024486643%2F&show_text=false&width=560&t=0"
        ></iframe>
        <p className="container_iframeYoutube_p">
          El Proyecto Político #MásConvicción le apuesta a una Transformación
          Social en el M/pio de La Jagua de Ibirico ✅️
        </p>
      </div>
      <div className="container_iframeYoutube_iframe">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100093630360338%2Fvideos%2F213112187886586%2F&show_text=false&width=560&t=0"
          className="iframe_youtube"
        ></iframe>
        <p className="container_iframeYoutube_p">
          ✅️Video Comercial para la tienda de celulares NasaPhone del municipio
          de Becerril, Cesar.
        </p>
      </div>
      <div className="carousel">
      <button onClick={goToPrevious} className="carousel-button_left ">
      <i className='bx bxs-chevron-left'></i>
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button onClick={goToNext} className="carousel-button_rigth">
      <i className='bx bxs-chevron-right'></i>
      </button>
    </div>
    </div>
  );
};

export default Main_doble;
