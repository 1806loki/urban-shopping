import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  selectCartItems,
} from "../../redux/slicers/cartSlice";

import { truncate } from "../../utils/functions/trunicate";

/* eslint-disable react/prop-types */
const ProductCard = ({ image, title, price, id }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const isItemInCart = cartItems.some((item) => item.id === id);

  const handleCart = () => {
    if (isItemInCart) {
      dispatch(deleteFromCart(id));
    } else {
      dispatch(addToCart({ id, title, price }));
    }
  };

  return (
    <div className="border rounded-lg p-4 flex flex-col gap-2">
      <img src={image} alt={title} className="w-full h-64 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{truncate(title)}</h3>
      <p className="text-gray-600">${price}</p>
      <button
        className={`text-sm py-2 px-14 ${
          isItemInCart ? "bg-red-500 text-white" : "border-2 border-black"
        }`}
        onClick={handleCart}
      >
        {isItemInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
