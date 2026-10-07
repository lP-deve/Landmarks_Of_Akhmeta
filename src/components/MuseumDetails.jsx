import { Link, useParams } from "react-router-dom";
import { museums } from "./Museums";
import "./MuseumsDetauils.css";


function MuseumDetails() {
  const { id } = useParams();

  const museum = museums.find(
    (item) => item.id === id
  );

  if (!museum) {
    return (
      <main className="museum-not-found">
        <h1>მუზეუმი ვერ მოიძებნა</h1>

        <Link to="/museums">
          ← მუზეუმებზე დაბრუნება
        </Link>
      </main>
    );
  }

  return (
    <main className="museum-details">

      <div className="details-back">
        <Link to="/museums">
          ← ყველა მუზეუმი
        </Link>
      </div>

      <section className="details-hero">

        <img
          src={museum.image}
          alt={museum.name}
        />

        <div className="details-hero-content">

          <span
            className={
              museum.type === "ეროვნული"
                ? "badge national"
                : "badge"
            }
          >
            {museum.type}
          </span>

          <h1>{museum.name}</h1>

          <p>
            📍 {museum.address}
          </p>

        </div>

      </section>


      <section className="details-content">

        <div className="details-main">

          <span className="museum-label">
            მუზეუმის შესახებ
          </span>

          <h2>ისტორია</h2>

          <p className="details-history">
            {museum.history}
          </p>


          {museum.event && (
            <>
              <h2>ღონისძიებები</h2>

              <div className="details-event">
                🎭 {museum.event}
              </div>
            </>
          )}


          {museum.service && (
            <>
              <h2>დამატებითი მომსახურება</h2>

              <div className="details-service">
                ✦ {museum.service}
              </div>
            </>
          )}

        </div>


        <aside className="details-sidebar">

          <h3>ინფორმაცია</h3>

          <div className="detail-row">
            <span>მნიშვნელობა</span>
            <strong>{museum.type}</strong>
          </div>

          <div className="detail-row">
            <span>მისამართი</span>
            <strong>{museum.address}</strong>
          </div>

          <div className="detail-row">
            <span>ხელმძღვანელი</span>
            <strong>{museum.manager}</strong>
          </div>

          {museum.phone && (
            <div className="detail-row">
              <span>ტელეფონი</span>
              <strong>{museum.phone}</strong>
            </div>
          )}

          {museum.halls && (
            <div className="detail-row">
              <span>დარბაზები</span>
              <strong>{museum.halls}</strong>
            </div>
          )}

          <div className="detail-row">
            <span>შესვლა</span>
            <strong className="free">
              {museum.price}
            </strong>
          </div>


          <a
            className="details-map"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              museum.address
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            📍 რუკაზე ნახვა
          </a>

          {museum.phone && (
            <a
              className="details-call"
              href={`tel:${museum.phone.replace(/\s/g, "")}`}
            >
              ☎ დარეკვა
            </a>
          )}

        </aside>

      </section>

    </main>
  );
}

export default MuseumDetails;
