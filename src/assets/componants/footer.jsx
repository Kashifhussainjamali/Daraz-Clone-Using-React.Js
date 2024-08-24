import style from "./footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

function Footer() {
  return (
    <>
      <ul className={style["main-ul"]}>
        <ul className={style["innter-ul"]}>
          <li className={style["header"]}>Customer Care</li>
          <li className={style["inner-li"]}>Help Center</li>
          <li className={style["inner-li"]}>How to Buy</li>
          <li className={style["inner-li"]}>Corporate & Bulk Purchasing</li>
          <li className={style["inner-li"]}>Returns & Refunds</li>
          <li className={style["inner-li"]}>Daraz Shop</li>
          <li className={style["inner-li"]}>Contact Us</li>
          <li className={style["inner-li"]}>Purchase Protection</li>
          <li className={style["inner-li"]}>Daraz Pick up Points</li>
        </ul>

        <ul className={style["innter-ul1"]}>
          <li className={style["header"]}>Daraz</li>
          <li className={style["inner-li"]}>About Us</li>
          <li className={style["inner-li"]}>Digital Payments</li>
          <li className={style["inner-li"]}>Daraz Donates</li>
          <li className={style["inner-li"]}>Daraz Blog</li>
          <li className={style["inner-li"]}>Terms & Conditions</li>
          <li className={style["inner-li"]}>Privacy Policy</li>
          <li className={style["inner-li"]}>NTN Number : 4012118-6</li>
          <li className={style["inner-li"]}>STRN Number : 1700401211818</li>
          <li className={style["inner-li"]}>Online Shopping App</li>
          <li className={style["inner-li"]}>Online Grocery Shopping</li>
          <li className={style["inner-li"]}>Daraz Exclusive</li>
          <li className={style["inner-li"]}>Daraz University</li>
        </ul>

        <li>
          <img
            src="daez.png"
            alt=""
            style={{ marginLeft: "100px", marginRight: "30px" }}
          />
        </li>
        <li>
          <img src="accs.png" alt="" />
        </li>
      </ul>
      <div className={style["footer-div"]}>
        <ul className={style["Last-ul"]}>
          <li className={style["Last-li"]}>Daraz International</li>
          <li className={style["Last-li"]}>Follow Us</li>
          <li className={style["Last-li1"]}>© Daraz 2024</li>
        </ul>
        <div style={{ display: "flex", backgroundColor: "white" }}>
          <ul className={style["footer-div"]}>
            <li className={style["liii"]}>
              <img src="ban.png" alt="" className={style["flag"]} />
              Bngladesh
              <img src="my.png" alt="" className={style["flag"]} />
              Myanmar
              <img src="nepal.png" alt="" className={style["flag"]} />
              Nepal
              <img src="pak.png" alt="" className={style["flag"]} />
              Pakistan
              <img src="sri.png" alt="" className={style["flag"]} />
              Sri lanka
            </li>
          </ul>
          <ul className={style["icons"]}>
            <li style={{ backgroundColor: "white" }}>
              <FaFacebook className={style["fb"]} />
            </li>
            <li style={{ backgroundColor: "white" }}>
              <FaInstagramSquare className={style["insta"]} />
            </li>
            <li style={{ backgroundColor: "white" }}>
              <FaTwitter className={style["tw"]} />
            </li>
            <li style={{ backgroundColor: "white" }}>
              <AiOutlineGlobal className={style["in"]} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Footer;
