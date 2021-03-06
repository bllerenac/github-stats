import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledHeading = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  color: #333333;
  ${({ css }) => css}
`;

const StyledH2 = styled.h2`
  font-weight: normal;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  ${(props) => props.style};
`;

function HeadingPrimary({ text }) {
  return <StyledHeading children={text} />;
}

function HeadingH2({ children, style }) {
  return <StyledH2 style={style}>{children}</StyledH2>;
}

function Heading({ text }) {
  return (
    <StyledHeading
      as="h2"
      css={css`
        font-size: 28px;
        line-height: 35px;
      `}
      children={text}
    />
  );
}

export { HeadingH2, HeadingPrimary, Heading };
