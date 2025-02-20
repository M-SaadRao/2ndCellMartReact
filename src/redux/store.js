import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from 'redux-persist/lib/storage/session';
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// persist config
const persistConfig = {
    key: 'root',
    storage: storageSession,
};

// combine reducers
const rootReducer = combineReducers ({
    cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export const persistor = persistStore(store);

