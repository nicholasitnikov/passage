import React from 'react';
import styles from './InputBlock.module.css';

const InputBlock: React.FC<{ searchUpdateHandler: (s: string) => void }> = ({
    searchUpdateHandler,
}) => {
    return (
        <fieldset className={styles.inputContainer}>
            <input
                onChange={(e) => searchUpdateHandler(e.target.value)}
                name='searchValue'
                className={styles.input}
                placeholder='Поиск'
            />
        </fieldset>
    );
};

export default InputBlock;
