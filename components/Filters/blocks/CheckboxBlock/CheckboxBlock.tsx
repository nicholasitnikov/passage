import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { updateFilter } from '../../../../store/slices/filtersSlice';
import {
    endLoading,
    setRandomFilter,
    startLoading,
} from '../../../../store/slices/productsSlice';
import styles from './CheckboxBlock.module.css';

const CheckboxBlock: React.FC<{ label: string; withColor?: boolean }> = ({
    label,
    withColor,
}) => {
    const { selectedFilters } = useAppSelector((store) => store.filters);
    const dispatch = useAppDispatch();
    const toggleChecked = () => {
        dispatch(startLoading());

        setTimeout(() => {
            dispatch(updateFilter(label));
            dispatch(setRandomFilter());
            dispatch(endLoading());
        }, 500);
    };

    return (
        <fieldset className={styles.container} onClick={toggleChecked}>
            <input
                className={styles.input}
                type='checkbox'
                name='checkbox'
                defaultChecked={selectedFilters.includes(label)}
            />
            <label
                htmlFor='checkbox'
                className={`${styles.label} ${
                    selectedFilters.includes(label) && styles.selected
                }`}
            >
                {label}
            </label>
            {withColor && (
                <div
                    className={styles.color}
                    style={{
                        background:
                            label === 'Красный'
                                ? 'red'
                                : label === 'Зелёный'
                                ? 'green'
                                : label === 'Бежевый'
                                ? '#f5f5dc'
                                : label === 'Белый'
                                ? 'white'
                                : label === 'Розовый'
                                ? 'pink'
                                : label === 'Синий'
                                ? 'blue'
                                : label === 'Оранжевый'
                                ? 'orange'
                                : 'black',
                    }}
                ></div>
            )}
        </fieldset>
    );
};

export default CheckboxBlock;
