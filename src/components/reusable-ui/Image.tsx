import styled from "styled-components";
import type { ImageType } from "../../types";

export default function Image({ src, alt }: ImageType) {
  return (
    <ImageStyled>
      <img src={src} alt={alt} />
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
