import React from 'react'
import { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Location from './LocationComponent';
import Schedule from './ScheduleComponent';
import Store from './StoreComponent';


class Main extends Component {


  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    };

    // header and footer will go in this return()
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />

          <Route exact path="/about" component={About} />

          <Route exact path="/location" component={Location} />

          <Route exact path="/schedule" component={Schedule} />

          <Route exact path="/store" component={Store} />

          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );










  }
}


export default Main

