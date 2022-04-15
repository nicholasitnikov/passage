import React, { useEffect, useState } from 'react';

export const useSize = () => {
    const [width, setWidth] = useState(0);
    const [height, setWHeight] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            setWidth(window.innerWidth);
            setWHeight(window.innerHeight);
        });
    }, []);

    return { width, height };
};
