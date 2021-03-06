import { Heading } from "../components/text/Heading";
import Pagination from "../components/containers/Pagination";
import { CardHorizontal } from "../components/containers/Card";
import { Content } from "../components/text/Content";
import { AvatarSmall } from "../components/UI/Avatar";
import { Template, CardListContainer } from "./Template";

function Followings() {
  const data = [
    {
      name: "Algo 1",
    },
    {
      name: "Algo 2",
    },
    {
      name: "Algo 3",
    },
    {
      name: "Algo 4",
    },
    {
      name: "Algo 5",
    },
  ];
  return (
    <Template>
      <Heading text="followings (5)" />

      <Pagination from={1} to={5} selected={3} />

      <CardListContainer>
        {data.map((item) => (
          <CardHorizontal key={item.name}>
            <AvatarSmall />

            <div className="item--expand">
              <Content children={item.name} />
            </div>
          </CardHorizontal>
        ))}
      </CardListContainer>
    </Template>
  );
}

export default Followings;