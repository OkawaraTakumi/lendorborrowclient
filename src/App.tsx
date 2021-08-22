import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import { 
  ApproveCreate,
  ApproveNegotiate,
  Completed,
  CreateLorB,
  Lend,
  Borrow,
  Login,
  Register,
  Home,
  Mypage
 } from './pages/index';
 import { useEffect } from 'react';
 import { Header } from './component/molecules/index';
 import { fetchUser } from './slices/loginSlice';
 import { SelectUser } from './slices/loginSlice';
 import { useAppDispatch, useAppSelector } from './app/hooks';

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(SelectUser);
  useEffect(() => {
    dispatch(fetchUser())
  },[dispatch])

  useEffect(() => {
    console.log(user)
  },[user])

  return (
    <div className="App">
      <Router>
          <Header/>
          <Switch>
              <Route path="/mypage"  component={Mypage} />
              <Route path="/approveCreate" exact component={ApproveCreate} />
              <Route path="/approveNegotiate" exact component={ApproveNegotiate} />
              <Route path="/borrow/:id" exact component={Borrow} />
              <Route path="/completed" exact component={Completed} />
              <Route path="/createLorB" exact component={CreateLorB} />
              <Route path="/lend/:id" exact component={Lend} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/" exact component={Home} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
