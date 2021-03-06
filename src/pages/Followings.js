import { Heading } from "../components/text/Heading";
import { CardHorizontal } from "../components/containers/Card";
import { Content } from "../components/text/Content";
import { AvatarSmall } from "../components/UI/Avatar";
import { Template, CardListContainer } from "./Template";
import { useEffect, useState } from "react";
import GithubService from "../services/github_service";
import { Link, useParams } from "react-router-dom";
// import Pagination from "../components/containers/Pagination";

function Followings() {
  const [followings, setFollowings] = useState([]);
  const [status, setStatus] = useState("loading");

  const { user: username } = useParams();

  useEffect(() => {
    async function loadFollowings() {
      try {
        setStatus("loading");
        const gitHubService = new GithubService();
        const response = await gitHubService.followings(username);

        if (response.message) throw new Error(response.message);

        setFollowings(response);
        setStatus("success");
      } catch (error) {
        console.log(error.message);
        setStatus("error");
      }
    }

    loadFollowings();
  }, [username]);

  function showContent() {
    switch (status) {
      case "loading":
        return <Content>Cargando...</Content>;
      case "error":
        return <Content>Oh no! something went wrong...</Content>;
      case "success":
        return (
          <>
            {/**<Pagination from={1} to={5} selected={page} />*/}

            <CardListContainer>
              {followings.map((following) => (
                <CardHorizontal key={following.id}>
                  <AvatarSmall src={following.avatar_url} />

                  <div className="item--expand">
                    <Link to={`/search?user=${following.login}`}>
                      <Content children={following.login} />
                    </Link>
                  </div>
                </CardHorizontal>
              ))}
            </CardListContainer>
          </>
        );
      default:
        break;
    }
  }

  return (
    <Template>
      <Heading text={`Followings (${followings.length})`} />

      {showContent()}
    </Template>
  );
}

export default Followings;
