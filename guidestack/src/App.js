import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home'
import AboutUs from './Components/Pages/About-us'
import Cities from './Components/Pages/Cities'
import ValenciaCity from './Components/Pages/Cities/Valencia/City'
import MadridCity from './Components/Pages/Cities/Madrid/City'
import BarcelonaCity from './Components/Pages/Cities/Barcelona/City'
import Schedule from './Components/Pages/Schedule';
import ValenciaCalendar from './Components/Pages/Calendars/Valencia/Calendar'

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={AboutUs} />
          <Route exact path="/calendario" component={Schedule} />
          <Route exact path="/calendario/valencia" component={ValenciaCalendar} />
          {/*<Route exact path="/calendario/madrid" component={MadridCalendar} />*/}
          {/*<Route exact path="/calendario/barcelona" component={BarcelonaCalendar} />*/}
          <Route exact path="/ciudades" component={Cities} />
          <Route exact path="/ciudades/valencia" component={ValenciaCity} />
          <Route exact path="/ciudades/madrid" component={MadridCity} />
          <Route exact path="/ciudades/barcelona" component={BarcelonaCity} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
