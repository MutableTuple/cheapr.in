import React from "react";
import "../styles/products.styles.scss";
import Card from "./Card.component";

const products = [
  {
    productImage:
      "https://m.media-amazon.com/images/I/41ijKCnEgoL._SX300_SY300_QL70_FMwebp_.jpg",
    productTitle:
      "BRUSTRO Copytinta Coloured Craft Paper A4 Size 80 GSM Mixed Soft Colour 40 Sheets Pack (10 cols X 4 Sheets) Double Side Color for Office Printing, Art and Craft.",
    productStrikePrice: 199.0,
    productPrice: 94.0,
    productDescription:
      "Made at the renowned Fabriano paper mill in Italy. Acid free paper. Vibrant color pallette,Soft surface,80gsm. Ideal for photocopies, laser and inkjet prints, fax, dividers, covers, collages, craft & punch craft; suitable in particular for office and schools, and all technical paper uses. ",
  },
  {
    productImage: "https://m.media-amazon.com/images/I/71qhSal6ZBL._SX522_.jpg",
    productTitle:
      "boAt Immortal Katana Blade TWS Gaming Earbuds with Metal Glider, RGB LEDs, 50ms Latency, Upto 50 Hrs Playtime, ASAP™ Charge, Gliding Blade Sound, 13mm Driver, IWPᵀᴹ(Gunmetal Black).",
    productStrikePrice: 3199.0,
    productPrice: 2299.0,
    productDescription:
      "Made at the renowned Fabriano paper mill in Italy. Acid free paper. Vibrant color pallette,Soft surface,80gsm. Ideal for photocopies, laser and inkjet prints, fax, dividers, covers, collages, craft & punch craft; suitable in particular for office and schools, and all technical paper uses. ",
  },
  {
    productImage: "https://m.media-amazon.com/images/I/71qhSal6ZBL._SX522_.jpg",
    productTitle:
      "boAt Immortal Katana Blade TWS Gaming Earbuds with Metal Glider, RGB LEDs, 50ms Latency, Upto 50 Hrs Playtime, ASAP™ Charge, Gliding Blade Sound, 13mm Driver, IWPᵀᴹ(Gunmetal Black).",
    productStrikePrice: 3199.0,
    productPrice: 2299.0,
    productDescription:
      "Made at the renowned Fabriano paper mill in Italy. Acid free paper. Vibrant color pallette,Soft surface,80gsm. Ideal for photocopies, laser and inkjet prints, fax, dividers, covers, collages, craft & punch craft; suitable in particular for office and schools, and all technical paper uses. ",
  },
];

const ProductsGoods = () => {
  return (
    <section className="products">
      <h1>Products under 100₹</h1>
      <br />
      <hr />
      <div className="products__section">
        {products.map((product) => (
          <Card
            productImage={product.productImage}
            productTitle={product.productTitle.slice(0, 80)}
            productStrikePrice={product.productStrikePrice}
            productPrice={product.productPrice}
            productTitle={product.productTitle.slice(0, 80)}
            productDescription={product.productDescription.slice(0, 100)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsGoods;
