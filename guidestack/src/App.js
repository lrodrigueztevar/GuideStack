import './App.css';
import home from './Components/home';
import nosotros from './Components/Pages/nosotros';
import sitios from './Components/Pages/sitios';
import agenda from './Components/Pages/agenda';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/nosotros" component={nosotros} />
          <Route exact path="/sitios" component={sitios} />
          <Route exact path="/agenda" component={agenda} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
