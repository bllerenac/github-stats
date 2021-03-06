import { Heading } from "../components/text/Heading";
import { CardHorizontal } from "../components/containers/Card";
import { Content } from "../components/text/Content";
import { AvatarSmall } from "../components/UI/Avatar";
import { Template, CardListContainer } from "./Template";
import { useEffect, useState } from "react";
import GithubService from "../services/github_service";
// import Pagination from "../components/containers/Pagination";

function Follers({ match }) {
  const [followers, setFollowers] = useState([]);
  const [status, setStatus] = useState("loading");

  const username = match.params.user;

  useEffect(() => {
    async function loadFollowers() {
      try {
        setStatus("loading");
        const gitHubService = new GithubService();
        const response = await gitHubService.followers(username);

        if (response.message) throw new Error(response.message);

        setFollowers(response);
        setStatus("success");
      } catch (error) {
        console.log(error.message);
        setStatus("error");
      }
    }

    loadFollowers();
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
              {followers.map((item) => (
                <CardHorizontal key={item.id}>
                  <AvatarSmall src={item.avatar_url} />

                  <div className="item--expand">
                    <Content children={item.login} />
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
      <Heading text={`Followers (${followers.length})`} />

      {showContent()}
    </Template>
  );
}

export default Follers;
