import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css";
import NavBar from "../components/NavBar";
import TripleSpinner from "../components/Spinner";

function Detail() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const getDetails = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json()
    setTitle(json.data.movie.title);
    setDescription(json.data.movie.description_full);
    setLoading(false);
  }
  useEffect(() => {
    getDetails()
  })
  return (
    <div className="App">
      <NavBar />
      {loading ?
        <div className={styles.loader}>
          <TripleSpinner />
        </div> :
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      }
    </div>
  );
}
export default Detail;