import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card"
import { UseFetch, UseTitle } from "../hooks";
export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = UseFetch(apiPath, queryTerm);
  // eslint-disable-next-line no-unused-vars
  const pageTitle = UseTitle(`Search result for ${queryTerm}`);
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-green-700 dark:text-white">{movies.length === 0 ? `No result found for ${queryTerm}` : `result for ${queryTerm}`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
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
