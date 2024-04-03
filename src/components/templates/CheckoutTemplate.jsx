import Button from "../atoms/Button";
import Input from "../atoms/Input";

const CheckoutTemplate = () => {
  return (
    <div className="w-full md:w-1/2 mx-auto p-6">
      <h2 className="text-xl font-b-900old mb-6">Checkout</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="country" className="block mb-1 font-semibold">
            Country
          </label>
          <select
            id="country"
            name="country"
            className="w-full  h-10 p-2  bg-white border-gray-500  border-2 shadow-sm   "
          >
            <option value="USA">United States</option>
            <option value="CAN">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="GER">Germany</option>
            <option value="AUS">Australia</option>
            <option value="JPN">Japan</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-1 font-semibold">
              First Name
            </label>
            <Input type="text" id="firstName" />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-1 font-semibold">
              Last Name
            </label>
            <Input type="text" id="lastName" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="address1" className="block mb-1 font-semibold">
            Address Line 1
          </label>
          <Input type="text" id="address1" />
        </div>
        <div className="mb-4">
          <label htmlFor="address2" className="block mb-1 font-semibold">
            Address Line 2
          </label>
          <Input type="text" id="address2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="city" className="block mb-1 font-semibold">
              City
            </label>
            <Input type="text" id="city" />
          </div>
          <div>
            <label htmlFor="state" className="block mb-1 font-semibold">
              State
            </label>
            <Input type="text" id="state" />
          </div>
          <div>
            <label htmlFor="pincode" className="block mb-1 font-semibold">
              Pin Code
            </label>
            <Input type="text" id="pincode" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block mb-1 font-semibold">
            Mobile Number
          </label>

          <Input type="text" id="mobile" />
        </div>
        <Button> Continue to Payment</Button>
      </form>
    </div>
  );
};

export default CheckoutTemplate;
