import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
