import { Heading } from "../components/text/Heading";
import Pagination from "./../components/containers/Pagination";
import { CardHorizontal } from "../components/containers/Card";
import { ContentCentered as Content, ContentSmall, ContentLargeBold } from "../components/text/Content";
import Icon from "../components/UI/Icon";
import { AvatarSmall } from "./../components/UI/Avatar";
import { CardListContainer, Template } from "./Template";
import { useEffect, useState } from "react";
import { toggleFavorite } from "../Utils/favorites";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  gap: 60px;
  & > .results {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    & > .username {
      display: flex;
      gap: 4px;
    }
    & > .follow-container {
      display: flex;
      gap: 16px;
    }
  }
`;

const NoData = () => (
  <>
    <Icon type="github" size={120} />
    <ContentLargeBold>
      {"No favorite users..."}
    </ContentLargeBold>
  </>
);

function Favorite() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.favorites) || []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavoritesRemove = function (favorite) {
    toggleFavorite(favorites, favorite, setFavorites);
  };

  function RenderFavorite(){
    if(favorites.length != 0){
      return(<Template>
        <Heading text={`Favorites (${favorites.length})`} />
  
        <CardListContainer>
          <Pagination from={1} to={5} selected={3} />
  
          {favorites.map((favorite) => (
            <CardHorizontal key={favorite.id}>
              <AvatarSmall src={favorite.avatar_url} />
  
              <div className="item--expand">
                <Content children={favorite.name} />
                <ContentSmall children={favorite.bio} />
              </div>
  
              <Icon
                type="star"
                color="#F2C94C"
                size={23}
                onClick={() => handleFavoritesRemove(favorite)}
              />
            </CardHorizontal>
          ))}
        </CardListContainer>
      </Template>)
    }else{
      return(
      <Template>
        <Heading text={`Favorites (${favorites.length})`} />
        <StyledDiv>
          <NoData/>
        </StyledDiv>
      </Template>
      )
    }
  }

  return (
    RenderFavorite()
  )
  
}

export default Favorite;
