import { useTranslation } from "react-i18next";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaReact,
  FaVuejs,
  FaNode,
  FaDocker,
  FaBootstrap,
  FaDatabase,
  FaKey,
  FaWindowMaximize,
  FaEye,
} from "react-icons/fa";
import "../assets/styles/Skills.css";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className='container-fluid rounded mt-5'>
      <div className='box p-4 mb-4 border rounded-5'>
        <p dangerouslySetInnerHTML={{ __html: t("skillsText") }}></p>
      </div>

      <div className='box p-4 mb-4 border rounded-5'>
        <div className='d-flex flex-wrap justify-content-center gap-4'>
          <FaHtml5 />
          <FaCss3Alt />
          <FaJsSquare />
          <FaPython />
          <FaReact />
          <FaNode />
          <FaKey />
          <FaDatabase />
          <FaBootstrap />
          <FaVuejs />
          <FaDocker />
          <FaWindowMaximize />
          <FaEye />
        </div>
      </div>
    </div>
  );
};

export default Skills;
