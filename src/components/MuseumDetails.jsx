import { Link, useParams } from "react-router-dom";
import { museums } from "../json";
import "./MuseumsDetauils.css";

function MuseumDetails() {
  const { id } = useParams();

  const museum = museums.find((item) => String(item.id) === String(id));

  if (!museum) {
    return (
      <main className="museum-not-found">
        <h1>მუზეუმი ვერ მოიძებნა</h1>
        <Link to="/museums">მუზეუმებზე დაბრუნება</Link>
      </main>
    );
  }

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${museum.name}${museum.address}`
  )}`;

  return (
    <main className="museum-details">
      <div className="details-container">
        <Link to="/museums" className="back">მუზეუმებზე დაბრუნება</Link>
        <section className="details-hero">
          <img 
            src={museum.image} 
            alt={museum.name} 
            onError={(e) => {
              e.currentTarget.onerror = null; 
              e.currentTarget.src = "https://via.placeholder.com/600x400?text=სურათი+ვერ+მოიძებნა";
            }}
          />
        </section>

        <h1 className="museum-title">{museum.name}</h1>

        <section className="info-cards-grid">
          <div className="info-card">
            <span className="card-label">მისამართი</span>
            
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-value"
              style={{ color: '#0066cc', textDecoration: 'underline', cursor: 'pointer' }}
              title="ნახვა Google Maps-ში"
            >
              {museum.address} 
            </a>
          </div>

          <div className="info-card">
            <span className="card-label">ტიპი</span>
            <span className="card-value">{museum.type}</span>
          </div>

          <div className="info-card">
            <span className="card-label">ხელმძღვანელი</span>
            <span className="card-value">{museum.manager}</span>
          </div>

          <div className="info-card">
            <span className="card-label">საკონტაქტო ნომერი</span>
            <span className="card-value">{museum.phone || "არ არის მითითებული"}</span>
          </div>
        </section>

        <section className="details-main-content">
          <h2>ისტორია</h2>
          <p className="details-history">{museum.history}</p>
        </section>
      </div>
    </main>
  );
}

export default MuseumDetails;