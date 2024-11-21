import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./Product.module.css";
import ProductCard from "./ProductCard";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className={classes.products_container}>
      {products.length > 0 ? (
        products.map((singleProduct) => (
          <ProductCard product={singleProduct} key={singleProduct.id} />
        ))
      ) : (
        <p>Loading products...</p> // Display a loading message while products are being fetched
      )}
    </section>
  );
}

export default Product;
