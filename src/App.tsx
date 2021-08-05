import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import { 
  ApproveLorB,
  ApproveNegotiate,
  Completed,
  CreateLorB,
  Lend,
  Borrow,
  Login,
  Register,
  Home
 } from './pages/index';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path="/approveLorB" exact component={ApproveLorB} />
              <Route path="/approveNegotiate" exact component={ApproveNegotiate} />
              <Route path="/borrow" exact component={Borrow} />
              <Route path="/completed" exact component={Completed} />
              <Route path="/createLorB" exact component={CreateLorB} />
              <Route path="/lend" exact component={Lend} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/" exact component={Home} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
