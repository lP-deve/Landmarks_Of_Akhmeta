import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./MuseumsDetauils.css";

function MuseumDetails() {
  const { id } = useParams();
  const { t } = useTranslation();

  const museumsList = t("museums_list", { returnObjects: true }) || [];

 
  const museum = museumsList.find((item) => String(item.id) === String(id));

  if (!museum) {
    return (
      <main className="museum-not-found">
        <h1>{t("museum_details.not_found")}</h1>
        <Link to="/museums">{t("museum_details.back_to_museums")}</Link>
      </main>
    );
  }

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${museum.name}${museum.address}`
  )}`;

  return (
    <main className="museum-details">
      <div className="details-container">
        <Link to="/museums" className="back">
          {t("museum_details.back_to_museums")}
        </Link>
        <section className="details-hero">
          <img 
            src={museum.image} 
            alt={museum.name} 
            onError={(e) => {
              e.currentTarget.onerror = null; 
              e.currentTarget.src = `https://via.placeholder.com/600x400?text=${encodeURIComponent(
                t("museum_details.image_not_found")
              )}`;
            }}
          />
        </section>

        <h1 className="museum-title">{museum.name}</h1>

        <section className="info-cards-grid">
          <div className="info-card">
            <span className="card-label">{t("museum_details.address")}</span>
            
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-value"
              style={{ color: '#0066cc', textDecoration: 'underline', cursor: 'pointer' }}
              title={t("museum_details.view_on_maps")}
            >
              {museum.address} 
            </a>
          </div>

          <div className="info-card">
            <span className="card-label">{t("museum_details.type")}</span>
            <span className="card-value">{museum.type}</span>
          </div>

          <div className="info-card">
            <span className="card-label">{t("museum_details.manager")}</span>
            <span className="card-value">{museum.manager}</span>
          </div>

          <div className="info-card">
            <span className="card-label">{t("museum_details.phone")}</span>
            <span className="card-value">
              {museum.phone || t("museum_details.not_specified")}
            </span>
          </div>
        </section>

        <section className="details-main-content">
          <h2>{t("museum_details.history")}</h2>
          <p className="details-history">{museum.history}</p>
        </section>
      </div>
    </main>
  );
}

export default MuseumDetails;