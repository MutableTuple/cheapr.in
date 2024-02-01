import React from "react";
import Card from "./Card.component";

const courses = [
  {
    productImage: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
    productTitle: "The Complete JavaScript Course 2024: From Zero to Expert!",
    productStrikePrice: 199.0,
    productPrice: 398.0,
    productDescription:
      "Made at the renowned Fabriano paper mill in Italy. Acid free paper. Vibrant color pallette,Soft surface,80gsm. Ideal for photocopies, laser and inkjet prints, fax, dividers, covers, collages, craft & punch craft; suitable in particular for office and schools, and all technical paper uses. ",
  },
  {
    productImage: "https://img-c.udemycdn.com/course/240x135/4202866_e521.jpg",
    productTitle:
      "Web Scraping in Python Selenium, Scrapy + ChatGPT Prize 2024",
    productStrikePrice: 3199.0,
    productPrice: 399.0,
    productDescription:
      "Made at the renowned Fabriano paper mill in Italy. Acid free paper. Vibrant color pallette,Soft surface,80gsm. Ideal for photocopies, laser and inkjet prints, fax, dividers, covers, collages, craft & punch craft; suitable in particular for office and schools, and all technical paper uses. ",
  },
  {
    productImage:
      "https://img-c.udemycdn.com/course/240x135/3693164_f87d_3.jpg",
    productTitle: "TensorFlow Developer Certificate Bootcamp",
    productStrikePrice: 399.0,
    productPrice: 399.0,
    productDescription:
      "Made at the renowned Fabriano paper mill in Italy. Acid free paper. Vibrant color pallette,Soft surface,80gsm. Ideal for photocopies, laser and inkjet prints, fax, dividers, covers, collages, craft & punch craft; suitable in particular for office and schools, and all technical paper uses. ",
  },
];

const ProductsCourses = () => {
  return (
    <section className="products">
      <h1>Best Courses on the Internet.</h1>
      <br />
      <hr />
      <div className="products__section">
        {courses.map((product) => (
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

export default ProductsCourses;
