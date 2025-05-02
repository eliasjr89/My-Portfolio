import { useTranslation } from "react-i18next";
import "../assets/styles/Experience.css";
import SipayLogo from "../assets/images/sipay.svg";
import Card from "../components/Card";
import GeeksLogo from "../assets/images/GeeksLogo.png";
import IlernaLogo from "../assets/images/IlernaLogo.png";

const Experience = () => {
  const { t } = useTranslation();

  const education = [
    {
      degree: t("fullStackDeveloper"),
      duration: "2024",
      location: `${t("madrid")}, ${t("spain")}`,
      description: t("bootcamp"),
      logo: GeeksLogo,
      url: " https://4geeksacademy.com/",
    },
    {
      degree: t("fpIlerna"),
      duration: "2024-Actual",
      location: `${t("madrid")}, ${t("spain")}`,
      description: t("smir"),
      logo: IlernaLogo,
      url: " https://www.ilerna.es/",
    },
  ];

  const experiences = [
    {
      location: `${t("madrid")}, ${t("spain")}`,
      position: "Frontend Developer",
      duration: "2024 - Actual",
      description: t("sipayExperienceDescription"),
      logo: SipayLogo,
      url: "https://www.sipay.es",
    },
  ];

  return (
    <>
      <div className='container-fluid mt-3 shadow rounded-5'>
        {/* Nav Tabs */}
        <ul
          className='container-fluid justify-content-center nav nav-tabs'
          id='experienceTabs'
          role='tablist'
        >
          <li className='nav-item' role='presentation'>
            <a
              className='nav-link active text-success'
              id='education-tab'
              data-bs-toggle='tab'
              href='#education'
              role='tab'
              aria-controls='education'
              aria-selected='true'
            >
              {t("education")}
            </a>
          </li>
          <li className='nav-item' role='presentation'>
            <a
              className='nav-link'
              id='experience-tab'
              data-bs-toggle='tab'
              href='#experience'
              role='tab'
              aria-controls='experience'
              aria-selected='false'
            >
              {t("workExperience")}
            </a>
          </li>
        </ul>

        {/* Tab Content */}
        <div className='tab-content mt-3'>
          {/* Education Tab */}
          <div
            className='tab-pane fade show active'
            id='education'
            role='tabpanel'
            aria-labelledby='education-tab'
          >
            <div className='row d-flex justify-content-center'>
              {education.map((edu, index) => (
                <Card
                  key={index}
                  logo={edu.logo}
                  position={edu.degree}
                  location={edu.location}
                  duration={edu.duration}
                  description={edu.description}
                  url={edu.url}
                />
              ))}
            </div>
          </div>

          {/* Work Experience Tab */}
          <div
            className='tab-pane fade'
            id='experience'
            role='tabpanel'
            aria-labelledby='experience-tab'
          >
            <div className='row d-flex justify-content-center'>
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  logo={exp.logo}
                  position={exp.position}
                  location={exp.location}
                  duration={exp.duration}
                  description={exp.description}
                  url={exp.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
