import { Switch, Route } from "react-router-dom";
import Feed from "./pages/Feed/index";
import Home from "./pages/Home/index";

export default () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/feed">
        <Feed />
      </Route>

      <Route path="*">
        <Home />
      </Route>
    </Switch>
  );
};
