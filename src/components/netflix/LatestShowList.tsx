import { useState } from "react";
import LatestShow from "./LatestShow";

const LatestShowList = () => {
  // States 
  // State is component-wide updatable data
  const [resolution, setResolution] = useState("HD"); 

  const handleChangeResolution = () => {
    console.log("Called");
    setResolution("4K");
  }

  return (
    <div className="row">
      <h3>Latest Shows | States and Events Demo</h3>
      <h4>
        Watch the Latest Shows in {resolution} |{" "}
        <button className="btn btn-info" onClick={handleChangeResolution}>Change Resolution</button>
      </h4>
      <div className="col-md-3">
        <LatestShow />
      </div>
    </div>
  );
};

export default LatestShowList;
