import DefaultProps from '@/typings/DefaultProps';
import { recordFetcher } from '../../utils/fetcher';
import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import styles from './InfinitePagination.module.scss';

interface IInfinitePagination extends DefaultProps {
  searchResult: any[];
  setData: Dispatch<SetStateAction<any[]>>;
  slug: string;
  query: string;
}

const InfinitePagination = ({
  searchResult,
  setData,
  slug,
  query,
  children,
}: IInfinitePagination): ReactElement => {
  const [page, setPage] = useState(2);
  const [requestSent, setRequestSent] = useState(false);
  const [noMoreData, setNoMoreData] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);
    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  });

  const handleOnScroll = () => {
    if (
      window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight &&
      !noMoreData && !requestSent
    ) {
      setRequestSent(true);
      setPage(page + 1);
      setTimeout(
        () =>
          recordFetcher(slug, query, page).then((newData: []) => {
            setData([...searchResult, ...newData]);
            setNoMoreData(newData.length === 0);
            setRequestSent(false);
          }),
        2000,
      );
    }
  };

  return (
    <div>
      {children}
      {(() => {
        return requestSent ? (
          <div className={styles.loading}>Loading ......</div>
        ) : (
          <></>
        );
      })()}
      {noMoreData ? <div className={styles.loading}>No more data</div> : <></>}
    </div>
  );
};

export default InfinitePagination;
