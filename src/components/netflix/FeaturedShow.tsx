interface IFeaturedShowProps {
  title: string;
  category: string;
  publishedOn: string;  
  thumbnailUrl: string;
  children?: string;
}

const FeaturedShow = (props: IFeaturedShowProps) => {
  // receiveing data from parent compoent
  console.log(props);
  // props are objects
  // props are passed to child components
  // props are read-only

  return (
    <div className="card">
      <img src={props.thumbnailUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.children}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.category}</li>
        <li className="list-group-item">Published {props.publishedOn}</li>
      </ul>

      <div className="card-body">
        <button className="btn btn-primary">Watch Now</button>
      </div>
    </div>
  );
};

export default FeaturedShow;
