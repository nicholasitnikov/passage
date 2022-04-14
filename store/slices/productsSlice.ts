import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface Products {
    products: string[][];
    filteredProducts: string[][];
    loading: boolean;
}

function shuffle(array: any[]) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

// Define the initial state using that type
const initialState: Products = {
    products: [
        [
            '04-04-2022_ML_221-M242-0099_1_1.jpg',
            '04-04-2022_ML_221-M242-0099_m9_1.jpg',
        ],
        [
            '04-04-2022_ML_N40-0591-9999_1_1.jpg',
            '04-04-2022_ML_N40-0591-9999_m9_1.jpg',
        ],
        [
            '05-04-2022_GH_N50-0191-9999_1_1.jpg',
            '05-04-2022_GH_N50-0191-9999_m9_1.jpg',
        ],
        ['06-04-2022_ML_KHSHSS2210-BLK_m9_1.jpg'],
        [
            '06-04-2022_AJ_I030333-0WZ67_m9_1.jpg',
            '06-04-2022_AJ_I030333-0WZ67_1_1.jpg',
        ],
        ['06-04-2022_ML_KHSHSS2210-BLK_1_1.jpg'],
        ['07-04-2022_LL_I030451-89GD_m4_1.jpg'],
        [
            '07-04-2022_LL_OMGA196C99FAB0041001_1_1.jpg',
            '07-04-2022_LL_OMGA196C99FAB0041001_m4_1.jpg',
        ],
        ['08-04-2022_AJ_8120-NT_1_1.jpg', '08-04-2022_AJ_8120-NT_m9_1.jpg'],
        [
            '08-04-2022_AJ_BGQ12221010-BKW_1_1.jpg',
            '08-04-2022_AJ_BGQ12221010-BKW_m9_1.jpg',
        ],
        ['08-04-2022_AJ_S22MSHI002-BWH_1_1.jpg'],
    ],
    filteredProducts: [],
    loading: false,
};

export const filtersSlice = createSlice({
    name: 'products',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setRandomFilter: (state) => {
            state.filteredProducts = state.products;
            shuffle(state.filteredProducts);
        },
        clearFilter: (state) => {
            state.filteredProducts = [];
        },
        startLoading: (state) => {
            state.loading = true;
        },
        endLoading: (state) => {
            state.loading = false;
        },
    },
});

export const { setRandomFilter, clearFilter, startLoading, endLoading } =
    filtersSlice.actions;

export default filtersSlice.reducer;
