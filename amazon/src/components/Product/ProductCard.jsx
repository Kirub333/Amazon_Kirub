import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { BsFillCartXFill } from "react-icons/bs";

function ProductCard({
  product,
  flex,
  renderDesc,
  renderAdd,
  showRemoveItem,
  itemAmount,
  total,
}) {
  const { image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  const removeItemImmediately = () => {
    dispatch({
      type: Type.REMOVE_ITEM_IMMEDIATELY,
      id,
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CurrencyFormat amount={price} />
          {itemAmount && (
            <p style={{ fontWeight: "500", color: "var(--primary-color)" }}>
              Quantity: {itemAmount}
            </p>
          )}
          {total && (
            <p style={{ fontWeight: "500", color: "var(--primary-color)" }}>
              Total: ${price * itemAmount}
            </p>
          )}
          {showRemoveItem && (
            <button
              className={classes.button}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "7px",
                padding: "5px",
              }}
              onClick={removeItemImmediately}
            >
              <BsFillCartXFill size={20} />
              Remove Item
            </button>
          )}
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
