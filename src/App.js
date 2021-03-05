import "./App.css";
import Button from "./components/UI/Button";
import Icon from "./components/UI/Icon";
import NavComponent from "./components/containers/Nav";
import Avatar from "./components/UI/Avatar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Icon type="home" color="blue" size="20" />
      <Home />

      <Avatar />
      <NavComponent />
      <Button />
    </div>
  );
}

export default App;

/**

import { AvatarSmall } from "./components/UI/Avatar";
import {
  CardHorizontal,
  CardRepo,
  CardRepoAdditionals,
} from "./components/containers/Card";
import { Content, ContentBold, ContentSmall } from "./components/text/Content";



<CardRepo>
  <ContentBold children="Frank Dominguez" color="black" />
  <ContentSmall children="lorem lorem lorem loremloremlorem loremlorem" />
  <CardRepoAdditionals stars={20} forks={15} language="ruby" />
</CardRepo>

<CardHorizontal>
  <AvatarSmall />
  <div>
    <Content children="Will Smith" />
    <ContentSmall children="Cool" />
  </div>
  <Icon type="star" color="#F2C94C" size="23" />
</CardHorizontal>

<CardHorizontal>
  <AvatarSmall />
  <Content children="lorem" />
</CardHorizontal>

*/
