import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import NavComponent from "../components/containers/Nav";
import InputText from "../components/form/InputText";
import Icon from "../components/UI/Icon";
import {
  ContentCentered as Content,
  ContentLargeBold,
} from "../components/text/Content";
import Avatar from "../components/UI/Avatar";
import { Card } from "../components/containers/Card";
import { HeadingH2 } from "../components/text/Heading";
import GithubService from "../services/github_service";
import { getFavorite, toggleFavorite } from "../Utils/favorites";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

function getLocationQuery(location) {
  const values = location.search.slice(1);
  // eslint-disable-next-line
  const [_, value] = values.split("=");
  return value || "";
}

function Search({ history, location }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [query, setQuery] = useState(getLocationQuery(location));
  let [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    async function fetchUser() {
      const gs = new GithubService();
      setLoading(true);
      setData(await gs.profile(query));
      history.push(`/search?user=${query}`);
      setLoading(false);
    }

    let timerID;

    if (query !== "") {
      timerID = setTimeout(fetchUser, 1000);
    }
    // eslint-disable-next-line
    return () => clearTimeout(timerID);
    // eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const NoData = () => (
    <>
      <Icon type="github" size={120} />
      <ContentLargeBold>
        {loading ? "Retrieving user..." : "No users..."}
      </ContentLargeBold>
    </>
  );

  const ProfileView = () => (
    <>
      <Avatar src={data.avatar_url} placeholder={"NU"} />
      <div className="username">
        <ContentLargeBold>{data.name}</ContentLargeBold>
        <Icon
          onClick={() => toggleFavorite(favorites, data, setFavorites)}
          type={getFavorite(favorites, data) ? "star" : "starLine"}
          size={25}
          fill="#F2C94C"
        />
      </div>
      <Content
        css={css`
          min-height: 60px;
        `}
      >
        {data.bio}
      </Content>
      <div className="follow-container">
        <Link to={`/users/${query}/followers`}>
          <Card>
            <Icon type="followers" size={60} color="#2D9CDB" />
            <HeadingH2>{data.followers}</HeadingH2>
            <Content>Followers</Content>
          </Card>
        </Link>
        <Card>
          <Icon type="followings" size={60} color="#F2994A" />
          <HeadingH2>{data.following}</HeadingH2>
          <Content>Followings</Content>
        </Card>
        <Card>
          <Icon type="repos" size={60} color="#219653" />
          <HeadingH2>{data.public_repos}</HeadingH2>
          <Content>public repos</Content>
        </Card>
        <Card>
          <Icon type="code" size={60} color="#828282" />
          <HeadingH2>{data.public_gists}</HeadingH2>
          <Content>public gist</Content>
        </Card>
      </div>
    </>
  );

  return (
    <StyledDiv>
      <InputText value={query} onChange={(e) => setQuery(e.target.value)} />
      <div className="results">
        {!data && <NoData />}
        {data && <ProfileView />}
      </div>
      <NavComponent
        css={css`
          position: fixed;
          bottom: 0;
          width: 100%;
        `}
      />
    </StyledDiv>
  );
}

export default Search;
