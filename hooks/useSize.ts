import React, { useEffect, useState } from 'react';

export const useSize = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            setWidth(window.innerWidth);
        });
    }, []);

    return { width };
};
