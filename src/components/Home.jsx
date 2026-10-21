import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Home.css";

function Home() {
  const { t } = useTranslation();

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span>AKHMETA</span>

            <h1>
              {t("home.hero_title_1")}
              <br />
              {t("home.hero_title_2")}
            </h1>

            <p>{t("home.hero_desc")}</p>

            <div className="hero-buttons">
              <Link to="/museums">{t("home.view_museums")}</Link>
              <Link to="/statues" className="secondary-btn">
                {t("home.view_statues")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="intro">
        <span className="section-label">{t("home.municipality_label")}</span>

        <h2>
          {t("home.intro_title_1")}
          <br />
          {t("home.intro_title_2")}
        </h2>

        <p>{t("home.intro_p1")}</p>
        <p>{t("home.intro_p2")}</p>
      </section>

      <section className="categories">
        <div className="category-card museum-card">
          <div>
            <h3>{t("home.museums")}</h3>
            <p>{t("home.museums_desc")}</p>
            <Link to="/museums">{t("home.view_museums")}</Link>
          </div>
        </div>

        <div className="category-card statue-category-card">
          <div>
            <h3>{t("home.statues")}</h3>
            <p>{t("home.statues_desc")}</p>
            <Link to="/statues">{t("home.view_statues")}</Link>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="section-heading">
          <div>
            <span className="section-label">{t("home.heritage_label")}</span>
            <h2>{t("home.featured_places")}</h2>
          </div>
        </div>

        <div className="featured-grid">
          <article className="heritage-card" id="hide">
            <div
              className="heritage-image kvetera"
              role="img"
              aria-label={t("home.kvetera_title")}
            ></div>

            <div className="heritage-content">
              <span>{t("home.historical_monument")}</span>
              <h3>{t("home.kvetera_title")}</h3>
              <p>{t("home.kvetera_desc")}</p>
              <Link to="/statues">{t("home.learn_more")}</Link>
            </div>
          </article>

          <article className="heritage-card">
            <div
              className="heritage-image alaverdi"
              role="img"
              aria-label={t("home.alaverdi_title")}
            ></div>

            <div className="heritage-content">
              <span>{t("home.arch_monument")}</span>
              <h3>{t("home.alaverdi_title")}</h3>
              <p>{t("home.alaverdi_desc")}</p>
              <Link to="/statues">{t("home.learn_more")}</Link>
            </div>
          </article>

          <article className="heritage-card">
            <div
              className="heritage-image tusheti"
              role="img"
              aria-label={t("home.tusheti_title")}
            ></div>

            <div className="heritage-content">
              <span>{t("home.cultural_landscape")}</span>
              <h3>{t("home.tusheti_title")}</h3>
              <p>{t("home.tusheti_desc")}</p>
              <Link to="/statues">{t("home.learn_more")}</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="about">
        <div
          className="about-image"
          role="img"
          aria-label={t("home.subtitle")}
        ></div>

        <div className="about-content">
          <span className="section-label">{t("home.know_akheta")}</span>

          <h2 id="titleB">
            {t("home.about_title_1")}
            <br />
            {t("home.about_title_2")}
          </h2>

          <p>{t("home.about_p1")}</p>
          <p>{t("home.about_p2")}</p>

          <Link to="/statues" className="main-button">
            {t("home.discover_more")}
          </Link>
        </div>
      </section>

      <section className="stats">
        <div className="stats-title">
          <span>AKHMETA</span>
          <h2>{t("home.general_info")}</h2>
        </div>

        <div className="stats-grid">
          <div className="stat">
            <strong>4</strong>
            <span>{t("home.stat_museums")}</span>
          </div>

          <div className="stat">
            <strong>150+</strong>
            <span>{t("home.stat_cultural_obj")}</span>
          </div>

          <div className="stat">
            <strong>2200+</strong>
            <span>{t("home.stat_area")}</span>
          </div>
        </div>
      </section>

      <section className="cta">
        <span>{t("home.discover_akheta")}</span>

        <h2>
          {t("home.cta_title_1")}
          <br />
          {t("home.cta_title_2")}
        </h2>

        <p>{t("home.cta_desc")}</p>

        <Link to="/museums">{t("home.start_discovering")}</Link>
      </section>

      <section className="map-section">
        <h2>{t("home.find_on_map")}</h2>
        <p>{t("home.municipality_label")}</p>

        <div className="div">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=14nnckl3xrhV91bPu7SzaOfbDvpAtBCw&ehbc=2E312F"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Akhmeta Map"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default Home;