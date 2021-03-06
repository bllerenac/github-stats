import { Heading } from "../components/text/Heading";
import Pagination from "./../components/containers/Pagination";
import { CardHorizontal } from "../components/containers/Card";
import { Content, ContentSmall } from "../components/text/Content";
import Icon from "../components/UI/Icon";
import { AvatarSmall } from "./../components/UI/Avatar";
import { CardListContainer, Template } from "./Template";

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
    <Template>
      <Heading text="Favorites (7)" />

      <Pagination from={1} to={5} selected={3} />

      <CardListContainer>
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
      </CardListContainer>
    </Template>
  );
}

export default Favorite;
