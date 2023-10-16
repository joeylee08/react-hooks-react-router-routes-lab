import { movies } from "../data";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom"

function Movie() {
  const params = useParams()

  const currentMovie = movies.find(item => {
    return item.title === params.title
  })

  const genres = currentMovie.genres.map(item => {
    return <span key={item}>{item}</span>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{currentMovie.title}</h1>
        <p>Runtime: {currentMovie.time} minutes</p>
        {genres}
      </main>
    </>
  );
};

export default Movie;
