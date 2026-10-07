import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/logo.jpg" alt="Akhmeta Info" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">მთავარი</Link>
          </li>

          <li>
            <Link to="/museums">მუზეუმები</Link>
          </li>

          <li>
            <Link to="/statues">ძეგლები</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
