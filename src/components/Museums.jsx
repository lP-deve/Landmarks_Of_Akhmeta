import { useState } from "react";
import { Link } from "react-router-dom";
import "./Museums.css";

const museums = [
  {
    id: "rafiel-eristavi",
    name: "რ. ერისთავის სახელობის სახლ-მუზეუმი",
    address: "ახმეტა, სოფელი ქისტაური",
    type: "ეროვნული",
    manager: "ბელა ფშაველაშვილი",
    phone: "591 010 157",
    halls: 4,
    price: "უფასო",
    event: "რაფიელობის ყოველწლიური დღესასწაული, ღამე მუზეუმში",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Museum_of_rafiel_eristavi.jpg/960px-Museum_of_rafiel_eristavi.jpg",
    history:
      "ქისტაურის რაფიელ ერისთავის სახლ-მუზეუმი დაარსდა 1951 წელს. მისი ექსპოზიცია შედგება 4 საგამოფენო დარბაზისა და სამუშაო ოთახისაგან. მუზეუმში ინახება მწერლის ცხოვრებისა და მოღვაწეობის ამსახველი 6003 სხვადასხვა სახის სამეცნიერო და დამხმარე მასალა.",
  },

  {
    id: "akhmeta-local",
    name: "ახმეტის მხარეთმცოდნეობის მუზეუმი",
    address: "ახმეტა, სოფელი ქვემო ალვანი",
    type: "მუნიციპალური",
    manager: "ლენა მელწაიძე",
    phone: "597 122 880",
    halls: 6,
    price: "უფასო",
    event: "თუშური ხელსაქმის დღეები",
    service: "ტრადიციული რეწვის სადემონსტრაციო დარბაზები",
    image: "/view.jpg",
    history:
      "ახმეტის მხარეთმცოდნეობის მუზეუმი დაარსდა 1978 წელს. მუზეუმის ფონდში არის 17 ათასზე მეტი ექსპონატი, მათ შორის ეთნოგრაფიული მასალა, გამოყენებითი ხელოვნების ნიმუშები, ხალიჩა-ფარდაგები, თუშური სამოსელი და აქსესუარები.",
  },

  {
    id: "duisi-ethnographic",
    name: "ეთნოგრაფიული მუზეუმი",
    address: "ახმეტა, სოფელი დუისი",
    type: "მუნიციპალური",
    manager: "ომარ ხანგოშვილი",
    phone: "568 929 989",
    halls: 2,
    price: "უფასო",
    image: "/pankisi.jpg",
    history:
      "სოფელ დუისის ეთნოგრაფიული მუზეუმი მდებარეობს პანკისის ხეობის გულში. მუზეუმში წარმოდგენილია დაახლოებით 800 ექსპონატი, რომლებიც ანტიკური ხანიდან შუა საუკუნეებამდე პერიოდს მოიცავს.",
  },

  {
    id: "akhmeta-history",
    name: "ისტორიის მუზეუმი",
    address: "ქ. ახმეტა, ჩილოყაშვილის ქუჩა",
    type: "მუნიციპალური",
    manager: "ვაკანტური",
    phone: null,
    halls: null,
    price: "უფასო",
    image: "/horses.jpg",
    history:
      "ისტორიის მუზეუმი წარმოადგენს ახმეტის მუნიციპალიტეტის ისტორიული და კულტურული მემკვიდრეობის მნიშვნელოვან ნაწილს.",
  },
];

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
        <span>AKHMETA INFO</span>

        <h1>მუზეუმები</h1>

        <p>
          აღმოაჩინე ახმეტის მუნიციპალიტეტის მუზეუმები
          და მათი უნიკალური ისტორია.
        </p>
      </section>

      <section className="museum-controls">

        <div className="museum-search">
          🔍
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
                  📍 {museum.address}
                </p>

                <div className="card-bottom">

                  <span>
                    🏛️{" "}
                    {museum.halls
                      ? `${museum.halls} დარბაზი`
                      : "მუზეუმი"}
                  </span>

                  <span className="free">
                    {museum.price}
                  </span>

                </div>

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

export { museums };
export default Museums;
