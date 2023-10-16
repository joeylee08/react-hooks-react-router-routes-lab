import { directors } from "../data";
import NavBar from "../components/NavBar";

function Directors() {

  const mapped = directors.map(item => {
    const movies = item.movies.map(movie => {
      return <li key={movie}>{movie}</li>
    })

    return (
    <article key={item.name}>
      <h2>{item.name}</h2>
      <ul>{movies}</ul>
    </article>
    )
  })
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {mapped}
      </main>
    </>
  );
};

export default Directors;
