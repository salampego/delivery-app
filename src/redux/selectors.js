export const getItem = (state) => state.products.items;
export const getLoading = (state) => state.products.isLoading;
export const getMenu = (state) => state.products.restrauntById;
export const getLoadingBasket = (state) => state.basket.isLoading;
export const getBasket = (state) => state.basket.items;
export const getError = (state) => state.basket.error;
export const getHistoryOrder = (state) => state.basket.data;
