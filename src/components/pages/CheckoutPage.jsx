import Footer from "../organisms/Footer";
import CheckoutTemplate from "../templates/CheckoutTemplate";

const CheckoutPage = () => {
  return (
    <>
      <div className="text-center bg-black text-white p-2">
        <h1 className="text-3xl font-bold">urban</h1>
      </div>
      <CheckoutTemplate />
      <Footer />
    </>
  );
};

export default CheckoutPage;
