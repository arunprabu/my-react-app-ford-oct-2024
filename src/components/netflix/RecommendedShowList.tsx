import { useState } from "react";
import RecommendedShow from "./RecommendedShow";

const RecommendedShowList = () => {
  const [shows, setShows] = useState([
    {
      id: 5467897,
      title: "Planet Earth",
      description:
        "Planet Earth is a British science fiction television series created by and starring Edward Holmes.",
      category: "Sci-Fi",
      publishedOn: "2 months ago",
      thumbnailUrl:
        "https://placehold.co/400x300/0000ff/ffffff?text=PlanetEarth",
      isInWatchlist: false,
    },
    {
      id: 54678945,
      title: "Man Vs Wild",
      description:
        "Man Vs Wild is a British science fiction television series created by and starring Edward Holmes.",
      category: "Infotainment",
      publishedOn: "2 months ago",
      thumbnailUrl: "https://placehold.co/400x300/ff0000/ffffff?text=ManVsWild",
      isInWatchlist: false,
    },
  ]);

  const handleManageWatchlistInParentComponent = (index: number) => {
    console.log(index);

    // updating state immutably
    const duplicateShows = [...shows];
    duplicateShows[index].isInWatchlist = !duplicateShows[index].isInWatchlist;
    setShows(duplicateShows);
  };

  return (
    <div className="row">
      <h3>
        Recommended Shows | Props, States, Events, Conditional Rendering, Lists
        & Keys Demo
      </h3>
      {
        // Ternary Operator for conditional rendering
        shows.length > 0 ? (

          // Let's loop thru -- Lists & Keys 
          shows.map((show, index) => {
            console.log(index);
            return (
              <div className="col-md-3" key={show.id}>
                <RecommendedShow
                  id={show.id}
                  title={show.title}
                  description={show.description}
                  category={show.category}
                  publishedOn={show.publishedOn}
                  thumbnailUrl={show.thumbnailUrl}
                  isInWatchlist={show.isInWatchlist}
                  handleManageWatchlist={handleManageWatchlistInParentComponent}
                  index={index}
                />
              </div>
            );
          })
          
        ) : (
          <div className="alert alert-warning" role="alert">
            No Recommended Shows Available. Please watch some shows.
          </div>
        )
      }
    </div>
  );
};

export default RecommendedShowList;
