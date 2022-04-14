import { Select } from 'antd';
import { useMemo } from 'react';
import { useAppDispatch } from '../../../../hooks/redux';
import {
    endLoading,
    setRandomFilter,
    startLoading,
} from '../../../../store/slices/productsSlice';
import styles from './SortItemBlock.module.css';

const { Option } = Select;

const SortItemBlock: React.FC<{ title: string; options: string[] }> = ({
    title,
    options,
}) => {
    const dispatch = useAppDispatch();

    const sortChangeHandler = () => {
        dispatch(startLoading());
        setTimeout(() => {
            dispatch(setRandomFilter());
            dispatch(endLoading());
        }, 500);
    };

    const renderOptions = useMemo(() => {
        return options.map((o, i) => {
            return (
                <Option className={styles.option} value={o} key={i}>
                    {o}
                </Option>
            );
        });
    }, [options]);

    return (
        <>
            <Select
                className={styles.select}
                dropdownClassName={styles.dropdown}
                defaultValue={title}
                style={{ textAlign: 'right' }}
                bordered={false}
                onChange={sortChangeHandler}
            >
                {renderOptions}
            </Select>
        </>
    );
};

export default SortItemBlock;
