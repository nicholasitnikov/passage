import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { show } from '../../store/slices/filtersSlice';
import SortItemBlock from '../FiltersBar/blocks/SortItemBlock/SortItemBlock';
import FilterBar from '../FiltersBar/FilterBar';
import ProductBlock from './blocks/ProductBlock/ProductBlock';
import styles from './Products.module.css';

const Products = () => {
    const dispatch = useAppDispatch();
    const { products, filteredProducts } = useAppSelector(
        (store) => store.products
    );

    const renderProducts = useMemo(() => {
        if (filteredProducts.length > 0) {
            return filteredProducts.map((p, i) => {
                return <ProductBlock images={p} key={i} index={i} />;
            });
        } else {
            return products.map((p, i) => {
                return <ProductBlock images={p} key={i} index={i} />;
            });
        }
    }, [products, filteredProducts]);

    return (
        <section className={styles.products}>
            <div className={styles.header}>
                <div className={styles.headingContainer}>
                    <h4 className={styles.heading}>234 products</h4>
                    <button
                        onClick={() => dispatch(show())}
                        className={styles.filterButton}
                    >
                        Фильтры
                    </button>
                </div>
                <div className={styles.sort}>
                    <SortItemBlock
                        title='Стоимость'
                        options={['Стоимость', 'По возрастанию', 'По убыванию']}
                    />
                    <SortItemBlock
                        title='Популярность'
                        options={[
                            'Популярность',
                            'По возрастанию',
                            'По убыванию',
                        ]}
                    />
                </div>

                <FilterBar />
            </div>
            <div className={styles.productsGrid}>{renderProducts}</div>
        </section>
    );
};

export default Products;
