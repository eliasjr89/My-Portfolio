import { useTranslation } from "react-i18next";
import Photo from "../assets/images/photo.png";
import "../assets/styles/About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className='container mt-3 shadow p-3 rounded-5'>
      <div className='row justify-content-center'>
        {/* Texto sobre mí */}
        <div className='col-lg-6 col-md-8 text-start p-3'>
          <h2 className='about-title mb-4'>{t("aboutTitle")}</h2>
          <p
            className='about_text'
            dangerouslySetInnerHTML={{ __html: t("aboutText") }}
          ></p>
        </div>
        <div className='col-lg-6 col-md-8 d-flex justify-content-center mt-lg-0'>
          <img
            src={Photo}
            alt='Imagen de mi persona'
            className='rounded-circle img-fluid shadow-sm photo'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
