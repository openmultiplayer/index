import React, { FC } from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Error from "next/error";
import useSWR from "swr";
import { map } from "lodash/fp";

import { apiSSP, apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/error";
import { Hit, SearchResults } from "src/types/searchResult";

type Params = {
  q: string;
};

type Props = {
  query: string;
  results: SearchResults | null;
  error: string;
};

const resultToItem = (h: Hit) => <li>{h.id}</li>;

const Results: FC<Partial<Props>> = ({ query, results }) => {
  const { data, error } = useSWR<SearchResults, APIError>(
    `/docs/search?q=${query}`,
    apiSWR,
    {
      initialData: results || undefined,
    }
  );
  if (error) {
    return <p>{error.message}</p>;
  }
  if (!data) {
    return <p>"Loading..."</p>;
  }

  return <ul>{map(resultToItem)(data.hits)}</ul>;
};

const Form: FC = () => (
  <form>
    <input type="text" name="q" />
    <button type="submit">Search</button>{" "}
  </form>
);

const Page: FC<Props> = ({ query, results, error }) => {
  if (error) {
    return <Error statusCode={500} title={error} />;
  }

  return (
    <section className="center measure-wide">
      <Form />
      {query && (
        <>
          <h1>{results?.total_hits} Search Results</h1>
          <Results query={query} results={results} />
        </>
      )}
    </section>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext<Params>
): Promise<GetServerSidePropsResult<Props>> => {
  const query = (context.query as Params).q || "";
  const result = await apiSSP<SearchResults>(`/docs/search?q=${query}`);
  if (result.isError()) {
    return { props: { query, results: null, error: result.error().message! } };
  }
  return { props: { query, results: result.value(), error: "" } };
};

export default Page;
