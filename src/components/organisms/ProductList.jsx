/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react"; // Added useRef for the end-of-products div
import { useSelector } from "react-redux";
import ProductCard from "./../molecules/ProductCard";
import { selectCategoryProducts } from "../../redux/slicers/productSlice";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const originalProducts = useSelector(selectCategoryProducts);
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const endOfProductsRef = useRef(null); // Ref for the end-of-products div

  // Repeat each item in products array 12 times
  const products = originalProducts.flatMap((product) =>
    Array(12).fill(product)
  );

  useEffect(() => {
    setLoading(false); // Reset loading state
  }, [originalProducts]); // Reset loading state when originalProducts change

  const handleIntersection = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !loading) {
      setPage((prevPage) => prevPage + 1);
      setLoading(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1.0,
    });

    if (endOfProductsRef.current) {
      observer.observe(endOfProductsRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      <h1 className="font-bold text-3xl p-2 ml-[15vh]">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-28 mb-12">
        {products &&
          products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.thumbnail}
              title={product.title}
              price={product.price}
              id={product.id}
            />
          ))}
        {loading && <div>Loading...</div>}
        <div ref={endOfProductsRef} className="end-of-products" />
      </div>
    </>
  );
};

export default ProductList;
