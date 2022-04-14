import { Slider } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { updateFilter } from '../../../../store/slices/filtersSlice';
import {
    endLoading,
    setRandomFilter,
    startLoading,
} from '../../../../store/slices/productsSlice';
import styles from './RangeBlock.module.css';

const RangeBlock = () => {
    const [values, setValues] = useState({ min: 10, max: 190 });
    const { selectedFilters } = useAppSelector((store) => store.filters);
    const dispatch = useAppDispatch();

    const animationStartedRef = useRef(false);
    const handleChange = (val: [number, number]) => {
        dispatch(updateFilter(`Цена: от ${val[0]}000 до ${val[1]}000`));
        if (!animationStartedRef.current) {
            console.log('hello');
            animationStartedRef.current = true;
            dispatch(startLoading());
            dispatch(setRandomFilter());
            setInterval(() => {
                dispatch(endLoading());
                animationStartedRef.current = false;
            }, 1500);
        }

        setValues({ ...values, min: val[0], max: val[1] });
    };

    useEffect(() => {
        if (selectedFilters.length === 0) {
            setValues({ ...values, min: 5, max: 200 });
        }
    }, [selectedFilters]);

    return (
        <div className={styles.container}>
            <Slider
                onChange={handleChange}
                tooltipVisible={false}
                range
                defaultValue={[10, 190]}
                min={5}
                max={200}
                className={styles.slider}
            />
            <span className={styles.label}>RUB{values.min}000</span>
            <span className={styles.label}>RUB{values.max}000</span>
        </div>
    );
};

export default RangeBlock;
