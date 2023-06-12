import Container from '@/components/Container';
import Logo from '@/components/Logo';
import SearchPanel from '@/components/SearchPanel';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div className='home-container'>
    <Logo srcLogo="/github-mark-white.svg" altMessage="Github logo" />
    <SearchPanel placeHolder="Search here ..." />
  </div>
);

export default Home;
