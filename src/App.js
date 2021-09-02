import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Rockets from './Components/Rockets';
import Nav from './Components/Nav';
import Missions from './Components/Missions';
import MyProfile from './Components/MyProfile';

const App = () => (
  <div>
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Switch>
        <Route exact path="/" component={Rockets} />
        <Route path="/missions" component={Missions} />
        <Route path="/profile" component={MyProfile} />
      </Switch>
    </Router>
  </div>
);

export default App;
