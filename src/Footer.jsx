
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaCompass, 
} from 'react-icons/fa';
import './Footers.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
      
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
        <div className="footer-column contact-col">
          <h4>კონტაქტი & რეგიონი</h4>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>ახმეტის მუნიციპალიტეტი, კახეთი, საქართველო</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>akhmetameria@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>+995 599 09 96 35</span>
          </div>
        </div>
 <div className="footer-column">
          <h4>ნავიგაცია</h4>
          <ul className="footer-links">
            <li><Link to="/home">მთავარი</Link></li>
            <li><Link to="/museums">მუზეუმები</Link></li>
            <li><Link to="/statues">ძეგლები</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} ახმეტის ღირსშესანიშნაობები. <span>ყველა უფლება დაცულია.</span> </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;