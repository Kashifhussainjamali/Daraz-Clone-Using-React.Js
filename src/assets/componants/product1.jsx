import style from "./product1.module.css";

const Product1 = ({ data, copen, temp1, temp2 }) => {
  const open = () => {
    copen.current.style.visibility = "visible";
    copen.current.style.transitionDelay = "0.2s";
    temp2(data.price);
  };

  return (
    <>
      <div className={style["product-main"]}>
        <img src={data.image} alt="" />
        <div className={style["text-div"]}>
          <p style={{ backgroundColor: "white" }}>{data.name}</p>
          <p className={style["price"]}>Rs.{data.price}</p>
          <pre className={style["discount-price"]}>
            <s>Rs.{data.originalPrice}</s> {data.discount}%
          </pre>
          <button className={style["buy-button"]} onClick={open}>
            Buy
          </button>
        </div>
      </div>
    </>
  );
};
export default Product1;
