import style from "./add1.module.css";

function Add1() {
  return (
    <>
      <div className={style["adds-main-div"]}>
        <img src="img1.webp" alt="" className={style["img1"]} />
        <img src="add1.png" alt="" className={style["img2"]} />
      </div>
    </>
  );
}
export default Add1;
