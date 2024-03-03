import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

function Movie({ id, rating, title, coverImg, summary, genres }) {
  return (
    <div key="movie.id" className="movie">
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
        {/* <a href="/movie">{title}</a> 
        로 하지 않는 이유 : 로드가 되기 때문! */}
      </h2>
      <p>{rating}</p>
      <p>
        <StarRating rating={rating} />
      </p>
      <img src={coverImg} alt={title} />
      <p>{summary.length > 200 ? `${summary.slice(0, 200)}` : summary}</p>
      <ul className="box_wrap">
        {genres.map(
          (
            g // ID와 같은 고유한 값이 없기 때문에 'g'와 같이 아무 값이나 주어도 괜찮은 것이다
          ) => (
            <li key={g} className="box yellow">
              {g}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
