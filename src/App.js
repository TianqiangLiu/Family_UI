import React, { Component} from 'react';
import Header from './global/header/index';
import {GlobalStyle} from './style.js';
import store from './store/index';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import Home from './Routers/home';
import Profile from './Routers/profile';
import CostingNotes from './Routers/costingNotes';
import Canlendar from './Routers/canlendar';
import Location from './Routers/location';
import Communication from './Routers/communication';
import LogIn from './Routers/login';
import SignUp from './Routers/signUp';

class App extends Component{
  render(){

    return (
        <Provider store = {store}>
          <div>
            <GlobalStyle/>
            <BrowserRouter>
              <Header/>
              <div>
                <Route path = '/' exact component={Home}></Route>
                <Route path = '/login' exact component={LogIn}></Route>
                <Route path = '/signup' exact component={SignUp}></Route>
                <Route path = '/profile' exact component={Profile}></Route>
                <Route path = '/costingnotes' exact component={CostingNotes}></Route>
                <Route path = '/canlendar' exact component={Canlendar}></Route>
                <Route path = '/location' exact component={Location}></Route>
                <Route path = '/communication' exact component={Communication}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      )
  }
}
export default App;