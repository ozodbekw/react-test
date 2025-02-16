import "./css/contact.css";

function Contact() {
  return (
    <section className="container contact">
      <h2 className="contact__title">Напишите нам</h2>
      <div className="contaact-wrapper">
        <div className="contact__inputs">
          <div className="contact__inputs-top">
            <input type="text" placeholder="Имя" />
            <input type="number" placeholder="Номер телефона" />
          </div>
          <input type="email" placeholder="Электронная почта" />
          <textarea id="" placeholder="Текст"></textarea>
          <button className="contact__btn">Отправить</button>
        </div>
        <div className="contact__card">
          <div>
            <h2>Электронная почта</h2>
            <a href="mailto:info@namanganliklar24.uz">
              info@namanganliklar24.uz
            </a>
          </div>
          <div>
            <h2>Номер телефона</h2>
            <a href="tel:+998 88 522-54-76">+998 88 522-54-76</a>
          </div>
          <div>
            <h2>Адрес</h2>
            <a>Ташкент, площадь Мустакиллик, 6 </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
