import React, { useRef, useState } from "react";
import Navbar from "./assets/componants/navbar";
import Add1 from "./assets/componants/add1";
import Section1 from "./assets/componants/section1";
import Section2 from "./assets/componants/section2";
import Section3 from "./assets/componants/section3";
import Load from "./assets/componants/loadmore";
import Footer from "./assets/componants/footer";
import Copin from "./assets/componants/copin";

function App() {
  let copen = useRef();
  let [bill1, bill2] = useState(0);
  let [temp1, temp2] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Add1></Add1>
      <Section1 copen={copen} temp1={temp1} temp2={temp2}></Section1>
      <Section2></Section2>
      <Section3 copen={copen} temp1={temp1} temp2={temp2}></Section3>
      <Load></Load>
      <Footer></Footer>
      <Copin
        ref1={copen}
        bill1={bill1}
        bill2={bill2}
        temp1={temp1}
        temp2={temp2}
      >
      </Copin>
    </>
  );
}

export default App;
