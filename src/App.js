import { useEffect, useState } from "react";
import Movie from "./Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // 방법 1
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false); // loading이 끝났기 때문에 false로 만들어줘야 함
  };
  useEffect(() => {
    getMovies();
  }, []); // [] <= 어떤 것도 주시하지 않음, 한 번만 작동함
  console.log(movies);

  // 방법 2
  // const getMovies = async() => { // then을 쓰지 않고 쓰는 방법
  //   const response = await fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  //     )
  //   const json = await response.json()
  //   setMovies(json.data.movies)
  //   setLoading(false)
  // }
  // useEffect(() => {
  //   getMovies()
  // }, []) // []

  // 방법 3
  // useEffect(() => {
  //   fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  //     )
  //       .then(response => response.json())
  //       .then(json => {
  //         setMovies(json.data.movies)
  //         setLoading(false) // loading이 끝났기 때문에 false로 만들어줘야 함
  //       })
  // }, []) // [] <= 어떤 것도 주시하지 않음, 한 번만 작동함
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              coverImg={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default App;
