import classes from "./header.module.css";
import { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import amazon_letter_logo from "../../assets/images/logo/amazon_letter_white_logo.png";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  const [{ basket }] = useContext(DataContext);

  // Calculate the total number of items in the cart
  const totalItems = basket.reduce((count, item) => count + item.amount, 0);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* Logo section */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img src={amazon_letter_logo} alt="amazon logo" />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
              <option value="">Art and crafts</option>
              <option value="">Automotive</option>
              <option value="">Books</option>
              <option value="">Electronics</option>
              <option value="">Software</option>
              <option value="">Baby</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>

          {/* Cart and other sections */}
          <div className={classes.order__container}>
            <Link to="/" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="Flag of USA"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItems}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
