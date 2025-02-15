import "./css/home.css";

function Home() {
  return (
    <>
      <section className="home_hero container">
        <img
          src="./home-img/home_hero_img.png"
          alt=""
          className="home_hero__img"
        />
        <div className="home_hero__wrapper">
          <div className="home_hero__card">
            <h3 className="home_hero__card-title">
              Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного
              соглашения
            </h3>
            <p className="home_hero__card-describtion">
              Новое исследование ученых университета Иллинойса объединяет
              полевые данные...
            </p>
            <img
              src="./home-img/gazeta.png"
              alt="card img"
              className="home_hero__card-img"
            />
            <div className="home_hero__card-caption">
              <img
                className="home_hero__card-caption__img"
                src="./home-img/home-card-gazeta.png"
                alt=""
              />
              <p className="home_hero__card-caption__title">Газета.Ru 12:54</p>
            </div>
          </div>
          <div className="home_hero__card">
            <h3 className="home_hero__card-title">
              Ученые доказали экспериментальным путем пользу покровных культур
            </h3>
            <p className="home_hero__card-describtion">
              Лидер Социал-демократической партии Германии (СДПГ) и кандидат на
              должность...
            </p>
            <img
              src="./home-img/heytek.png"
              alt="card img"
              className="home_hero__card-img"
            />
            <div className="home_hero__card-caption">
              <img
                className="home_hero__card-caption__img"
                src="./home-img/home-card-heytek.png"
                alt=""
              />
              <p className="home_hero__card-caption__title">Хайтек+ 13:44</p>
            </div>
          </div>
          <div className="home_hero__card">
            <h3 className="home_hero__card-title">
              Baidu запустила публичный сервис роботакси Apollo Go в Шанхае
            </h3>
            <p className="home_hero__card-describtion">
              Автопарк Baidu состоит из модифицированных электромобилей EV...
            </p>
            <img
              src="./home-img/home-card-first.png"
              alt="card img"
              className="home_hero__card-img"
            />
            <div className="home_hero__card-caption">
              <img
                className="home_hero__card-caption__img"
                src="./home-img/home-card-caption.png"
                alt=""
              />
              <p className="home_hero__card-caption__title">
                ИА Красная Весна 15:55
              </p>
            </div>
          </div>
          <div className="home_hero__card">
            <h3 className="home_hero__card-title">
              Стали известны ёмкости аккумуляторов всех моделей iPhone 13
            </h3>
            <p className="home_hero__card-describtion">
              Во время презентации iPhone 13 Apple придала большое значения...
            </p>
            <img
              src="./home-img/lentra.png"
              alt="card img"
              className="home_hero__card-img"
            />
            <div className="home_hero__card-caption">
              <img
                className="home_hero__card-caption__img"
                src="./home-img/home-card-lenta.png"
                alt=""
              />
              <p className="home_hero__card-caption__title">Lenta.ru 10:54</p>
            </div>
          </div>
          <div className="home_hero__card">
            <h3 className="home_hero__card-title">
              Nature: ученые смогли доказать природное происхождение
              коронавируса SARS-CoV-2
            </h3>
            <p className="home_hero__card-describtion">
              Во время презентации iPhone 13 Apple придала большое значение...
            </p>
            <img
              src="./home-img/tranas.png"
              alt="card img"
              className="home_hero__card-img"
            />
            <div className="home_hero__card-caption">
              <img
                className="home_hero__card-caption__img"
                src="./home-img/home-card-tarantas.png"
                alt=""
              />
              <p className="home_hero__card-caption__title">
                Тарантас Ньюс 10:44
              </p>
            </div>
          </div>
          <div className="home_hero__card">
            <h3 className="home_hero__card-title">
              Китайская марка JAC повысила цены на лифтбек и пикап в России
            </h3>
            <p className="home_hero__card-describtion">
              Две модели китайского бренда JAC из пяти, представленных на
              российском...
            </p>
            <img
              src="./home-img/digger.png"
              alt="card img"
              className="home_hero__card-img"
            />
            <div className="home_hero__card-caption">
              <img
                className="home_hero__card-caption__img"
                src="./home-img/home-card-digger.png"
                alt=""
              />
              <p className="home_hero__card-caption__title">Digger.ru 14:25</p>
            </div>
          </div>
        </div>

        <div className="home_hero__modal-open">
          <h3 className="home_hero__modal-open-title">
            Хотите быть в курсе свежих новостей? Включите уведомления!
          </h3>
          <button className="home_hero__modal-open--btn">Включит </button>
        </div>
      </section>
      {/* Mire section */}
      <section className="mire container">
        <h2 className="mire__title">В мире</h2>
      </section>
    </>
  );
}

export default Home;
