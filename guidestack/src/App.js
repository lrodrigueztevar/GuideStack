import './App.css';
import home from './Components/home';
import nosotros from './Components/Pages/nosotros';
import ciudades from './Components/Pages/ciudades';
import ciudad from './Components/Pages/ciudad';
import agenda from './Components/Pages/agenda';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/nosotros" component={nosotros} />
          <Route exact path="/ciudades" component={ciudades} />
          <Route exact path="/ciudades/ciudad" component={ciudad} />
          <Route exact path="/agenda" component={agenda} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
