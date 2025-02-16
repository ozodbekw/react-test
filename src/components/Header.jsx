// router-dom
import { Link } from "react-router-dom";

// css
import "./css/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top-container container">
          <Link to="/home">
            <img src="./NAMANGANLIKLAR 24.svg" alt="NAMANGANLIKLAR logo" />
          </Link>
          <p className="header__top-currency">
            <p>
              <span>$</span> 10137.2
            </p>
            <p>
              <span>P</span> 138.26
            </p>
          </p>
          <div className="hader__top-search">
            <img src="./search.svg" alt="" />
            <input
              type="text"
              className="header__top-input"
              placeholder="Поиск"
            />
          </div>
          <div className="header__top-language">
            <span className="lang">УЗ</span>
            <span>РУ</span>
          </div>
          <button className="header__top-btn">Войти</button>
        </div>
      </div>
      <div className="header__bottom container">
        <ul className="header__bottom-list">
          <li className="header__bottom-list-item">
            <Link to="/">Главное</Link>
          </li>
          <li className="header__bottom-list-item">
            <Link to="/interesting">Интересное</Link>
          </li>
          <li className="header__bottom-list-item">
            <Link to="/Экономика">Экономика</Link>
          </li>
          <li className="header__bottom-list-item">
            <Link to="/Политика">Политика</Link>
          </li>
          <li className="header__bottom-list-item">
            <Link to="/Общество">Общество</Link>
          </li>
          <li className="header__bottom-list-item">
            <Link to="/Технологии">Технологии</Link>
          </li>
          <li className="header__bottom-list-item">
            <Link to="/Спорт">Спорт</Link>
          </li>
          <li className="header__bottom-list-item">
            <Link to="/Культура">Культура</Link>
          </li>
          <li className="header__bottom-list-item">
            <Link to="/Происшествия">Происшествия</Link>
          </li>
          <li className="header__bottom-list-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
