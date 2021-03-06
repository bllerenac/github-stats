import styled from "@emotion/styled";
import Icon from "../UI/Icon";
import { ContentSmall } from "./../text/Content";

const sizes = {
  default: { width: "140px" },
  small: { width: "106px" },
};

const StyledCard = styled.div`
  width: ${(props) =>
    sizes[props.size] ? sizes[props.size].width : sizes.default.width};
  height: 140px;
  background: #ffffff;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px;
`;

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

const StyledCardHorizontal = styled(BasicCard)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  .item--expand {
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

function Card({ children, size }) {
  return <StyledCard size={size}>{children}</StyledCard>;
}

function CardHorizontal({ children }) {
  return <StyledCardHorizontal>{children}</StyledCardHorizontal>;
}

export { Card, CardRepo, CardRepoAdditionals, CardHorizontal };
