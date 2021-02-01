import './App.css';
import home from './Components/home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
