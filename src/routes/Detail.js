import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null); // 상태 변수를 추가 : 영화 정보 저장

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();
      console.log(json);
      setMovieData(json.data.movie); // 영화 정보를 state에 저장
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]); // id 값이 변경될 때마다 호출

  console.log(id);

  // 영화 데이터가 로드되기 전에 렌더링을 시도할 경우를 처리
  if (!movieData) {
    return <h1>Loading...</h1>;
  }

  // 영화 데이터가 로드된 후에 렌더링
  return (
    <div>
      <h1>{movieData.title}</h1>
      <img src={movieData.background_image} alt={movieData.title} />
      <ul className="box_wrap">
        <li>
          {movieData.genres.map(
            (
              g // ID와 같은 고유한 값이 없기 때문에 'g'와 같이 아무 값이나 주어도 괜찮은 것이다
            ) => (
              <li key={g} className="box yellow">
                {g}
              </li>
            )
          )}
        </li>
      </ul>
    </div>
  );
}

export default Detail;
