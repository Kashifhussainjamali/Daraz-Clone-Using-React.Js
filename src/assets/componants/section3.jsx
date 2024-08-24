import style from "./section3.module.css";
import Product1 from "./product1";

const Section3 = ({ copen, temp1, temp2 }) => {
  let data1 = [
    {
      name: "Wall Clock for Home and Offices be...",
      price: 9200,
      originalPrice: "11,300",
      discount: -26,
      image: "i1.webp",
    },
    {
      name: "Soap Stand Beautiful product...",
      price: 900,
      originalPrice: "1,300",
      discount: -10,
      image: "i2.webp",
    },
    {
      name: "Mobile And key wall stand then...",
      price: 1900,
      originalPrice: "2,300",
      discount: -13,
      image: "i3.webp",
    },
    {
      name: "ChargeAble Hand Fan best for every where...",
      price: 1100,
      originalPrice: "2,300",
      discount: -30,
      image: "i4.webp",
    },
    {
      name: "Smart Watch Pink Color Best Featur...",
      price: 3999,
      originalPrice: "7,300",
      discount: -40,
      image: "i5.webp",
    },
    {
      name: "Wireless AirPodes Black Color Best Batter...",
      price: 3100,
      originalPrice: "4,300",
      discount: -20,
      image: "i6.webp",
    },
    {
      name: " 2 in 1 Dermo rollar with o...",
      price: 355,
      originalPrice: "1,300",
      discount: -64,
      image: "i7.webp",
    },
    {
      name: " Choclate Box For Home and...",
      price: 2255,
      originalPrice: "3,300",
      discount: -24,
      image: "i8.webp",
    },
    {
      name: " Lighting Sun flowers for home decorations...",
      price: 3355,
      originalPrice: "5,300",
      discount: -35,
      image: "i9.webp",
    },
    {
      name: "Birthday party wall for ranovati...",
      price: 1505,
      originalPrice: "5,300",
      discount: -74,
      image: "i10.webp",
    },
    {
      name: "Doubble sides trangolar for studio...",
      price: 2355,
      originalPrice: "4,400",
      discount: -34,
      image: "i11.webp",
    },
    {
      name: "Black Metal watch for mens collec...",
      price: 1355,
      originalPrice: "2,300",
      discount: -38,
      image: "i12.webp",
    },
    {
      name: "Lighting Sun flowers for home decorations...",
      price: 3099,
      originalPrice: "5,300",
      discount: -28,
      image: "i13.webp",
    },
    {
      name: "Best Air Buds In White Color For Mens In Studio...",
      price: 3999,
      originalPrice: "6,300",
      discount: -43,
      image: "i14.webp",
    },
    {
      name: "Kitchen Lighter Best for wo...",
      price: 250,
      originalPrice: "450",
      discount: -20,
      image: "i20.webp",
    },
    {
      name: "Wolet for Men thats are cards...",
      price: 1100,
      originalPrice: "1,600",
      discount: -25,
      image: "i15.webp",
    }
  ];

  return (
    <>
      <h2 className={style["just"]}>Just For You</h2>
      <div className={style["just-products"]}>
        {data1.map((result) => (
          <Product1 data={result} copen={copen} temp1={temp1} temp2={temp2} />
        ))}
      </div>
    </>
  );
};
export default Section3;
