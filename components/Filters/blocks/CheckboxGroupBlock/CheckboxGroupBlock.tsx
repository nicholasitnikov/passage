import { useMemo } from 'react';
import SimpleBar from 'simplebar-react';
import CheckboxBlock from '../CheckboxBlock/CheckboxBlock';
import styles from './CheckboxGroupBlock.module.css';

interface ICheckboxGroupBlockProps {
    twoColumns?: boolean;
    content: string[];
    extra?: string;
}

const CheckboxGroupBlock: React.FC<ICheckboxGroupBlockProps> = ({
    twoColumns,
    content,
    extra,
}) => {
    const renderContent = useMemo(() => {
        return content.map((c, i) => {
            return (
                <CheckboxBlock
                    label={c}
                    key={i}
                    withColor={extra === 'WITHCOLOR'}
                />
            );
        });
    }, [content]);

    return (
        <SimpleBar style={{ maxHeight: 300 }}>
            <div
                className={`${styles.checkboxGroup} ${
                    twoColumns && styles.checkboxGroupTwoColumns
                }`}
            >
                {renderContent}
            </div>
        </SimpleBar>
    );
};

export default CheckboxGroupBlock;
