import { useState, useEffect } from "react";
import Card from "../Card";
import "./style.css";

const Slider = ({ repos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(
    window.innerWidth >= 992 ? 3 : 1
  );

  // Actualiza itemsPerSlide según el tamaño de ventana
  useEffect(() => {
    const onResize = () => {
      setItemsPerSlide(window.innerWidth >= 992 ? 3 : 1);
      setCurrentIndex(0); // reset al cambiar configuración
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % repos.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(repos.length - itemsPerSlide, 0)
        : prevIndex - itemsPerSlide
    );
  };

  // reagrupar según itemsPerSlide
  const groupedRepos = [];
  for (let i = 0; i < repos.length; i += itemsPerSlide) {
    groupedRepos.push(repos.slice(i, i + itemsPerSlide));
  }
  const slideIndex = Math.floor(currentIndex / itemsPerSlide);
  const currentRepos = groupedRepos[slideIndex] || [];

  // autoplay si quieres:
  useEffect(() => {
    const interval = setInterval(nextCard, 6000);
    return () => clearInterval(interval);
  }, [repos, itemsPerSlide]);

  return (
    <div className="slider-container container-fluid position-relative d-flex justify-content-center align-items-center py-4">
      <div className="slider-controls position-absolute top-0 start-50 translate-middle-x mt-3">
        <button className="slider-btn me-2" onClick={prevCard}>
          <i className="bi bi-arrow-left-circle-fill"></i>
        </button>
        <button className="slider-btn" onClick={nextCard}>
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>

      <div className="card-container">
        {currentRepos.map((repo) => (
          <Card
            key={repo.id}
            logo="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            position={repo.name}
            location={
              <span>
                <i className="bi bi-star text-warning"></i>{" "}
                {repo.stargazers_count}
              </span>
            }
            duration={`Última actualización: ${new Date(
              repo.updated_at
            ).toLocaleDateString()}`}
            url={repo.html_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
