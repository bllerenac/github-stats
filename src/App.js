import "./App.css";
import Button from "./components/UI/Button";
import Icon from "./components/UI/Icon";
import NavComponent from "./components/containers/Nav";
import Avatar from "./components/UI/Avatar";
import Home from './pages/Home';

import Repos from "./pages/Repos"

function App() {
  return (
    <div className="App">
      
      <Repos />
    </div>
  );
}

export default App;
