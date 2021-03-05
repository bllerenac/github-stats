import styled from "@emotion/styled";
import Icon from "../UI/Icon";
import { ContentSmall } from "./../text/Content";

const BasicCard = styled.div`
  min-heigth: 50px;
  width: 300px;

  display: flex;
  padding: 8px 12px;

  text-align: left;

  background: #ffffff;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

const StyledCardRepo = styled(BasicCard)`
  flex-direction: column;
  gap: 4px;
`;

const StyledCardRepoAdditionals = styled.div`
  display: flex;
  gap: 18px;

  & > div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const StyledCardFavorite = styled(BasicCard)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  & > div:nth-child(2) {
    flex-grow: 1;
  }
`;

function CardRepo({ children }) {
  return <StyledCardRepo>{children}</StyledCardRepo>;
}

function CardRepoAdditionals({ language, stars, forks }) {
  return (
    <StyledCardRepoAdditionals>
      <div>
        <Icon type="circle" color="#F2C94C" size="12" />
        <ContentSmall children={language} />
      </div>

      <div>
        <Icon type="starOut" color="#03053D" size="12" />
        <ContentSmall children={stars} />
      </div>

      <div>
        <Icon type="githubFork" color="#03053D" size="12" />
        <ContentSmall children={forks} />
      </div>
    </StyledCardRepoAdditionals>
  );
}

function CardFavorite({ children }) {
  return <StyledCardFavorite>{children}</StyledCardFavorite>;
}

export { CardRepo, CardRepoAdditionals, CardFavorite };
