import { motion } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import SimpleBar from 'simplebar-react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useSize } from '../../hooks/useSize';
import { hide } from '../../store/slices/filtersSlice';
import FilterBlock from './blocks/FilterBlock/FilterBlock';
import styles from './Filters.module.css';

const Filters = () => {
    const { visible } = useAppSelector((store) => store.filters);
    const dispatch = useAppDispatch();
    const { width } = useSize();

    const { filters, selectedFilters } = useAppSelector(
        (store) => store.filters
    );

    const renderFilters = useMemo(() => {
        return filters.map((f, i) => {
            return <FilterBlock key={i} filter={f} />;
        });
    }, [filters]);

    useEffect(() => {
        let request: any = {};

        filters.map((f) => {
            if (!request[f.slug]) {
                request[f.slug] = [];
            }
            request[f.slug] = f.content.filter((el) =>
                selectedFilters.includes(el)
            );
            if (f.slug === 'price') {
                const priceFilter = selectedFilters.find((el) =>
                    el.includes('Цена')
                );
                if (priceFilter) {
                    request.price = {
                        from: Number(priceFilter?.split(' ')[2]),
                        to: Number(priceFilter?.split(' ')[4]),
                    };
                }
            }
        });

        console.log(request);
    }, [filters, selectedFilters]);

    useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [visible]);

    return (
        <>
            <motion.button
                onClick={() => dispatch(hide())}
                style={{ right: visible ? '0px' : '-40px' }}
                className={styles.closeButton}
            ></motion.button>
            <motion.div
                animate={{
                    opacity: visible ? 1 : 0,
                }}
                className={styles.overlay}
            ></motion.div>
            <motion.div
                style={{
                    left: visible ? '0px' : width > 900 ? '0px' : '-280px',
                }}
                className={styles.filtersContainer}
            >
                <SimpleBar style={{ width: '100%', height: '100%' }}>
                    <aside className={styles.filters}>{renderFilters}</aside>
                </SimpleBar>
            </motion.div>
        </>
    );
};

export default Filters;
