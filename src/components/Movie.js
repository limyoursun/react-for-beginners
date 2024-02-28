import PropTypes from "prop-types";
function Movie({ title, coverImg, summary, genres }) {
  return (
    <div key="movie.id">
      <h2>{title}</h2>
      <img src={coverImg} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map(
          (
            g // ID와 같은 고유한 값이 없기 때문에 'g'와 같이 아무 값이나 주어도 괜찮은 것이다
          ) => (
            <li key={g}>{g}</li>
          )
        )}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;