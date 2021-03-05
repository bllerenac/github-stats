import styled from "@emotion/styled";
import { Heading } from "../components/text/Heading";
import NavComponent from "../components/containers/Nav";
import Pagination from "./../components/containers/Pagination";
import { CardHorizontal } from "../components/containers/Card";
import { Content, ContentSmall } from "../components/text/Content";
import Icon from "../components/UI/Icon";
import { AvatarSmall } from "./../components/UI/Avatar";
import { css } from "@emotion/react";

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
`;

const FavoriteList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

function Favorite() {
  const data = [
    {
      name: "Algo 1",
      desc: "Another",
    },
    {
      name: "Algo 2",
      desc: "Another",
    },
    {
      name: "Algo 3",
      desc: "Another",
    },
    {
      name: "Algo 4",
      desc: "Another",
    },
    {
      name: "Algo 5",
      desc: "Another",
    },
    {
      name: "Algo 6",
      desc: "Another",
    },
    {
      name: "Algo 7",
      desc: "Another",
    },
  ];
  return (
    <StyledFavorite>
      <div className="favorite__content">
        <Heading text="Favorites (6)" />

        <Pagination from={1} to={5} selected={3} />

        <FavoriteList>
          {data.map((item) => (
            <CardHorizontal key={item.name}>
              <AvatarSmall />

              <div className="item--expand">
                <Content children={item.name} />
                <ContentSmall children={item.desc} />
              </div>

              <Icon type="star" color="#F2C94C" size="23" />
            </CardHorizontal>
          ))}
        </FavoriteList>
      </div>
      <NavComponent
        css={css`
          width: 100%;
        `}
      />
    </StyledFavorite>
  );
}

export default Favorite;
