import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-color: ${(props) => (props.src ? "" : "#333")};
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    font-weight: bold;
    font-size: 30px;
  }
  ${({ css }) => css}
`;

function Avatar({ src, placeholder }) {
  return <StyledImg src={src}>{!src && <p>{placeholder}</p>}</StyledImg>;
}

function AvatarSmall({ src, placeholder }) {
  return (
    <StyledImg
      src={src}
      css={css`
        width: 40px;
        height: 40px;
        flex-shrink: 0;
      `}
    >
      {!src && <p>{placeholder}</p>}
    </StyledImg>
  );
}

export default Avatar;
export { AvatarSmall };
