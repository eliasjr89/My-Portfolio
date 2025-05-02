import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import "./style.css";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-switcher-dropdown">
      <div className="dropdown">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          id="langDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaGlobe className="me-2" />
          {t("language")}
        </button>
        <ul className="dropdown-menu" aria-labelledby="langDropdown">
          <li>
            <button className="dropdown-item" onClick={() => changeLanguage("en")}>
            {t("english")}
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => changeLanguage("es")}>
            {t("spanish")}
            </button>
          </li>
        </ul>
      </div>
    </div>
);

};

export default LanguageSwitcher;
