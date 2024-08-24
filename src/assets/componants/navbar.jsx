import style from "./navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  return (
    <>
      <ul className={style["main-navbar"]}>
        <li className={style["img-listitem"]}>
          {" "}
          <img src="logo.png" alt="" />
        </li>

        <li className={style["search"]}>
          <input
            type="text"
            placeholder="Search in Daraz"
            className={style["search-input"]}
          />
          <div className={style["search-icon-div"]}>
            <CiSearch className={style["search-icon"]} />
          </div>
        </li>
        <FiShoppingCart className={style["cart-icon"]} />
      </ul>
    </>
  );
}
export default Navbar;
