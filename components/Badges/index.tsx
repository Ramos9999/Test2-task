import { fetcher } from '../../utils/fetcher';
import React, { ReactElement, useEffect, useState } from 'react';

import styles from './Badges.module.scss';

const Badges = ({ languagesUrl }: { languagesUrl: string }): ReactElement => {
  const [badges, setBadges] = useState<string[]>([]);
  const [errorCall, seErrorCall] = useState<boolean>(false);

  useEffect(() => {
    fetcher(languagesUrl).then((res) => {
      seErrorCall(Object.keys(res).includes('message'));
      setBadges(Object.keys(res));
    });
  }, []);

  return (
    <div className={styles.container}>
      {!errorCall && badges.length > 0 ? (
        <>
          <span className={styles.tag}>Badges:</span>
          {badges.map((badge: string) => (
            <div key={badge} className={styles.badge}>
              {badge}
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Badges;
