import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Museums.css";
import { FaSearch } from 'react-icons/fa';

function Museums() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  
  const museumsList = t("museums_list", { returnObjects: true }) || [];

  const filteredMuseums = museumsList.filter((museum) => {
    
    const matchesFilter =
      filter === "all" ||
      (filter === "national" && (museum.type === "ეროვნული" || museum.type === "National")) ||
      (filter === "municipal" && (museum.type === "მუნიციპალური" || museum.type === "Municipal"));

 
    const matchesSearch =
      museum.name.toLowerCase().includes(search.toLowerCase()) ||
      museum.address.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <main className="museums-page">

      <section className="museums-header">
        <div className="bg">
          <span>AKHMETA</span>
          <h1>{t("museums_page.title")}</h1>
          <p>{t("museums_page.subtitle")}</p>
        </div>
      </section>

      <section className="museum-controls">

        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder={t("museums_page.search_placeholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="museum-filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            {t("museums_page.filter_all")}
          </button>

          <button
            className={filter === "national" ? "active" : ""}
            onClick={() => setFilter("national")}
          >
            {t("museums_page.filter_national")}
          </button>

          <button
            className={filter === "municipal" ? "active" : ""}
            onClick={() => setFilter("municipal")}
          >
            {t("museums_page.filter_municipal")}
          </button>
        </div>

      </section>

      <section className="museum-grid">

        {filteredMuseums.length > 0 ? (
          filteredMuseums.map((museum) => (

            <Link
              to={`/museums/${museum.id}`}
              className="museum-card"
              key={museum.id}
            >

              <div className="museum-card-image">
                <img
                  src={museum.image}
                  alt={museum.name}
                />

                <span
                  className={
                    museum.type === "ეროვნული" || museum.type === "National"
                      ? "badge national"
                      : "badge"
                  }
                >
                  {museum.type}
                </span>
              </div>

              <div className="museum-card-content">
                <h2>{museum.name}</h2>

                <p className="address">
                  {museum.address}
                </p>

                <div className="view-details">
                  {t("museums_page.view_details")}
                </div>
              </div>

            </Link>

          ))
        ) : (
          <div className="no-results">
            <h2>{t("museums_page.no_results_title")}</h2>
            <p>{t("museums_page.no_results_desc")}</p>
          </div>
        )}

      </section>

    </main>
  );
}

export default Museums;