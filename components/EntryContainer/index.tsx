import React from 'react';

import styles from './EntryContainer.module.scss';
import Image from 'next/image';
import Badges from '../Badges';
import Forks from '../Forks';

export interface IEntry {
  id: string;
  avatar_url?: string;
  login?: string;
  name?: string;
  description?: string;
  languages_url?: string;
  forks_url?: string;
  html_url: string;
}

interface IEntryContainer {
  slug: string;
  element: IEntry;
}

const EntryContainer = ({ element, slug }: IEntryContainer) => {
  return (
    <div className={styles.container}>
      {element['avatar_url'] && (
        <Image
          alt={'User Avatar'}
          className={styles.avatarImage}
          height={100}
          src={element['avatar_url']}
          width={100}
        />
      )}
      <div className={styles.info}>
        {element.login && (
          <div className={styles.username}>
            <span className={styles.tag}>Username:</span> {element.login}
          </div>
        )}
        {element.name && (
          <div className={styles.name}>
            <span className={styles.tag}>Name: </span>
            {element.name}
          </div>
        )}
        {element.description && (
          <div className={styles.description}>
            <span className={styles.tag}>Description:</span>
            {element.description}
          </div>
        )}
        {element['languages_url'] && (
          <Badges languagesUrl={element['languages_url']} />
        )}
        {element['forks_url'] && <Forks forkUrl={element['forks_url']} />}
        {element['html_url'] && (
          <a
            className={styles.username}
            href={element['html_url']}
            target="_blank">
            <button className={styles.goToProfile}>
              {slug === 'users' ? 'Go to profile' : 'Go to repository'}
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default EntryContainer;
