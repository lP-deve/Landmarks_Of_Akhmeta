import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaCompass, 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footers.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        <div className="footer-column brand-col">
          <div className="footer-logo">
            <FaCompass className="logo-icon" />
            <h3>{t('footer.title')}</h3>
          </div>
          <p className="footer-desc">
            {t('footer.desc')}
          </p>
        </div>

        <div className="footer-column contact-col">
          <h4>{t('footer.contact_title')}</h4>
          
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Akhmeta+Municipality+Georgia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              {t('footer.address')}
            </a>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a 
              href="mailto:akhmetameria@gmail.com" 
              className="contact-link"
            >
              akhmetameria@gmail.com
            </a>
          </div>

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

        <div className="footer-column nav-col">
          <h4>{t('footer.nav_title')}</h4>
          <ul className="footer-links">
            <li><Link to="/">{t('footer.home')}</Link></li>
            <li><Link to="/museums">{t('footer.museums')}</Link></li>
            <li><Link to="/statues">{t('footer.statues')}</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            &copy; {new Date().getFullYear()} {t('footer.rights_reserved')}
          </p>
          <p>{t('footer.title')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;