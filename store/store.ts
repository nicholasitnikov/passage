import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filtersSlice';
import productsReducer from './slices/productsSlice';

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        products: productsReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
