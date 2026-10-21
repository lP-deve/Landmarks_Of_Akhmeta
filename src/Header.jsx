import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/logo.jpg" alt="Akhmeta Info" />
        <p>{t("header.title")}</p>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">{t("header.home")}</Link>
          </li>

          <li>
            <Link to="/museums">{t("header.museums")}</Link>
          </li>

          <li>
            <Link to="/statues">{t("header.statues")}</Link>
          </li>

          {/* ენის გადასართველი ღილაკები */}
          <li className="lang-switcher">
            <button
              className={`lang-btn ${i18n.language === "ka" ? "active" : ""}`}
              onClick={() => changeLanguage("ka")}
            >
              KA
            </button>
            <span className="lang-divider">|</span>
            <button
              className={`lang-btn ${i18n.language === "en" ? "active" : ""}`}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;