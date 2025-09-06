import styled from "styled-components";
import type { ImageType } from "../../types";

export default function Image({ src, alt, ...otherProps }: ImageType) {
  const className = otherProps.className ?? "";
  otherProps = { ...otherProps, className: "" };

  return (
    <ImageStyled className={className}>
      <img src={src} alt={alt} {...otherProps} />
    </ImageStyled>
  );
}

const ImageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
