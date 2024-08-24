import style from "./section2.module.css";

function Section2() {
  return (
    <>
      <h2 className={style["catogries"]}>Categories</h2>

      <ul className={style["ul1"]}>
        <li>
          <div className={style["item"]}>
            <img src="p1.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Messenger Bags</p>
          </div>
        </li>
        <li>
          <div className={style["item"]}>
            <img src="p2.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Sunglasses</p>
          </div>
        </li>
        <li>
          <div className={style["item"]}>
            <img src="p3.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Mobiles</p>
          </div>
        </li>
        <li>
          <div className={style["item"]}>
            <img src="p4.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Tote Bags</p>
          </div>
        </li>
        <li>
          <div className={style["item"]}>
            <img src="p5.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Dogs & Cats Bags</p>
          </div>
        </li>
        <li>
          <div className={style["item"]}>
            <img src="p6.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Tablers</p>
          </div>
        </li>
        <li>
          <div className={style["item"]}>
            <img src="p7.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Star Kits</p>
          </div>
        </li>
        <li>
          <div className={style["item"]}>
            <img src="p8.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Building Toys</p>
          </div>
        </li>
      </ul>

      <ul className={style["ul1"]}>
        <li>
          <div className={style["item"]}>
            <img src="p9.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Grander</p>
          </div>
        </li>
        <li>
          <div className={style["item"]}>
            <img src="p10.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Microphones</p>
          </div>
        </li>
        <li>
          <div className={style["item"]}>
            <img src="p11.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Towel Rails</p>
          </div>
        </li>
        <li>
          <div className={style["item"]}>
            <img src="p12.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Spacity</p>
          </div>
        </li>
        <li>
          <div className={style["item"]}>
            <img src="p13.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Zakat</p>
          </div>
        </li>
        <li>
          <div className={style["item"]}>
            <img src="p14.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Shower Caddies</p>
          </div>
        </li>
        <li>
          <div className={style["item"]}>
            <img src="p15.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Dining Sets</p>
          </div>
        </li>
        <li>
          <div className={style["item"]}>
            <img src="p16.webp" alt="" />
            <p style={{ backgroundColor: "white" }}>Injury Support</p>
          </div>
        </li>
      </ul>
    </>
  );
}
export default Section2;
