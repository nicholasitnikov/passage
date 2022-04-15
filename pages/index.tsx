import type { NextPage } from 'next';
import Filters from '../components/Filters/Filters';
import Header from '../components/Header/Header/Header';
import Products from '../components/Products/Products';

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Filters />
            <Products />
        </>
    );
};

export default Home;
