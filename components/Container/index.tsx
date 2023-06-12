import React, { ReactElement } from 'react';
import styles from './Container.module.scss';
import Head from 'next/head';

const Container = ({ children }: { children?: ReactElement }): ReactElement => (
  <>
    <Head>
      {/* this line is for not let favicon return in the server side props */}
      <link rel="icon" href="/" />
    </Head>
    <div className={styles.container}>{children}</div>
  </>
);

export default Container;
