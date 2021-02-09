import styled from "styled-components";
import { Normalize } from "styled-normalize";
import Navbar from "../components/Navbar.js";
import CartProivder from "../context/Cart";
import Cart from "../components/Cart.js";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Padauk:wght@400;700&display=swap");
  background: linear-gradient(to right, #11998e, #38ef7d);
  font-family: "Padauk", sans-serif;
  color: #444;
`;

const Page = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <CartProivder>
      <Container>
        <Normalize />
        <Navbar />
        <Page>
          <Component {...pageProps} />
        </Page>
        <Cart />
      </Container>
    </CartProivder>
  );
};
export default MyApp;
