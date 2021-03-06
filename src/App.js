import { Global, css } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Followers from "./pages/Followers";
import Followings from "./pages/Followings";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorite from "./pages/Favorites";

function App() {
  return (
    <div className="App">
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap");
          * {
            font-family: Source Code Pro;
            color: #333333;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            background: #f2f2f2;
          }
          a {
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        `}
      />
      <Router>
        <Switch>
          <Route path="/users/:user/followers" component={Followers} />
          <Route path="/users/:user/followings" component={Followings} />
          <Route path="/favorites" component={Favorite} />
          <Route path="/search" component={Search} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
