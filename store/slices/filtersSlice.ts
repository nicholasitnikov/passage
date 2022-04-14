import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface IFilter {
    slug: string;
    type: string;
    content: string[];
    title: string;
    extra?: string;
}

// Define a type for the slice state
interface FiltersState {
    visible: boolean;
    filters: IFilter[];
    selectedFilters: string[];
}

// Define the initial state using that type
const initialState: FiltersState = {
    visible: false,
    selectedFilters: [],
    filters: [
        {
            slug: 'brand',
            title: 'Бренд',
            type: 'CHECKBOX',
            content: [
                'Marni',
                'Moschino',
                'DSquared2',
                'Victoria Beckham',
                'Maison Margiela',
                'Lanvin',
                'Alexander Wang',
                'Isabel Marant',
                'Giambattista Valli',
                'Zimmermann',
                'Chloe',
                'Celine',
                'Paul Smith',
                'Balmain',
                'Thom Browne',
                'Berluti',
                'Max Mara',
                'Diesel',
                'DKNY',
                'Off-White',
                'Lacoste',
                'Michael Kors',
                'Stella McCartney',
                'Oscar de la Renta',
                'Ermenegildo Zegna',
                'Miu Miu',
                'Tom Ford',
                'Ralph Lauren',
                'Kenzo',
                'Calvin Klein',
                'Bottega Veneta',
                'Comme Des Garcons',
                'Burberry',
                'Dior',
                'Alexander McQueen',
                'Hermes',
                'Giorgio Armani',
                'Salvatore Ferragamo',
                'Valentino',
                'Hugo Boss',
                'Fendi',
                'Balenciaga',
                'Givenchy',
                'Dolce & Gabbana',
                'Prada',
                'Versace',
                'Chanel',
                'Saint Laurent',
                'Gucci',
                'Louis Vuitton',
            ],
        },
        {
            slug: 'size',
            title: 'Размер',
            type: 'BUTTON',
            content: [
                'XS-ExtraSmall',
                'S-Small',
                'M-Medium',
                'L-Large',
                'XL-Large',
                'XXL-Large',
                'XXXL-Large',
            ],
        },
        {
            slug: 'color',
            title: 'Цвет',
            type: 'CHECKBOX',
            extra: 'WITHCOLOR',
            content: [
                'Зелёный',
                'Красный',
                'Белый',
                'Бежевый',
                'Розовый',
                'Синий',
                'Оранжевый',
                'Чёрный',
                'Фиолетовый',
            ],
        },
        {
            slug: 'price',
            title: 'Цены',
            type: 'RANGE',
            content: [],
        },
    ],
};

export const filtersSlice = createSlice({
    name: 'filters',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        show: (state) => {
            state.visible = true;
        },
        hide: (state) => {
            state.visible = false;
        },
        updateFilter: (state, action: PayloadAction<string>) => {
            if (
                state.selectedFilters.find(
                    (el) =>
                        el.includes(action.payload) ||
                        action.payload.includes('Цена')
                )
            ) {
                if (state.selectedFilters.includes(action.payload)) {
                    state.selectedFilters = state.selectedFilters.filter(
                        (el) => {
                            return el !== action.payload;
                        }
                    );
                    return;
                }

                state.selectedFilters = state.selectedFilters.filter((el) => {
                    return !el.includes(action.payload);
                });

                state.selectedFilters = state.selectedFilters.filter((el) => {
                    return !el.includes('Цена');
                });

                if (action.payload.includes('Цена')) {
                    state.selectedFilters.push(action.payload);
                }
            } else {
                state.selectedFilters.push(action.payload);
            }
        },
        cleanCurrentFilters: (state) => {
            state.selectedFilters = [];
        },
    },
});

export const { show, hide, updateFilter, cleanCurrentFilters } =
    filtersSlice.actions;

export default filtersSlice.reducer;
