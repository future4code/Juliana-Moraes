import { HomePage } from '../pages/HomePage.js'
import { ListTripsPage } from '../pages/ListTripsPage.js'
import { ApplicationFormPage } from '../pages/ApplicationFormPage.js'
import { AdminHomePage } from '../pages/AdminHomePage.js'
import { TripDetalisPage } from '../pages/TripDetalisPage.js'
import { CreateTripPage } from '../pages/CreateTripPage'
import { LoginPage } from '../pages/LoginPage.js'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


export const Router = () => {
    return (

        <BrowserRouter>
            <Switch>

                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/trips/list"}>
                    <ListTripsPage />
                </Route>

                <Route exact path={"/trips/application/:id"}>
                    <ApplicationFormPage />
                </Route>

                <Route exact path={"/admin/trips/list"}>
                    <AdminHomePage />
                </Route>

                <Route exact path={"/admin/trips/:id"}>
                    <TripDetalisPage />
                </Route>

                <Route exact path={"/admin/trips/createtrip"}>
                    <CreateTripPage />
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}


