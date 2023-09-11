
import { Card } from "../components/Card"
import { UseFetch } from "../hooks/UseFetch";
import { UseTitle } from "../hooks";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = UseFetch(apiPath);
  // eslint-disable-next-line no-unused-vars
  const pageTitle = UseTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {
            movies.map((movie) => {
              return (
                <Card key={movie.id} movie={movie} />
              )
            })
          }
        </div>
      </section>
    </main>
  )
}
