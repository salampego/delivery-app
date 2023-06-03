import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { basketSlice } from "./basket/sliceBasket";
import { productsReducer } from "./products/sliceProducts";

const persistConfig = {
  key: "basket",
  storage,
  whitelist: ["items"],
};

const persistedReducer = persistReducer(persistConfig, basketSlice.reducer);

export const store = configureStore({
  reducer: {
    products: productsReducer,
    basket: persistedReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
