import React from "react";
import noDataFound from "../assets/images/nodata.png";

function Intro(props) {
  if (typeof props.element === "object" && props.element !== null) {
    const {
      number,
      symbol,
      atomic_mass,
      name,
      phase,
      summary,
      electron_configuration,
      shells
    } = props.element;

    const shellsString = shells.join(", ");
    const atomicMass = atomic_mass.toFixed(2);

    return (
      <div className="intro w-full sm:w-3/4 rounded-lg flex items-center justify-center">
        <div className="detail">
          <h2 className="text-2xl font-bold">{number}</h2>
          <h2 className="text-8xl font-bold">{symbol}</h2>
          <h2 className="text-2xl font-bold">{atomicMass}</h2>
          <h2 className="text-xl hidden md:block">[{shellsString}]</h2>
        </div>
        <div className="meta hidden md:block">
          <div className="desc">
            <h2 className="font-bold text-3xl pb-2">
              {name} ─ {phase}
            </h2>
            <p className="text-[16px]">{summary}</p>
          </div>
          <div className="pt-3">
            <p>{electron_configuration}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="intro w-full sm:w-3/4 rounded-lg flex items-center justify-center">
        <img src={noDataFound} alt="Sorry No Data Found" />
      </div>
    );
  }
}

export default Intro;