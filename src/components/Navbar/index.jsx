import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.css";
import LanguageSwitcher from "../LanguageSwitcher";
const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <div className="container-fluid d-flex justify-content-between">
        <a className='navbar-brand' href='#'>
          Elías Jiminián
        </a>
        <button
          className='navbar-toggler w-50'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        </div>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='container-fluid navbar-nav mx-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about'>
                {t("about")}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/skills'>
                {t("skills")}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/experience'>
                {t("experience")}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/portfolio'>
                {t("portfolio")}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/contact'>
                {t("contact")}
              </NavLink>
            </li>
            <li className='nav-item'>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
