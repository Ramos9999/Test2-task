import React, { useEffect, useState } from 'react';
import styles from './Forks.module.scss';
import { fetcher } from '../../utils/fetcher';

interface IFork {
  created_at: string;
  full_name?: string;
}

const Forks = ({ forkUrl }: { forkUrl: string }) => {
  const [forks, setForks] = useState<string[]>([]);
  const [errorCall, seErrorCall] = useState<boolean>(false);

  useEffect(() => {
    const arr: string[] = [];
    let i = 0;
    fetcher(forkUrl).then((res) => {
      seErrorCall(Object.keys(res).includes('message'));

      while (true) {
        if (i < res.length && i < 3) {
          if (res[i]['full_name']) arr.push(res[i++]['full_name']);
        } else break;
      }

      setForks(arr);
    });
  }, []);

  return (
    <div className={styles.container}>
      {!errorCall && forks.length > 0 ? (
        <>
          <span className={styles.tag}>Forks:</span>
          {forks.map((fork: string, index: number) => (
            <div key={`${fork}-${index}`} className={styles.fork}>
              {fork}
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Forks;
