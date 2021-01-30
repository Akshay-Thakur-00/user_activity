import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import Task from './components/Task';
import User from './components/User';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/home" component={Home}/>
      <Route path="/task" component={Task}/>
      <Route path="/user" component={User} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
