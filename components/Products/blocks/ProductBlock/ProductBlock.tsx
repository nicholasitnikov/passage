import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import styles from './ProductBlock.module.css';

interface IProductBlock {
    images: string[];
    index: number;
}

const ProductBlock: FC<IProductBlock> = ({ images, index }) => {
    const { loading } = useAppSelector((store) => store.products);

    const [currentImage, setCurrentImage] = useState(0);

    const firstImage = () => {
        setCurrentImage(0);
    };

    const secondImage = () => {
        if (images.length === 2) {
            setCurrentImage(1);
        } else {
            setCurrentImage(0);
        }
    };

    return (
        <motion.article
            className={styles.product}
            initial={{
                transform: 'scale(.75)',
                opacity: 0,
            }}
            animate={{
                transform: loading ? 'scale(.75)' : 'scale(1)',
                opacity: loading ? 0.2 : 1,
            }}
            transition={{ delay: index * 0.02 }}
        >
            <img
                className={styles.image}
                src={`/img/items/${images[currentImage]}`}
                onMouseEnter={() => {
                    secondImage();
                }}
                onMouseLeave={() => firstImage()}
            />
            <div className={styles.headingContainer}>
                <h3 className={styles.heading}>
                    Gucci Interlocking GG print tee
                </h3>
            </div>
            <div className={styles.info}>
                <span className={styles.category}>Мужские футболки</span>
                <p className={styles.price}>29 900 руб.</p>
                <p className={styles.discount}>22 500 руб.</p>
                <a className={styles.link}>Подробнее</a>
                <button className={styles.addtocart}></button>
            </div>
        </motion.article>
    );
};

export default ProductBlock;
