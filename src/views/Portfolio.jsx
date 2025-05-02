import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "../components/Slider";
import "../assets/styles/Portfolio.css";

const Portfolio = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const githubUsername = "eliasjr89";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated`
        );
        if (!response.ok) throw new Error("Error al obtener los repositorios");
        const data = await response.json();
        setRepos(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [githubUsername]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container-fluid mt-3 shadow p-3 rounded-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 text-start p-3">
          <h2 className="portfolio-title">{t("portfolioTitle")}</h2>
        </div>
      </div>
      <div className="row">
        <Slider repos={repos} />
      </div>
    </div>
  );
};

export default Portfolio;
