import Nav from "./Components/Nav";
import Rockets from "./Components/Rockets";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MyProfile from "./Components/MyProfile";
const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Rockets} />
          <Route path="/profile" component={MyProfile} />
        </Switch>
    </Router >
    </div>
  );
}

export default App;
