/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const colors = { white: "#FFFFFF", black: "#333333", blue: "#2D9CDB" };

const Basic = ({ color, children, className }) => (
  <p
    className={className}
    css={css`
      color: ${colors[color]};
    `}
  >
    {children}
  </p>
);

const StyledContentPrimary = styled(Basic)`
  font-size: 20px;
  line-height: 25px;
`;
const StyledContentPrimaryBold = styled(Basic)`
  font-size: 20px;
  line-height: 25px;
  font-weight: 700;
`;

function ContentPrimary({ children, color }) {
  return <StyledContentPrimary color={color} children={children} />;
}

function ContentPrimaryBold({ children, color }) {
  return <StyledContentPrimaryBold color={color} children={children} />;
}

export { ContentPrimary, ContentPrimaryBold };
