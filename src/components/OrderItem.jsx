import "./css/orderCart.css";

function OrderItem({ order }) {
  const { name, price, secondPrice, image, quantity } = order;
  return (
    <div className="order_wrapper">
      <div className="order__texts">
        <div className="order__right">
          <img className="order_img" src={image.mobile} alt="image" />
          <div>
            <h4 className="order__item_title">{name}</h4>
            <p>
              <span className="order__quantity">{quantity}</span>
              <span className="order__secondPrice">{secondPrice}</span>
            </p>
          </div>
        </div>
        <h4 className="order__item_price">{price}</h4>
      </div>
    </div>
  );
}

export default OrderItem;
