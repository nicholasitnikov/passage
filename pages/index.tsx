import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Filters from '../components/Filters/Filters';
import Header from '../components/Header/Header/Header';
import Products from '../components/Products/Products';
import styles from '../styles/Home.module.css';

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
