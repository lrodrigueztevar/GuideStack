import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Home from './Components/Pages/Home'
import AboutUs from './Components/Pages/About-us'
import Cities from './Components/Pages/Cities'
import ValenciaCity from './Components/Pages/Cities/Valencia/City'
import MadridCity from './Components/Pages/Cities/Madrid/City'
import BarcelonaCity from './Components/Pages/Cities/Barcelona/City'
import CuencaCity from './Components/Pages/Cities/Cuenca/City'
import MalagaCity from './Components/Pages/Cities/Malaga/City'
import SevillaCity from './Components/Pages/Cities/Sevilla/City'
import ZaragozaCity from './Components/Pages/Cities/Zaragoza/City'

import Schedule from './Components/Pages/Schedule';
import ValenciaCalendar from './Components/Pages/Calendars/Valencia/Calendar'
import MadridCalendar from './Components/Pages/Calendars/Madrid/Calendar'
import BarcelonaCalendar from './Components/Pages/Calendars/Barcelona/Calendar'
import CuencaCalendar from './Components/Pages/Calendars/Cuenca/Calendar'
import MalagaCalendar from './Components/Pages/Calendars/Malaga/Calendar'
import SevillaCalendar from './Components/Pages/Calendars/Sevilla/Calendar'
import ZaragozaCalendar from './Components/Pages/Calendars/Zaragoza/Calendar'


function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={AboutUs} />
          <Route exact path="/calendario" component={Schedule} />
          <Route exact path="/calendario/valencia" component={ValenciaCalendar} />
          <Route exact path="/calendario/madrid" component={MadridCalendar} />
          <Route exact path="/calendario/barcelona" component={BarcelonaCalendar} />
          <Route exact path="/calendario/cuenca" component={CuencaCalendar} />
          <Route exact path="/calendario/malaga" component={MalagaCalendar} />
          <Route exact path="/calendario/sevilla" component={SevillaCalendar} />
          <Route exact path="/calendario/zaragoza" component={ZaragozaCalendar} />

          <Route exact path="/ciudades" component={Cities} />
          <Route exact path="/ciudades/valencia" component={ValenciaCity} />
          <Route exact path="/ciudades/madrid" component={MadridCity} />
          <Route exact path="/ciudades/barcelona" component={BarcelonaCity} />
          <Route exact path="/ciudades/cuenca" component={CuencaCity} />
          <Route exact path="/ciudades/malaga" component={MalagaCity} />
          <Route exact path="/ciudades/sevilla" component={SevillaCity} />
          <Route exact path="/ciudades/zaragoza" component={ZaragozaCity} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
