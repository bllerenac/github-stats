import { Global, css } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Repos from "./pages/Repos";
import Search from "./pages/Search";
import Home from "./pages/Home";
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
        `}
      />
      <Router>
        <Switch>
          <Route path="/Search" component={Search} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
