import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import BurgerBlock from '../blocks/BurgerBlock/BurgerBlock';
import MenuBlock from '../blocks/MenuBlock/MenuBlock';
import styles from './Header.module.css';

const Header = () => {
    const [burgerIsVisible, setBurgerIsVisible] = useState(false);

    const toggleBurger = () => {
        setBurgerIsVisible(!burgerIsVisible);
    };

    return (
        <header className={styles.header}>
            <span className={styles.conterBurger}></span>
            <img
                className={styles.logo}
                src='/img/logo.png'
                alt='Покровский пассаж'
            />
            <MenuBlock />
            <button className={styles.burger} onClick={toggleBurger}></button>
            <AnimatePresence>
                {burgerIsVisible && <BurgerBlock onClose={toggleBurger} />}
            </AnimatePresence>
        </header>
    );
};

export default Header;
