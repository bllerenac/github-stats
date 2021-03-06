import { CardRepo, CardRepoAdditionals } from "../components/containers/Card";
import { Content, ContentBold, ContentSmall } from "../components/text/Content";
import { Heading } from "../components/text/Heading";
import { CardListContainer, Template } from "./Template";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GithubService from "../services/github_service";

function Repos() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");

  const { user: username } = useParams();

  useEffect(() => {
    async function loadRepos() {
      try {
        setStatus("loading");
        const gitHubService = new GithubService();
        const response = await gitHubService.respos(username);
        console.log(username, response);

        if (response.message) throw new Error(response.message);

        setRepos(response);
        setStatus("success");
      } catch (error) {
        console.log(error.message);
        setStatus(error.message);
      }
    }

    loadRepos();
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
              {repos.map((repo) => (
                <CardRepo key={repo.id}>
                  <a href={repo.html_url} target="blank">
                    <ContentBold children={repo.name} color="blue" />
                  </a>
                  <ContentSmall children={repo.description} />
                  <CardRepoAdditionals
                    stars={repo.stargazers_count}
                    forks={repo.forks_count}
                    language={repo.language}
                  />
                </CardRepo>
              ))}
            </CardListContainer>
          </>
        );
      default:
        return <Content>{status}</Content>;
    }
  }

  return (
    <Template>
      <Heading text={`Public Repos (${repos.length})`} />

      {showContent()}
    </Template>
  );
}

export default Repos;
