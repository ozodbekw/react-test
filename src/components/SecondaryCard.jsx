// css
import "./css/secondaryCard.css";

function SecondaryCard({ data }) {
  return (
    <div className="seconadryCard">
      <h3 className="seconadryCard-title">Главное</h3>
      {data.map((item) => (
        <div key={item.id} className="seconadryCard-card">
          <h3 className="seconadryCard-card__title">{item.title}</h3>
          <p className="seconadryCard-card__describtion">{item.describtion}</p>
        </div>
      ))}
    </div>
  );
}

export default SecondaryCard;
