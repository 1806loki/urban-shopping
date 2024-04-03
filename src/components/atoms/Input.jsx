/* eslint-disable react/prop-types */
const Input = ({ type, id }) => {
  return (
    <input
      type={type}
      id={id}
      name={id}
      className="w-full h-10 p-2 border-gray-500 border-2 shadow-sm"
    />
  );
};

export default Input;
