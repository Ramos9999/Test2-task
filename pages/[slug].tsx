import { ReactElement, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { recordFetcher } from '@/utils/fetcher';
import InfinitePagination from '@/components/InfinitePagination';
import EntryContainer, { IEntry } from '@/components/EntryContainer';

interface PageProps {
  slug: string;
  query: string;
  pageNumber?: number;
  perPage?: number;
  searchResult?: [];
}

const PageResult: NextPage<PageProps> = ({
  query,
  searchResult = [],
  slug,
}: PageProps) => {
  const [data, setData] = useState<IEntry[]>(searchResult);

  const wrapPagination = (children: ReactElement) =>
    slug === 'repositories' ? (
      <InfinitePagination
        query={query}
        searchResult={data}
        setData={setData}
        slug={slug}>
        {children}
      </InfinitePagination>
    ) : (
      <>{children}</>
    );

  return wrapPagination(
    <div className="result-container">
      {!data?.[0] ? (
        <div className="no-data"> No data ...</div>
      ) : (
        data.map((el: IEntry) => (
          <EntryContainer key={el.id} element={el} slug={slug} />
        ))
      )}
    </div>,
  );
};

export const getServerSideProps = async ({
  ...params
}: {
  query: PageProps;
}) => {
  const { slug = '', query = '', pageNumber = 1, perPage = 30 } = params.query;

  const response = await recordFetcher(slug, query, pageNumber, perPage);

  return {
    props: {
      query: query,
      searchResult: response || [],
      slug: slug,
    },
  };
};

export default PageResult;
