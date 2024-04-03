/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import ProductCard from "./../molecules/ProductCard";
import { selectCategoryProducts } from "../../redux/slicers/productSlice";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const products = useSelector(selectCategoryProducts);
  let { category } = useParams();

  return (
    <>
      <h1 className="font-bold text-3xl p-2 ml-[15vh]">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-28">
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.thumbnail}
              title={product.title}
              price={product.price}
              id={product.id}
            />
          ))}
      </div>
    </>
  );
};

export default ProductList;
