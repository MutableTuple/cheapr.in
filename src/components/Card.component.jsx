import React from "react";
import "../styles/card.styles.scss";

const Card = ({
  productImage,
  productTitle,
  productDescription,
  productStrikePrice,
  productPrice,
}) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={productImage} alt={productTitle} />
      </div>

      <div className="card__text">
        <h1>{productTitle}.</h1>
        <p id="price">{productPrice}₹</p>
        <p>{productDescription}.</p>

        <div className="card__buttons">
          <a href="">
            <button className="view">
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
                alt=""
              /> */}
              View
            </button>
          </a>
          <a href="">
            <button className="save">Save</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
