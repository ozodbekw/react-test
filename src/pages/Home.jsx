import { useState } from "react";
import "./css/home.css";
import Card from "../components/Card";
import SecondaryCard from "../components/SecondaryCard";

function Home() {
  const [modal, setModal] = useState(false);
  const openModal = (type) => {
    if (type) {
      setModal((prev) => (prev = true));
    } else {
      setModal((prev) => (prev = false));
    }
  };

  const mireCard = [
    {
      id: 1,
      cardImage: "./home-img/china-plane.png",
      title:
        "Китайский Чунцин запустил чартерный рейс для студентов до Британии",
      describtion:
        "Чартерный рейс с 244 китайскими студентами вылетел из города центрального подчинения Чунцина на юго-западе Китая в британский Манчестер...",
      captionImage: "./home-img/china-plane-caption.png",
      caption: "ИА Красная Весна 12:25",
    },
    {
      id: 2,
      cardImage: "./home-img/germany-pre.png",
      title:
        "В Германии выпустят ограниченную партию плюшевых мишек в образе Меркель",
      describtion:
        "БЕРЛИН, 19 сентября. / ТАСС/. Знаменитая фабрика по производству плюшевых игрушек в городе Кобург (федеральная земля Бавария) изготовила уникального...",
      captionImage: "./home-img/germany-pre-caption.png",
      caption: "ТАСС 11:35",
    },
    {
      id: 3,
      cardImage: "./home-img/aktsiya.png",
      title:
        "Акции КНР утратили доверие инвесторов. Что делать с бумагами прямо сейчас",
      describtion:
        "За последние месяцы инвесторы в китайский рынок пережили настоящее потрясение — из-за ужесточения регулирования технологического сектора и критики некоторых...",
      captionImage: "./home-img/aktsiya-caption.png",
      caption: "РБК Инвестиции 09:35",
    },
    {
      id: 4,
      cardImage: "./home-img/china-flag.png",
      title:
        "Китай раскритиковал заключенный Австралией, США и Великобританией антикитайский союз AUKUS",
      describtion:
        "Не только Франция, которая лишилась многомиллиардного контракта с Австралий, осталась недовольна созданием трехстороннего оборонного альянса AUKUS, пишет Anna-News.info",
      captionImage: "./home-img/china-flag-caption.png",
      caption: "Solenka.info 19:43",
    },
  ];

  const secondaryData = [
    {
      id: 1,
      title: "В Фергане создадут узбекско-пакистанский университет",
      describtion: "Sputnik Узбекистан 14:09",
    },
    {
      id: 2,
      title:
        "Узбекистан утвердил соглашение о содействии занятости в странах СНГ",
      describtion: "ИА Красная Весна 10:19",
    },
    {
      id: 3,
      title: "В Узбекистане увеличиваются очереди за автомобилями UzAuto",
      describtion: "Северная газета (Армянск) 13:50",
    },
    {
      id: 4,
      title: "Минтуризма опровергло приостановку выплат за шаги",
      describtion: "Sputnik Узбекистан 14:32",
    },
  ];

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
          <button
            onClick={() => openModal(true)}
            className="home_hero__modal-open--btn"
          >
            Включит
          </button>
        </div>
        {modal && (
          <div className="modal">
            <div className="innerDiv">
              <button
                onClick={() => openModal(false)}
                className="modal__close-btn"
              >
                <img src="./home-img/close-modal.svg" alt="" />
              </button>
              <h2 className="modal__title">
                Хотите быть в курсе свежих новостей? Включите уведомления!
              </h2>
              <button
                onClick={() => openModal(false)}
                className="home_hero__modal-open--btn"
              >
                Включит
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Mire section */}
      <section className="mire container">
        <h2 className="mire__title">В мире</h2>
        <div className="mire__wrapper">
          <div className="mire__wrapper-left">
            {mireCard.map((item) => (
              <Card key={item.id} {...item} />
            ))}
            <button className="mire__wrapper-reloader">Показать ещё </button>
          </div>
          <div className="mire__wrapper-right">
            <SecondaryCard data={secondaryData} />
            <img className="mire__wrapper-right__img" src="./home-img/ads.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
