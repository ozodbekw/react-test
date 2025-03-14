import "./css/dessert.css";
function Dessert({ product }) {
  const { image, name, price, category } = product;
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
        <img src={image.thumbnail} alt={name} className="cart-image" />
      </picture>
      <button className="cart-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          fill="none"
          viewBox="0 0 21 20"
        >
          <g fill="#C73B0F" clipPath="url(#a)">
            <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
            <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.333 0h20v20h-20z" />
            </clipPath>
          </defs>
        </svg>
        Add to Cart
      </button>

      <div className="cart-text">
        <span className="cart-category">{category}</span>
        <h2 className="cart-title">{name}</h2>
        <span className="cart-price">${price}</span>
      </div>
    </div>
  );
}

export default Dessert;
