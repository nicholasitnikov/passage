import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './MenuBlock.module.css';
import { useInView } from 'react-intersection-observer';

const MenuBlock = () => {
    const { ref: firstRef, inView: firstInView } = useInView({
        threshold: 1,
    });

    const { ref: lastRef, inView: lastInView } = useInView({
        threshold: 1,
    });

    const listRef = useRef<any>();
    const [dragMode, setDragMode] = useState(false);
    const [listOffset, setListOffset] = useState(0);

    const menuItems = [
        'Latest',
        'Brands',
        'Clothing',
        'Footwear',
        'Accessories',
        'Lifestyle',
        'Gifts',
        'Sale',
        'Launches',
        'Features',
    ];

    const renderMenuItems = useMemo(() => {
        return menuItems.map((item, i) => {
            return (
                <li
                    className={`${styles.menuItem} ${i === 7 && styles.promo}`}
                    key={i}
                    ref={
                        i === 0
                            ? firstRef
                            : i === menuItems.length - 1
                            ? lastRef
                            : null
                    }
                >
                    <a className={styles.menuLink}>{item}</a>
                </li>
            );
        });
    }, []);

    const listStartDragHandler = (e: React.MouseEvent) => {
        setDragMode(true);
    };
    const listDraggingHandler = (e: React.MouseEvent) => {
        if (dragMode) {
            const offset = e.movementX + listOffset;
            if (offset <= 0) {
                setListOffset(e.movementX + listOffset);
            }
        }
    };
    const listStopDragHandler = (e: React.MouseEvent) => {
        setDragMode(false);
    };

    useEffect(() => {
        // console.log(Math.abs(listOffset));
        listRef.current.scrollTo(Math.abs(listOffset), 0);
    }, [listOffset]);

    return (
        <nav
            className={`${styles.container} ${
                !firstInView && styles.containerWithLeftGradient
            } ${!lastInView && styles.containerWithRightGradient}`}
        >
            <ul
                ref={listRef}
                className={styles.menu}
                onMouseDown={listStartDragHandler}
                onMouseMove={listDraggingHandler}
                onMouseUp={listStopDragHandler}
                onMouseOut={listStopDragHandler}
            >
                {renderMenuItems}
            </ul>
        </nav>
    );
};

export default MenuBlock;
