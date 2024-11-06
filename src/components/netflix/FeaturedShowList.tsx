import FeaturedShow from "./FeaturedShow";

const FeaturedShowList = () => {
  return (
    <div className="row">
      <h3>Featured Shows | Props Demo</h3>

      <div className="col-md-4">
        <FeaturedShow
          title="Godfather"
          description="The most famous American crime drama series."
          category="Crime Thriller"
          publishedOn="3 months ago"
          thumbnailUrl="https://placehold.co/400x300/ffff00/000000?text=Godfather"
        />
      </div>

      <div className="col-md-4">
        <FeaturedShow
          title="The Good, The Bad and The Ugly"
          description="Spaghetti western about a good guy who gets a bad guy."
          category="Western"
          publishedOn="2 months ago"
          thumbnailUrl="https://placehold.co/400x300/ff0000/ffffff?text=TheGood,TheBad,TheUgly"
        />
      </div>
    </div>
  );
};

export default FeaturedShowList;
