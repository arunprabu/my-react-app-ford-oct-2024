import { useState } from "react";
import LatestShow from "./LatestShow";

const LatestShowList = () => {
  console.log("1. Program Started");

  const [resolution, setResolution] = useState("HD");
  const [show, setShow] = useState([
    {
      id: 43564756,
      title: "The Big Bang Theory",
      description: "The Big Bang Theory is a comedy television series created by Seth MacFarlane.",
      category: "Comedy",
      publishedOn: "2 months ago",
      thumbnailUrl: "https://placehold.co/400x300/ff0000/ffffff?text=TheBigBangTheory",
    },
    {
      id: 43543564,
      title: "Ancient Aliens",
      description: "Ancient Aliens is a science fiction television series created by Seth MacFarlane.",
      category: "Sci-Fi",
      publishedOn: "2 months ago",
      thumbnailUrl: "https://placehold.co/400x300/ffff00/000000?text=AncientAliens",
    }
  ]);

  const handleChangeResolution = () => {  
    console.log("Called");
    setResolution("4K");
  }

  console.log("2. Program Ended");
  return (
    <div className="row">
      <h3>Latest Shows | States and Events Demo</h3>
      <h4>
        Watch the Latest Shows in {resolution} |{" "}
        <button className="btn btn-info" 
          onClick={handleChangeResolution}>Change Resolution</button>
      </h4>
      <div className="col-md-3">
        <LatestShow 
          title={show[0].title}
          description={show[0].description}
          thumbnailUrl={show[0].thumbnailUrl}
          />
      </div>
      
    </div>
  );
};

export default LatestShowList;
