interface ILatestShowProps {
  title: string;
  description: string;
  thumbnailUrl: string;
}

const LatestShow = (props: ILatestShowProps) => {
  return (
    <div className="card">
      <img
        src={props.thumbnailUrl}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button className="btn btn-primary">Watch Now</button>
      </div>
    </div>
  );
};

export default LatestShow