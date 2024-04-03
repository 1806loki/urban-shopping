 const productCache = {};

 const getProductCacheKey = (category) => `products_${category}`;

 export const getProductsFromCache = (category) => productCache[getProductCacheKey(category)];

 export const setProductsToCache = (category, products) => {
     productCache[getProductCacheKey(category)] = products;
 };