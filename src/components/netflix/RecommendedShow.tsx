interface RecommendedShowProps {
  id: number;
  title: string;
  description: string;
  category: string;
  publishedOn: string;
  thumbnailUrl: string;
  isInWatchlist: boolean;
  handleManageWatchlist: (index: number) => void;
  index: number;
}

const RecommendedShow = (props: RecommendedShowProps) => {
  return (
    <div className="card">
      <img
        src={props.thumbnailUrl}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <span className="badge rounded-pill text-bg-warning">#{props.id}</span>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.category}</li>
        <li className="list-group-item">Published {props.publishedOn}</li>
      </ul>

      <div className="card-body">
        <button className="btn btn-primary">Watch Now</button>
        <button
          className="btn btn-success ms-2"
          onClick={() => {
            props.handleManageWatchlist(props.index)
          }}
        >
          {props.isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
};

export default RecommendedShow;
