import { useParams } from "react-router";
import styled from "styled-components";
import NavBar from "./Navbar";

export default function OrderPage() {
  const { userName } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar userName={userName || "inconnu"} />
        <div className="main"></div>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div``;
