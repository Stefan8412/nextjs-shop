import Page from "../components/styled/Page";
import useCart from "../hooks/useCart";
import { useEffect } from "react";

const Success = () => {
  const { clearCart } = useCart();
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <Page>
      <h2>Payment successful</h2>
      <p>Thank you for your purchase!</p>
    </Page>
  );
};

export default Success;
