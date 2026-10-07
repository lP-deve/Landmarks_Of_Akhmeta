import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span>AKHMETA INFO</span>

            <h1>
              აღმოაჩინე
              <br />
              ახმეტის მემკვიდრეობა
            </h1>

            <p>
              ისტორია, კულტურა, ძეგლები და მუზეუმები ერთ სივრცეში
            </p>

            <div className="hero-buttons">
              <Link to="/museums">მუზეუმების ნახვა</Link>
              <Link to="/statues" className="secondary-btn">
                ძეგლების ნახვა
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro">
        <span className="section-label">ახმეტის მუნიციპალიტეტი</span>

        <h2>
          ადგილი, სადაც ისტორია
          <br />
          დღემდე ცოცხლობს
        </h2>

        <p>
          ახმეტის მუნიციპალიტეტი კახეთის ერთ-ერთი გამორჩეული ისტორიულ-კულტურული
          რეგიონია. აქ ერთმანეთს ხვდება უძველესი ისტორია, ქართული არქიტექტურა,
          მთის ტრადიციები და უნიკალური ბუნება.
        </p>

        <p>
          მუნიციპალიტეტში მდებარეობს მნიშვნელოვანი კულტურული ძეგლები,
          მუზეუმები, ეკლესია-მონასტრები, ციხე-ქალაქები და თუშეთის უნიკალური
          კულტურული ლანდშაფტი.
        </p>
      </section>

      
      <section className="categories">
        <div className="category-card museum-card">
          <div>
            

            <h3>მუზეუმები</h3>

            <p>
              გაეცანი ახმეტის მუნიციპალიტეტში არსებულ მუზეუმებსა და მათ
              უნიკალურ კოლექციებს.
            </p>

            <Link to="/museums">მუზეუმების ნახვა →</Link>
          </div>
        </div>

        <div className="category-card statue-category-card">
          <div>

            <h3>ძეგლები</h3>

            <p>
              აღმოაჩინე ისტორიული ეკლესიები, ციხეები, მონასტრები და სხვა
              კულტურული ძეგლები.
            </p>

            <Link to="/statues">ძეგლების ნახვა →</Link>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="section-heading">
          <div>
            <span className="section-label">კულტურული მემკვიდრეობა</span>
            <h2>გამორჩეული ადგილები</h2>
          </div>
        </div>

        <div className="featured-grid">
          <article className="heritage-card">
            <div className="heritage-image kvetera" role="img" aria-label="ქვეტერას ციხე-ქალაქი"></div>

            <div className="heritage-content">
              <span>ისტორიული ძეგლი</span>
              <h3>კვეტერას ციხე-ქალაქი</h3>
              <p>
                შუა საუკუნეების მნიშვნელოვანი ციხე-ქალაქი, რომელიც ახმეტის
                მუნიციპალიტეტის ერთ-ერთი გამორჩეული ისტორიული ძეგლია.
              </p>
              <Link to="/statues">გაიგე მეტი →</Link>
            </div>
          </article>

          <article className="heritage-card">
            <div className="heritage-image alaverdi" role="img" aria-label="ალავერდის მონასტერი"></div>

            <div className="heritage-content">
              <span>არქიტექტურული ძეგლი</span>
              <h3>ალავერდის მონასტერი</h3>
              <p>
                ალაზნის ველზე მდებარე ერთ-ერთი უმნიშვნელოვანესი ქართული
                საეკლესიო და კულტურული ძეგლი.
              </p>
              <Link to="/statues">გაიგე მეტი →</Link>
            </div>
          </article>

          <article className="heritage-card">
            <div className="heritage-image tusheti" role="img" aria-label="თუშეთი"></div>

            <div className="heritage-content">
              <span>კულტურული ლანდშაფტი</span>
              <h3>თუშეთი</h3>
              <p>
                უნიკალური მთიანი რეგიონი, რომელიც ცნობილია ტრადიციული
                სოფლებით, კოშკებითა და კულტურული მემკვიდრეობით.
              </p>
              <Link to="/statues">გაიგე მეტი →</Link>
            </div>
          </article>
        </div>
      </section>

      {/* ABOUT AKHMETA */}
      <section className="about">
        <div className="about-image" role="img" aria-label="ახმეტის ხედი"></div>

        <div className="about-content">
          <span className="section-label">იცნობდე ახმეტას</span>

          <h2 id="titleB">
            ისტორია,
            <br />
            რომელიც საუკუნეებს აერთიანებს
          </h2>

          <p>
            ახმეტის ტერიტორიაზე ადამიანის ცხოვრების კვალი ქვის ხანიდან მოდის.
            მუნიციპალიტეტის ისტორიული მემკვიდრეობა მოიცავს სხვადასხვა
            პერიოდის არქიტექტურულ და არქეოლოგიურ ძეგლებს.
          </p>

          <p>
            განსაკუთრებით მნიშვნელოვანია ალავერდი, ქვეტერა, მატნის ცხრაკარა,
            ბახტრიონის ციხე და თუშეთის ისტორიულ-კულტურული ლანდშაფტი.
          </p>

          <Link to="/statues" className="main-button">
            აღმოაჩინე მეტი
          </Link>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div className="stats-title">
          <span>AKHMETA INFO</span>
          <h2>ახმეტა რიცხვებში</h2>
        </div>

        <div className="stats-grid">
          <div className="stat">
            <strong>4</strong>
            <span>მუზეუმი</span>
          </div>

          <div className="stat">
            <strong>100+</strong>
            <span>კულტურული ობიექტი</span>
          </div>

          <div className="stat">
            <strong>2200+</strong>
            <span>კმ² ტერიტორია</span>
          </div>

          <div className="stat">
            <strong>1</strong>
            <span>უნიკალური თუშეთი</span>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <span>აღმოაჩინე ახმეტა</span>

        <h2>
          შენი მოგზაურობა
          <br />
          აქ იწყება
        </h2>

        <p>მოძებნე მუზეუმები, ძეგლები და ისტორიული ადგილები.</p>

        <Link to="/museums">დაიწყე აღმოჩენა →</Link>
      </section>
    </main>
  );
}

export default Home;