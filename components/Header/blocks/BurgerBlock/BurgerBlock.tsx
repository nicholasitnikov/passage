import { motion } from 'framer-motion';
import { useMemo } from 'react';
import styles from './BurgerBlock.module.css';

const BurgerBlock: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const menuItems = [
        'Latest',
        'Brands',
        'Clothing',
        'Footwear',
        'Accessories',
        'Lifestyle',
        'Gifts',
        'Sale',
        'Launches',
        'Features',
    ];

    const renderMenuItems = useMemo(() => {
        return menuItems.map((item, i) => {
            return (
                <motion.li
                    className={`${styles.menuItem} ${i === 7 && styles.promo}`}
                    key={i}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.05 * i }}
                    animate={{
                        opacity: 1,
                    }}
                >
                    <a className={styles.menuLink}>{item}</a>
                </motion.li>
            );
        });
    }, []);

    return (
        <motion.div
            className={styles.container}
            initial={{
                left: '-100%',
            }}
            animate={{
                left: '0%',
            }}
            exit={{
                left: '-100%',
            }}
        >
            <button className={styles.closeButton} onClick={onClose}></button>
            <ul className={styles.menu}>{renderMenuItems}</ul>
        </motion.div>
    );
};

export default BurgerBlock;
