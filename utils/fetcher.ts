export const recordFetcher = (
  slug: string,
  query: string,
  pageNumber: number,
  perPage: number = 30,
) =>
  fetch(
    `http://localhost:3000/api/${slug}/?${slug}=${query}&pageNumber=${pageNumber}&perPage=${perPage}`,
  )
    .then((res) => res.json())
    .then((data) => data);

export const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data);
