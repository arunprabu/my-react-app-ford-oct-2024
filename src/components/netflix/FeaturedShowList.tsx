import FeaturedShow from "./FeaturedShow";

const FeaturedShowList = () => {
  return (
    <div className="row">
      <h3>Featured Shows | Props Demo</h3>

      <div className="col-md-3">
        <FeaturedShow
          title="Godfather"
          category="Crime Thriller"
          publishedOn="3 months ago"
          thumbnailUrl="https://placehold.co/400x300/ffff00/000000?text=Godfather"
        >
          The most famous American crime drama series.
        </FeaturedShow>
      </div>

      <div className="col-md-3">
        <FeaturedShow
          title="The Good, The Bad and The Ugly"
          category="Western"
          publishedOn="2 months ago"
          thumbnailUrl="https://placehold.co/400x300/ff0000/ffffff?text=TheGood,TheBad,TheUgly"
        >
          Spaghetti western about a good guy who gets a bad guy.
        </FeaturedShow>
      </div>
    </div>
  );
};

export default FeaturedShowList;
