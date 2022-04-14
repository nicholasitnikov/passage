import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { updateFilter } from '../../../../store/slices/filtersSlice';
import {
    endLoading,
    setRandomFilter,
    startLoading,
} from '../../../../store/slices/productsSlice';
import styles from './ButtonBlock.module.css';

const ButtonBlock: React.FC<{ label: string }> = ({ label }) => {
    const [checked, setChecked] = useState(false);
    const dispatch = useAppDispatch();
    const { selectedFilters } = useAppSelector((store) => store.filters);
    const toggleChecked = () => {
        setChecked(!checked);
        dispatch(startLoading());

        setTimeout(() => {
            dispatch(updateFilter(label));
            dispatch(setRandomFilter());
            dispatch(endLoading());
        }, 500);
    };

    return (
        <fieldset
            className={`${styles.container} ${
                selectedFilters.includes(label) && styles.selected
            }`}
            onClick={toggleChecked}
        >
            <input
                type='checkbox'
                className={styles.input}
                defaultChecked={selectedFilters.includes(label)}
            />
            <label className={styles.label}>{label}</label>
        </fieldset>
    );
};

export default ButtonBlock;
