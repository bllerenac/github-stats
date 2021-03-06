import { Heading } from "../components/text/Heading";
import Pagination from "./../components/containers/Pagination";
import { CardHorizontal } from "../components/containers/Card";
import { Content, ContentSmall } from "../components/text/Content";
import Icon from "../components/UI/Icon";
import { AvatarSmall } from "./../components/UI/Avatar";
import { CardListContainer, Template } from "./Template";
import { useEffect, useState } from "react";
import GithubService from "../services/github_service";
import { useParams } from "react-router-dom";

function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const [status, setStatus] = useState("loading");

  const { user: username } = useParams();

  useEffect(() => {
    async function loadFollowers() {
      try {
        setStatus("loading");
        const gitHubService = new GithubService();
        const response = await gitHubService.favorites(username);

        if (response.message) throw new Error(response.message);

        setFavorites(response);
        setStatus("success");
      } catch (error) {
        console.log(error.message);
        setStatus("error");
      }
    }

    loadFollowers();
  }, [username]);

  function RenderFavorites(){
    switch (status) {
      case "loading":
        return <Content>Cargando...</Content>;
      case "error":
        return <Content>Oh no! something went wrong...</Content>;
      case "success":
        return (
          <>
          <Heading text="Favorites (7)" />
    
          <Pagination from={1} to={5} selected={3} />
    
          <CardListContainer>
            {console.log(favorites)}
            {favorites.map((item) => (
              <CardHorizontal key={item.login}>
                <AvatarSmall src={item.avatar_url}/>
    
                <div className="item--expand">
                  <Content children={item.login} />
                  <ContentSmall children={item.desc} />
                </div>
    
                <Icon type="star" color="#F2C94C" size="23" />
              </CardHorizontal>
            ))}
          </CardListContainer>
          </>);
        default:
          break; 
    }};

  return(
    <Template>
      {RenderFavorites()}
    </Template>
  )
}

export default Favorite;
