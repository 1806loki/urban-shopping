/* eslint-disable react/prop-types */
const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="w-full py-2 bg-black text-white  hover:bg-gray-800 focus:outline-none focus:ring  "
    >
      {children}
    </button>
  );
};

export default Button;
