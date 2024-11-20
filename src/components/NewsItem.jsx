
import image from '../assets/NEWS.jpg'
const NewsItem = ({title,description,src,url}) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{maxWidth:"340px"}}
    >
      <img
        src={src?src:image}
        style={{ height: "200px", width: "320px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Discover the buzz! This card highlights a noteworthy event that recently unfolded in the United States—stay curious and dive in for the details!"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem
