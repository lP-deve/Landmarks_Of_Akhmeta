import { useState } from "react";
import { Link } from "react-router-dom";
import "./Museums.css";
import { museums } from "../json";

function Museums() {
  const [filter, setFilter] = useState("ყველა");
  const [search, setSearch] = useState("");

  const filteredMuseums = museums.filter((museum) => {
    const matchesFilter =
      filter === "ყველა" || museum.type === filter;

    const matchesSearch =
      museum.name.toLowerCase().includes(search.toLowerCase()) ||
      museum.address.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <main className="museums-page">

      <section className="museums-header">
        <div className="bg">
        <span>AKHMETA INFO</span>

        <h1>მუზეუმები</h1>

        <p>
          აღმოაჩინე ახმეტის მუნიციპალიტეტის მუზეუმები
          და მათი უნიკალური ისტორია.
          </p>
          </div>
      </section>

      <section className="museum-controls">

        <div className="museum-search">
        
          <input
            type="text"
            placeholder="მოძებნე მუზეუმი..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="museum-filters">

          <button
            className={filter === "ყველა" ? "active" : ""}
            onClick={() => setFilter("ყველა")}
          >
            ყველა
          </button>

          <button
            className={filter === "ეროვნული" ? "active" : ""}
            onClick={() => setFilter("ეროვნული")}
          >
            ეროვნული
          </button>

          <button
            className={filter === "მუნიციპალური" ? "active" : ""}
            onClick={() => setFilter("მუნიციპალური")}
          >
            მუნიციპალური
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
                    museum.type === "ეროვნული"
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
                  დეტალურად ნახვა →
                </div>

              </div>

            </Link>

          ))
        ) : (
          <div className="no-results">
            <h2>მუზეუმი ვერ მოიძებნა</h2>
            <p>
              სცადე სხვა საძიებო სიტყვა ან ფილტრი.
            </p>
          </div>
        )}

      </section>

    </main>
  );
}


export default Museums;
