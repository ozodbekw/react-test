// router-dom
import { Link } from "react-router-dom";

// css
import "./css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer-top">
          <Link to="/home">
            <img
              className="footer-top__logo"
              src="./NAMANGANLIKLAR 24.svg"
              alt="site logo"
            />
          </Link>
          <div className="footer-top__lists">
            <p className="footer-top__caption">
              Воспроизводство, копирование, использование информации с сайта
              «NAMANGANLIKLAR24.UZ» возможно только с предварительного
              письменного разрешения редакции.
            </p>
            <ul className="footer-top__list">
              <li>Информация о сайте</li>
              <li>Напишите нам</li>
              <li>Реклама</li>
              <li>Прислать новость</li>
            </ul>
            <ul className="footer-top__list">
              <li>Использование материалов</li>
              <li>Темы дня</li>
              <li>Наша команда</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <h2 className="footer-botom__title">Наши социальные сети</h2>
          <div className="footer-botom__socials">
            <img src="./free-icon-facebook.svg" alt="icon facebook" />
            <img src="./free-icon-instagram.svg" alt="icon instagram" />
            <img src="./free-icon-telegram.svg" alt="icon telegram" />
            <img src="./free-icon-youtube.svg" alt="icon youtube" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
