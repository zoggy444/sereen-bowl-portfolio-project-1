import styled from "styled-components";

export default function Image({ product }) {
  return (
    <ImageStyled>
      <img src={`/src${product.imageSource}`} alt="product-image" />
    </ImageStyled>
  );
}

const ImageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 145px;
  img {
    max-width: 100%;
    max-height: 100%;
    aspect-ratio: 1;
  }
`;
