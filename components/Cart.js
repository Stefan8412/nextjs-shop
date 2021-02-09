import styled from "styled-components";
import { FiX } from "react-icons/fi";

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background: white;
  width: 300px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const X = styled(FiX)`
  font-size: 3rem;
  &:hover {
    cursor: pointer;
  }
`;
const XContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Cart = () => {
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <Container>
      <XContainer>
        <X onClick={handleClick} />
      </XContainer>
      <p>future shopping cart</p>
    </Container>
  );
};

export default Cart;
