import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Overview from "./pages/Overview";
import FourOhFour from './pages/FourOhFour';
import Catalog from "./pages/Catalog";
import Calendar from "./pages/Calendar";
import Alerts from "./pages/Alerts";
import Help from "./pages/Help";
import UserProfile from "./pages/UserProfile";
import CourseDetail from "./pages/CourseDetail";
import PathDetail from "./pages/PathDetail";
import Search from "./pages/Search";
import Header from "./layout/Header";
import SiteContainer from "./layout/SiteContainer";
import Footer from "./layout/Footer";
import Feedback from "./pages/Feedback";
import Discover from "./pages/Discover";
import Team from "./pages/Team";
import CourseDetailActivities from "./pages/CourseDetailActivities";
import CourseDetailUpcoming from "./pages/CourseDetailUpcoming";
import CoursePlayer from "./pages/CoursePlayer";
import CourseDetailResources from "./pages/CourseDetailResources";
import SlideMenu from "./components/SlideMenu";
import SVGIcon from "./components/SVGIcon";
import UserPaths from "./pages/UserPaths";
import UserRecord from "./pages/UserRecord";
import UserSettings from "./pages/UserSettings";

const Routes = () => <Switch>
  <Route exact path="/" component={Overview}/>
  <Route path="/catalog/:id" component={Catalog}/>
  <Route path="/calendar" component={Calendar}/>
  <Route path="/alerts" component={Alerts}/>
  <Route path="/help" component={Help}/>
  <Route path="/user" component={UserProfile}/>
  <Route path="/userpaths" component={UserPaths}/>
  <Route path="/userrecord" component={UserRecord}/>
  <Route path="/usersettings" component={UserSettings}/>
  <Route path="/course" component={CourseDetail}/>
  <Route path="/courseactivities" component={CourseDetailActivities}/>
  <Route path="/courseupcoming" component={CourseDetailUpcoming}/>
  <Route path="/courseresources" component={CourseDetailResources}/>
  <Route path="/courseplayer" component={CoursePlayer}/>
  <Route path="/path" component={PathDetail}/>
  <Route path="/search/:id" component={Search}/>
  <Route path="/search" component={Search}/>
  <Route path="/feedback" component={Feedback}/>
  <Route path="/discover" component={Discover}/>
  <Route path="/team" component={Team}/>
  <Route component={FourOhFour}/>
</Switch>;

class AppRouter extends React.Component {

  static defaultProps = {};
  static propTypes    = {};

  state = {
    showNotifications: false,
    showMobileMenu   : false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  toggleNotificationsPanel = () => {
    this.setState({showNotifications: !this.state.showNotifications});
  };

  toggleMobileMenu = () => {
    this.setState({showMobileMenu: !this.state.showMobileMenu});
  };

  render() {
    return (
      <Router>
        <SiteContainer>
          <Header onAlertsClick={this.toggleNotificationsPanel}
                  onMobileMenuClick={this.toggleMobileMenu}/>
          <Routes/>
          <Footer/>
          <SlideMenu onBlockClick={this.toggleNotificationsPanel}
                     isOpen={this.state.showNotifications}>
            <SlideMenu.Header>
              <SlideMenu.Icon><SVGIcon name='bell'/></SlideMenu.Icon>
              <SlideMenu.Title>Notifications</SlideMenu.Title>
              <SlideMenu.Close
                onCloseClick={this.toggleNotificationsPanel}><SVGIcon
                name='x'/></SlideMenu.Close>
            </SlideMenu.Header>
            <SlideMenu.Section>
              Notifications wire frame p6
            </SlideMenu.Section>
          </SlideMenu>
          <SlideMenu onBlockClick={this.toggleMobileMenu}
                     isOpen={this.state.showMobileMenu}
                     position='left'>
            <SlideMenu.Header>
              <SlideMenu.Icon><SVGIcon name='menu'/></SlideMenu.Icon>
              <SlideMenu.Title>Menu</SlideMenu.Title>
              <SlideMenu.Close
                onCloseClick={this.toggleMobileMenu}><SVGIcon
                name='x'/></SlideMenu.Close>
            </SlideMenu.Header>
            <SlideMenu.Section>
              Menu wire frame p72
            </SlideMenu.Section>
          </SlideMenu>
        </SiteContainer>
      </Router>
    );
  }
}

export default AppRouter;