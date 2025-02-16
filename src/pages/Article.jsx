// css
import "./css/article.css";

// components
import SecondaryCard from "../components/SecondaryCard";

function Article() {
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
      <div className="mire__wrapper container">
        <div className="mire__wrapper-left">
          <p className="mire__wrapper-left-caption">
            <img src="./interest-img/fbm-caption.png" alt="" />
            FBM.ru 22:23
          </p>
          <h2 className="mire__wrapper-left-title">
            Илон Маск принял участие во Всемирной сетевой конференции в Китае
          </h2>
          <img
            src="./artickle-hero.png"
            alt=""
            className="mire__wrapper__left-img"
          />
          <div className="mire__wrapper-left__describtion">
            <p>
              Илон Маск (Elon Musk, Руководитель фирмы Tesla и других проектов)
              уже второй раз за полторы недели обратился к китайским правящим
              кругам и гражданам. В видеоролике он уверил их в своей готовности
              инвестировать средства в развитие и расширять бизнес на территории
              этой страны. Особое внимание будет уделяться небезопасности
              обрабатываемых данных.{" "}
            </p>
            <p>
              Они будут храниться только в самом Китае и поэтому будут доступны
              правительству Поднебесной в любой момент.
            </p>
            <p>
              Новые заявления Илон Маск сделал во время видеообращения к
              аудитории мероприятия World Internet Conference, которое прошло в
              конце недели в Поднебесной. Компанию ему составили руководители
              Cisco Systems (Чак Роббинс), Intel (Пэт Гелсингер) и Qualcomm
              (Кристиано Амон), а интересы бизнеса Китайской Народной Республики
              представляли руководители Alibaba и Xiaomi.{" "}
            </p>
            <p>
              Открывал мероприятие Лю Хэ (Liu He, Вице-премьер Госсовета КНР),
              который привёл слова Си Цзиньпина (Xi Jinping) о стремлении
              Поднебесной работать со всеми державами над созданием прозрачной
              цифровой экономики.
            </p>
            <p>
              В ближайшее время Tesla собирается не только сделать шире объёмы
              производства автомобилей на электрической тяге в шанхайском
              филиале, но и разработать силами местной студии недорогую модель
              электрического автомобиля (стоимостью менее 25 000 долларов).
            </p>
            <p>
              {" "}
              Уже в настоящий момент собранные в Китайской Народной Республике
              электрокары Tesla Model Y и Model 3 поставляются на экспорт в
              Европу.
            </p>
          </div>
        </div>
        <div className="mire__wrapper-right">
          <SecondaryCard data={secondaryData} />
          <img
            className="mire__wrapper-right__img"
            src="./home-img/ads.png"
            alt="ads"
          />
        </div>
      </div>
      <div className="article__bottom container">
        <h2 className="article__bottom-title">По вашим интересам</h2>

        <div className="small__card-wrapper">
          <div className="small__card">
            <h3 className="small__card-title">
              Стали известны ёмкости аккумуляторов всех моделей iPhone 13
            </h3>
            <p className="small__card-describtion">
              Во время презентации iPhone 13 Apple придала большое значения...
            </p>
            <div className="small__card-caption">
              <img src="./home-img/home-card-digger.png" alt="" />
              <p className="small__card-caption__title">Digger.ru 14:25</p>
            </div>
          </div>
          <div className="small__card">
            <h3 className="small__card-title">
              Nature: ученые смогли доказать природное происхождение
              коронавируса SARS-CoV-2
            </h3>
            <p className="small__card-describtion">
              Во время презентации iPhone 13 Apple придала большое значение...
            </p>
            <div className="small__card-caption">
              <img src="./home-img/home-card-lenta.png" alt="" />
              <p className="small__card-caption__title">Lenta.ru 10:54</p>
            </div>
          </div>
          <div className="small__card">
            <h3 className="small__card-title">
              Китайская марка JAC повысила цены на лифтбек и пикап в России
            </h3>
            <p className="small__card-describtion">
              Две модели китайского бренда JAC из пяти, представленных на
              российском...
            </p>
            <div className="small__card-caption">
              <img src="./home-img/home-card-digger.png" alt="" />
              <p className="small__card-caption__title">Тарантас Ньюс 10:44</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
