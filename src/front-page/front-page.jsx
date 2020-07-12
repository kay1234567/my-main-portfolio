import React, { Component } from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';
import AboutMain from '../about-page/aboutMain';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MyWorks from '../my works/works';
import ContactUs from './../contact-us/contactUs';

const FrontPage = () => {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Body} />
            <Route path="/about" component={AboutMain} />
            <Route path='/my-works' component={MyWorks} />
            <Route path='/contact' component={ContactUs} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
}
 
export default FrontPage;