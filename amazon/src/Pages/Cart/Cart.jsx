import React, { useContext } from "react";
import classes from "./cart.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Type } from "../../Utility/action.type";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2>Hello {user?.email?.split("@")[0]}</h2>
              <h3>Your shopping basket </h3>
            </div>
          </div>

          <hr />
          {basket?.length === 0 ? (
            <p>Oops ! No item in your cart</p>
          ) : (
            basket?.map((item, i) => (
              <section className={classes.cart_product} key={i}>
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                  showRemoveItem={true}
                />
                <div className={classes.btn_container}>
                  <button
                    className={classes.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={20} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={classes.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" id="giftCheckBox" />
              <label htmlFor="giftCheckBox">
                <small>This order contains a gift</small>t
              </label>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
