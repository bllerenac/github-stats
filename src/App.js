import "./App.css";
import Button from "./components/UI/Button";
import Icon from "./components/UI/Icon";
import NavComponent from "./components/containers/Nav";
import Avatar from "./components/UI/Avatar";
import { CardRepo, CardRepoAdditionals } from "./components/containers/Card";
import { ContentBold, ContentSmall } from "./components/text/Content";

function App() {
  return (
    <div className="App">
      <CardRepo>
        <ContentBold children="Frank Dominguez" color="black" />
        <ContentSmall children="lorem lorem lorem loremloremlorem loremlorem" />
        <CardRepoAdditionals stars={20} forks={15} language="ruby" />
      </CardRepo>

      <Icon type="home" color="blue" size="20" />
      <Avatar />
      <NavComponent />
      <Button />
    </div>
  );
}

export default App;
