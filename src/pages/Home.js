import { movies } from "../data";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom"
 
function Home() {
  const mapped = movies.map(item => {
    return (
      <>
        <MovieCard key={item.title} title={item.title} />
        <Link to={`/movie/${item.title}`}>View Info</Link>
      </>
    )
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {mapped}
      </main>
    </>
  );
};

export default Home;
