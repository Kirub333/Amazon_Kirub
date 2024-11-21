import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../API/EndPoints";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loder";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setproduct] = useState({
    image: "",
    title: "Loading...",
    id: "",
    rating: { rate: 0, count: 0 },
    price: 0,
    description: "",
  });
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${BaseURL}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? <Loader /> : <ProductCard product={product} />}
    </LayOut>
  );
};

export default ProductDetail;
