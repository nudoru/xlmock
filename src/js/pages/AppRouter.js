import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Overview from "./Overview";
import FourOhFour from './FourOhFour';
import Catalog from "./Catalog";
import Calendar from "./Calendar";
import Alerts from "./Alerts";
import Help from "./Help";
import User from "./User";
import CourseDetail from "./CourseDetail";
import PathDetail from "./PathDetail";
import Search from "./Search";
import Header from "../layout/Header";
import SiteContainer from "../layout/SiteContainer";
import Footer from "../layout/Footer";
import Feedback from "./Feedback";
import Discover from "./Discover";
import Team from "./Team";
import CourseDetailActivities from "./CourseDetailActivities";
import CourseDetailUpcoming from "./CourseDetailUpcoming";
import CoursePlayer from "./CoursePlayer";

export const AppRouter = () =>
  <Router>
    <SiteContainer>
      <Header/>
      <Switch>
        <Route exact path="/" component={Overview}/>
        <Route path="/catalog" component={Catalog}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/alerts" component={Alerts}/>
        <Route path="/help" component={Help}/>
        <Route path="/user" component={User}/>
        <Route path="/course" component={CourseDetail}/>
        <Route path="/courseactivities" component={CourseDetailActivities}/>
        <Route path="/courseupcoming" component={CourseDetailUpcoming}/>
        <Route path="/courseplayer" component={CoursePlayer}/>
        <Route path="/path" component={PathDetail}/>
        <Route path="/search" component={Search}/>
        <Route path="/feedback" component={Feedback}/>
        <Route path="/discover" component={Discover}/>
        <Route path="/team" component={Team}/>
        <Route component={FourOhFour}/>
      </Switch>
      <Footer/>
    </SiteContainer>
  </Router>;