import styled from "@emotion/styled";
import { Heading } from "../components/text/Heading";
import NavComponent from "../components/containers/Nav";
import Pagination from "./../components/containers/Pagination";

const StyledFavorite = styled.div`
  max-width: 411px;
  height: 100vh;
  margin: 0 auto;
  background: #f2f2f2;

  display: flex;
  flex-direction: column;

  & > .favorite__content {
    flex-grow: 1;
    padding: 16px 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & > *:nth-last-child(1) {
    width: 100%;
  }
`;

const FavoriteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function Favorite() {
  return (
    <StyledFavorite>
      <div className="favorite__content">
        <Heading text="Favorites (6)" />
        <Pagination from={1} to={5} selected={3} />
        <FavoriteList>
          <div>casas</div>
          <div>casas</div>
          <div>casas</div>
          <div>casas</div>
        </FavoriteList>
      </div>
      <NavComponent />
    </StyledFavorite>
  );
}

export default Favorite;
