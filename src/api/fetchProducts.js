const fetchProducts = async (category) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
         return data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export default fetchProducts;