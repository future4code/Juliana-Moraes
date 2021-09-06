import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import ListPage from '../pages/ListPage/ListPage'
import PrivatePage from '../pages/PrivatePage/PrivatePage'
import CarrinhoPage from '../pages/CarrinhoPage/CarrinhoPage'
import ErroPage from '../pages/ErroPage/ErroPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <MainPage/>
                </Route>
                <Route exact path='/list/:produto'>
                    <ListPage/>
                </Route>
                <Route exact path='/private'>
                    <PrivatePage/>
                </Route>
                <Route exact path='/carrinho'>
                    <CarrinhoPage/>
                </Route>
                <Route>
                    <ErroPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router