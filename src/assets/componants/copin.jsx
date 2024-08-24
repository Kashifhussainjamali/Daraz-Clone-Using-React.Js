import { useRef } from "react";
import style from "./copin.module.css";
import { ImCancelCircle } from "react-icons/im";

const Copin = ({ ref1, bill1, bill2, temp1, temp2 }) => {
  let copincode = 1122;
  const ref11 = useRef();
  const ref2 = useRef();

  const billing = () => {
    if (Number(ref11.current.value) === copincode) {
      bill2(bill1 + (temp1 / 100) * 90);
      ref11.current.value = "";
      ref2.current.innerText = "Congrats You Got 10% Discount";
    } else {
      bill2(bill1 + temp1);
      ref2.current.innerText =
        "Sorry Wrong or without Copin You got 0% Discount";
    }
  };

  const close = () => {
    ref1.current.style.visibility = "hidden";
    temp2(0);
  };
  return (
    <>
      <div ref={ref1} className={style["Copin"]}>
        <button
          style={{ backgroundColor: "black", border: "none" }}
          onClick={close}
        >
          <ImCancelCircle className={style["xx"]} />
        </button>

        <h2 className={style["text"]}>
          If you Have Copin Enter Copin & Get 10% more Discount or else Click on
          Buy.
        </h2>
        <p className={style["product"]}>
          Product Price: {temp1} <br /> <br /> Its 10% Discount is:{" "}
          {(temp1 / 100) * 90}
        </p>
        <input
          type="text"
          placeholder="Enter Copin"
          className={style["input"]}
          ref={ref11}
        />
        <button className={style["buy"]} onClick={billing}>
          Buy Now
        </button>
        <button className={style["close"]} onClick={close}>
          Close
        </button>
        <p ref={ref2} className={style["mesage"]}></p>
        <h3 className={style["bill"]}>Your Total Bill is: {bill1}</h3>
      </div>
    </>
  );
};
export default Copin;
