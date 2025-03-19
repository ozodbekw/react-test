import "./css/dessert.css";
import Button from "./Button";

import { useDispatch } from "react-redux";
import {
  increaseQuality,
  decreaseQuality,
  addToCart,
} from "../app/features/cartSlice";
import { useEffect, useState } from "react";

function Dessert({ product }) {
  const dispatch = useDispatch();
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  useEffect(() => {
    setAlreadyAdded(product.amount !== 0);
  }, [product.amount]);

  const { image, name, price, category } = product;

  const addDessert = (product) => {
    dispatch(addToCart(product.id));
  };
  return (
    <div className="cart">
      <picture>
        <source
          className="cart-image"
          srcSet={image.mobile}
          media="(min-width: 380px)"
        />
        <source srcSet={image.tablet} media="(min-width: 768px)" />
        <source srcSet={image.desktop} media="(min-width: 1024px)" />
        <img
          style={{ borderColor: alreadyAdded && "#c73b0f" }}
          src={image.thumbnail}
          alt={name}
          className="cart-image"
        />
      </picture>
      <div className="cart-button">
        {!alreadyAdded && (
          <button
            className="add-to-cart"
            onClick={() => {
              addDessert(product);
              setAlreadyAdded(true);
            }}
          >
            <img src="./images/icon-add-to-cart.svg" alt="" />
            Add to cart
          </button>
        )}
        {alreadyAdded && (
          <div className="increment-decrement-btns ">
            <button
              className="amount-change-btn"
              onClick={() => dispatch(decreaseQuality(product.id))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 2"
              >
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </button>
            <span>{product.amount}</span>
            <button
              className="amount-change-btn"
              onClick={() => dispatch(increaseQuality(product.id))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="cart-text">
        <span className="cart-category">{category}</span>
        <h2 className="cart-title">{name}</h2>
        <span className="cart-price">${price}</span>
      </div>
    </div>
  );
}

export default Dessert;
