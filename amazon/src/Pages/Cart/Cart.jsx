import React, { useContext } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import styles from "./cart.module.css";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ProductCard from "../../components/Product/ProductCard";
import { BsFillCartXFill } from "react-icons/bs";

function Cart() {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  const total = basket.reduce(
    (amount, item) => amount + item.price * item.amount,
    0
  );

  const increment = (item) => {
    // Increment the item quantity by 1
    dispatch({
      type: "ADD_TO_BASKET",
      item,
    });
  };

  const decrement = (id) => {
    // Decrement the item quantity by 1
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  const removeItem = (id) => {
    // Remove the item entirely
    dispatch({
      type: "REMOVE_ITEM_IMMEDIATELY",
      id,
    });
  };

  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.cart__container}>
          <h3>Your Shopping Basket</h3>
          <hr />

          {basket.length === 0 ? (
            <p>Oops! No items in your cart.</p>
          ) : (
            basket.map((item) => (
              <div key={item.id} className={styles.cart_product}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                  showRemoveItem={false}
                />
                <div className={styles.btn_container}>
                  <button
                    className={styles.btn}
                    onClick={() => increment(item)} // Increment by 1
                  >
                    <IoIosArrowUp size={20} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={styles.btn}
                    onClick={() => decrement(item.id)} // Decrement by 1
                  >
                    <IoIosArrowDown size={20} />
                  </button>
                  <button
                    className={`${styles.btn} ${styles.remove_btn}`}
                    onClick={() => removeItem(item.id)} // Remove item entirely
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            ))
          )}

          {basket.length > 0 && (
            <div
              className={styles.subtotal}
              style={{ position: "absolute", top: "20px", right: "20px" }}
            >
              <p>Subtotal: </p>
              <CurrencyFormat amount={total.toFixed(2)} />
              <Link to="/payments">Proceed to Checkout</Link>
            </div>
          )}
        </div>
      </section>
    </LayOut>
  );
}

export default Cart;
