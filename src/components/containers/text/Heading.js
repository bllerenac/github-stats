import styled from "@emotion/styled";

const StyledHeading = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;

  color: #333333;
`;

function HeadingPrimary({ text }) {
  return <StyledHeading children={text} />;
}

export { HeadingPrimary };
