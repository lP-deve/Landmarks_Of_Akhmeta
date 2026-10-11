import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaCompass, 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footers.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Brand Column */}
        <div className="footer-column brand-col">
          <div className="footer-logo">
            <FaCompass className="logo-icon" />
            <h3>ახმეტის ღირსშესანიშნაობები</h3>
          </div>
          <p className="footer-desc">
            აღმოაჩინეთ ახმეტის მუნიციპალიტეტის მდიდარი ისტორია, უძველესი ციხე-სიმაგრეები, 
            მონასტრები და თუშეთის ულამაზესი მთის პეიზაჟები.
          </p>
        </div>

        {/* Contact Column */}
        <div className="footer-column contact-col">
          <h4>კონტაქტი & რეგიონი</h4>
          
          {/* Google Maps Link */}
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Akhmeta+Municipality+Georgia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              ახმეტის მუნიციპალიტეტი, კახეთი, საქართველო
            </a>
          </div>

          {/* Email Click-to-Send */}
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a 
              href="mailto:akhmetameria@gmail.com" 
              className="contact-link"
            >
              akhmetameria@gmail.com
            </a>
          </div>

          {/* Phone Click-to-Call */}
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <a 
              href="tel:+995599099635" 
              className="contact-link"
            >
              +995 599 09 96 35
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-column nav-col">
          <h4>ნავიგაცია</h4>
          <ul className="footer-links">
            <li><Link to="/home">მთავარი</Link></li>
            <li><Link to="/museums">მუზეუმები</Link></li>
            <li><Link to="/statues">ძეგლები</Link></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            &copy; {new Date().getFullYear()}  ყველა უფლება დაცულია.
          </p>
          <p>ახმეტის ღირსშესანიშნაობები</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;