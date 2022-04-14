import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
    cleanCurrentFilters,
    updateFilter,
} from '../../store/slices/filtersSlice';
import {
    endLoading,
    setRandomFilter,
    startLoading,
} from '../../store/slices/productsSlice';
import styles from './FilterBar.module.css';

const FilterBar = () => {
    const { selectedFilters } = useAppSelector((store) => store.filters);
    const dispatch = useAppDispatch();

    const renderFilters = useMemo(() => {
        return selectedFilters.map((f, i) => {
            return (
                <li
                    className={styles.item}
                    key={i}
                    onClick={() => {
                        dispatch(startLoading());
                        setTimeout(() => {
                            dispatch(updateFilter(f));
                            dispatch(setRandomFilter());
                            dispatch(endLoading());
                        }, 500);
                    }}
                >
                    {f}
                </li>
            );
        });
    }, [selectedFilters]);

    return selectedFilters.length === 0 ? null : (
        <ul className={styles.filterBar}>
            {renderFilters}
            <span
                className={styles.reset}
                onClick={() => {
                    dispatch(startLoading());
                    setTimeout(() => {
                        dispatch(cleanCurrentFilters());
                        dispatch(endLoading());
                    }, 500);
                }}
            >
                Очистить
            </span>
        </ul>
    );
};

export default FilterBar;
