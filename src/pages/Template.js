import styled from "@emotion/styled";
import NavComponent from "../components/containers/Nav";
import { css } from "@emotion/react";

const StyledPage = styled.div`
  max-width: 411px;
  height: 100vh;
  margin: 0 auto;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;

  & > .page__content {
    flex-grow: 1;
    padding: 16px 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const StyledCardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

function Template({ children }) {
  return (
    <StyledPage>
      <div className="page__content">{children}</div>
      <NavComponent
        css={css`
          width: 100%;
        `}
      />
    </StyledPage>
  );
}

function CardListContainer({ children }) {
  return <StyledCardList>{children}</StyledCardList>;
}

export { Template, CardListContainer };
