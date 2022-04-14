import React, { useState } from 'react';
import ButtonGroupBlock from '../ButtonsGroupBlock/ButtonsGroupBlock';
import InputBlock from '../InputBlock/InputBlock';
import styles from './FilterBlock.module.css';
import { motion } from 'framer-motion';
import RangeBlock from '../RangeBlock/RangeBlock';
import CheckboxGroupBlock from '../CheckboxGroupBlock/CheckboxGroupBlock';
import { IFilter } from '../../../../store/slices/filtersSlice';

const FilterBlock: React.FC<{ filter: IFilter }> = ({ filter }) => {
    const [opened, setOpened] = useState(true);
    const [searchFilter, setSearchFilter] = useState('');
    const toggleOpened = (e: React.MouseEvent<Element>) => {
        const target = e.target as HTMLElement;
        if (
            Array.from(target.classList).some(
                (el) => el.indexOf('header') > -1
            ) ||
            Array.from(target.classList).some((el) => el.indexOf('arrow') > -1)
        ) {
            setOpened(!opened);
        }
    };

    const searchUpdateHandler = (s: string) => {
        setSearchFilter(s);
    };

    return (
        <motion.div
            className={styles.filterBlock}
            onClick={(e) => toggleOpened(e)}
            transition={{ type: 'tween' }}
            animate={{
                height: opened ? 'auto' : '30px',
            }}
        >
            <div className={styles.header}>
                <h3 className={styles.heading}>{filter.title}</h3>
                <motion.div
                    transition={{ type: 'tween' }}
                    animate={{
                        transform: opened ? 'rotate(0deg)' : 'rotate(180deg)',
                    }}
                    className={styles.arrow}
                ></motion.div>
            </div>
            <form name='search'>
                {filter.type !== 'RANGE' && (
                    <InputBlock searchUpdateHandler={searchUpdateHandler} />
                )}
                {filter.type === 'CHECKBOX' && (
                    <CheckboxGroupBlock
                        extra={filter.extra}
                        content={filter.content.filter((el) => {
                            return el
                                .toLowerCase()
                                .includes(searchFilter.toLowerCase());
                        })}
                    />
                )}
                {filter.type === 'BUTTON' && (
                    <ButtonGroupBlock
                        content={filter.content.filter((el) => {
                            return el
                                .toLowerCase()
                                .includes(searchFilter.toLowerCase());
                        })}
                    />
                )}
                {filter.type === 'RANGE' && <RangeBlock />}
            </form>
        </motion.div>
    );
};

export default FilterBlock;
