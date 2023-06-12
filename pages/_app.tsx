import type { AppProps } from 'next/app';
import React from 'react';

import '../styles/global.scss';
import Container from '@/components/Container';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Container>
    <Component {...pageProps} />
  </Container>
);

export default MyApp;
