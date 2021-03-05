import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledHeading = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  color: #333333;
  ${({ css }) => css}
`;

function HeadingPrimary({ text }) {
  return <StyledHeading children={text} />;
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

export { HeadingPrimary, Heading };
