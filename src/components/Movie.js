import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Movie({ id, coverImg, title, rating, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h2>
        <Link to={`/movie/${id}`}>{title}:{rating}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map(g => <li key={g}>{g}</li>)}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;