import logo from './logo.svg';
import './App.css';
import {HomePage} from './pages/HomePage.js'
import {ListTripsPage} from './pages/ListTripsPage.js'
import {ApplicationFormPage} from './pages/ApplicationFormPage.js'
import {AdminHomePage} from './pages/AdminHomePage.js'
import {TripDetalisPage} from './pages/TripDetalisPage.js'
import {CreateTripPage} from './pages/CreateTripPage.js'
import {LoginPage} from './pages/LoginPage.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'




export default function App() {
  return (

    <BrowserRouter>
    <Switch>
        <Route path={"/"}>
          <HomePage />
        </Route>

        <Route path={"/trips/list"}>
          <ListTripsPage />
        </Route>

        <Route path={"/trips/application"}>
        <ApplicationFormPage />
        </Route>

        <Route path={"/admin/trips/list"}>
          <AdminHomePage />
        </Route>

        <Route path={"/admin/trips/:id"}>
          <TripDetalisPage />
        </Route>

        <Route path={"/admin/trips/create"}>
          <CreateTripPage />
        </Route>

        <Route path={"/login"}>
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


