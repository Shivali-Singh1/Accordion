import React, { useState } from "react";
import { questions } from "../Api";
import "./Accordion.css";
import MyAccordion from "./Myaccordion";
const Accordion = () => {
  const [data, setData] = useState(questions);
  return (
    <section className="main-div">
      <h1>React interview questions</h1>
      {data.map((curElem, id) => {
        return <MyAccordion key={id} {...curElem} />;
      })}
    </section>
  );
};
export default Accordion;
