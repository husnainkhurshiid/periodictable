import React, { useEffect, useState } from "react";
import "../App.css";
import data from "../source/elements-detail.json";
import Intro from "./intro.js";

function Element() {
  const [elem, setElem] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  useEffect(() => {
    setElem(data);
  }, []);

  const updateElement = (item) => {
    setSelectedElement(item);
  };

  return (
    <div className="main">
      <div className="right">
        <Intro element={selectedElement} />
        <div className="elements w-full justify-center sm:w-[3.5]/4">
          {elem.map((item, index) => {
            return (
                <div
                  className="card flex items-center justify-center rounded-lg "
                  key={index}
                >
                  <button onClick={() => updateElement(item)}>
                    <h2
                      className="text-center text-white font-bold text-lg"
                      id={index}
                    >
                      {item.symbol}
                    </h2>
                  </button>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Element;
