import React, { ReactElement, SyntheticEvent, useState } from 'react';

import Logo from '../Logo';
import ToggleInput from '../ToggleInput';

import styles from './SearchPanel.module.scss';
import { useRouter } from 'next/router';

const SearchPanel = ({
  placeHolder,
}: {
  placeHolder: string;
}): ReactElement => {
  const [query, setQuery] = useState<string>('');
  const [option, setOption] = useState<string>('users');
  const router = useRouter();

  const handleSubmit = (e: SyntheticEvent) => {
    if (query.length) {
      e.preventDefault();
      router.push({
        pathname: `/${option}`,
        query: {
          query: query,
        },
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.searchForm}>
          <input
            className={styles.searchInput}
            data-testid="input-search"
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeHolder}
            type="search"
            value={query}
          />
          <button
            data-testid="submit"
            type="submit"
            className={styles.searchSubmit}
            title="Submit">
            <Logo className={styles.searchLogo} srcLogo="/arrow-right.svg" />
          </button>
        </div>
        <ToggleInput
          options={['users', 'repositories']}
          selectedOption={option}
          setOption={setOption}
        />
      </form>
    </div>
  );
};

export default SearchPanel;
