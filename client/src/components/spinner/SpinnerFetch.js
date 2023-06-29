import { useState, CSSProperties } from "react";
import {BeatLoader }from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  position:"absolute",
  borderColor: "red",
  top: "45%",
  left:"45%",
  fontSize: "10px",
 
};

function SpinnerFetch({loading}) {
 
  let [color, setColor] = useState("white");

  return (
    <div className="sweet-loading" style={{position:'relative', minHeight:"100vh",  backgroundColor:"#03092C"}}>
      

      <BeatLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default SpinnerFetch