// css
import "./css/interesting.css";

// components
import SecondaryCard from "../components/SecondaryCard";
import Card from "../components/Card";

function Interesting() {
  const mireCard = [
    {
      id: 1,
      cardImage: "./interest-img/ia.png",
      title:
        "Отопление Ташкента на 30 лет переходит в управление французской Veolia",
      describtion:
        "Система теплоснабжения Ташкента на 30 лет будет передана в управление французской компании Veolia для модернизации и реконструкции, сообщает 22 сентября пресс-служба...",
      captionImage: "./home-img/china-plane-caption.png",
      caption: "ИА Красная Весна 15:26  ",
    },
    {
      id: 2,
      cardImage: "./interest-img/pepelats.png",
      title:
        "Пользователи жалуются на новую проблему iPhone 13, связанную с камерой",
      describtion:
        "Пользователи смартфона Apple iPhone 13 продолжают сообщать о новых проблемах, с которыми они сталкиваются при использовании флагмана, поступившего в продажу только позавчера...",
      captionImage: "./interest-img/pepelats-caption.png",
      caption: "Пепелац Ньюс 07:35  ",
    },
    {
      id: 3,
      cardImage: "./interest-img/klubDns.png",
      title:
        "Halo Infinite сравнили на Xbox One, Xbox One X, Xbox Series S и Xbox Series X",
      describtion:
        "Ютубер с канала ElAnalistaDeBits сравнил Halo Infinite на консолях Xbox One, Xbox One X, Xbox Series S и Xbox Series X. Графика впечатляет на всех платформах. Также отмечается...",
      captionImage: "./interest-img/klubDns-caption.png",
      caption: "Клуб DNS 15:33",
    },
    {
      id: 4,
      cardImage: "./interest-img/sputnik.png",
      title:
        "В Узбекистане показали тюнинговые варианты моделей Lacetti, Cobalt, Nexia и Spark",
      describtion:
        "«В сети наши потребители обсуждали тему сильного преобладания белого цвета в модельном ряду UzAuto Motors. Почему вы не делаете двухцветные автомобили? Этот вопрос был...",
      captionImage: "./interest-img/sputnik-caption.png",
      caption: "Sputnik Узбекистан 18:43",
    },
    {
      id: 5,
      cardImage: "./interest-img/icreator.png",
      title:
        "Время автономной работы iPhone 13 Pro Max стало рекордным для смартфонов Apple",
      describtion:
        "Линейка смартфонов iPhone 13 от Apple была презентована на прошлой неделе. Прием предзаказов на устройство стартовал 22 сентября, а 24 сентября новинка появилась в магазинах.",
      captionImage: "./interest-img/icreator-caption.png",
      caption: "iReactor 12:25  ",
    },
    {
      id: 6,
      cardImage: "./interest-img/huobi.png",
      title: "Криптобиржа Huobi закрыла регистрацию пользователей из Китая",
      describtion:
        "Крупнейшая в Китае биржа для торговли биткоинами Huobi приостановила регистрацию пользователей из КНР. Ранее местный Центробанк назвал нелегальными все транзакции...",
      captionImage: "./interest-img/huobi-caption.png",
      caption: "Компания 11:35  ",
    },
    {
      id: 7,
      cardImage: "./interest-img/fergana.png",
      title:
        "В Узбекистане пройдет международный конкурс молодых кинематографистов «Кино за 5 дней»",
      describtion:
        "В Узбекистане 22 сентября стартовал конкурс молодых кинематографистов «Кино за пять дней». Мероприятие проходит в рамках Ташкентского Международного...",
      captionImage: "./interest-img/fergana-caption.png",
      caption: "Фергана 15:44 ",
    },
    {
      id: 8,
      cardImage: "./interest-img/fbm.png",
      title:
        "Илон Маск принял участие во Всемирной сетевой конференции в Китае",
      describtion:
        "Илон Маск (Elon Musk, Руководитель фирмы Tesla и других проектов) уже второй раз за полторы недели обратился к китайским правящим кругам и гражданам.",
      captionImage: "./interest-img/fbm-caption.png",
      caption: "FBM.ru 22:23  ",
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
      <section className="mire container">
        <img
          className="interesting__img"
          src="./interesting-hero-img.png"
          alt=""
        />
        <h2 className="mire__title">Интересное</h2>
        <div className="mire__wrapper">
          <div className="mire__wrapper-left">
            {mireCard.map((item) => (
              <Card key={item.id} {...item} />
            ))}
            <button className="mire__wrapper-reloader">Показать ещё </button>
          </div>
          <div className="mire__wrapper-right">
            <SecondaryCard data={secondaryData} />
            <img
              className="mire__wrapper-right__img"
              src="./home-img/ads.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Interesting;
