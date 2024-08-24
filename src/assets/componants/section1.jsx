import style from "./section1.module.css";
import Product1 from "./product1";

const Section1 = ({ copen, temp1, temp2 }) => {
  let data1 = [
    {
      name: "M10 Earburds 70 hour battery most realiable...",
      price: 5200,
      originalPrice: "8,900",
      discount: -22,
      image: "pic1.webp",
    },
    {
      name: "ICALL HeadPhones For Gamming and so...",
      price: 12200,
      originalPrice: "18,900",
      discount: -21,
      image: "pic2.webp",
    },
    {
      name: "Ledies Full Burka Collerd Skin And blac...",
      price: 1200,
      originalPrice: "1,900",
      discount: -30,
      image: "pic3.webp",
    },
    {
      name: "Keratin Hear Care lotion for long and silky hairs ...",
      price: 6200,
      originalPrice: "8,900",
      discount: -30,
      image: "pic4.webp",
    },
    {
      name: "Wireless headphones best quality for calls and songs...",
      price: 3200,
      originalPrice: "4,200",
      discount: -16,
      image: "pic5.webp",
    },
    {
      name: "Track Soute for joging and night soute also for boys...",
      price: 2700,
      originalPrice: "3,500",
      discount: -21,
      image: "pic6.webp",
    },
  ];

  return (
    <>
      <h2 className={style["flash-sale"]}>Flash Sale</h2>
      <div className={style["section2-main-div"]}>
        <li className={style["onsale-div"]}>
          <p className={style["sale"]}>On Sale Now</p>
          <button className={style["shop"]}>SHOP ALL PRODUCTS</button>
        </li>
        <hr className={style["hr"]} />
        <div className={style["products-div"]}>
          {data1.map((data11) => (
            <Product1 data={data11} copen={copen} temp1={temp1} temp2={temp2} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Section1;
