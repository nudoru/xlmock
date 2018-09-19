import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {Tabs} from "../components/Tabs";
import Hero from "../layout/Hero";
import UserProfileSummary from "../layout/UserProfileSummary";
import {GridFit} from "../components/GridFit";
import {Theme} from "../theme/Theme";
import Card from '../components/Card';
import * as Lorem from '../utils/Lorem';

class UserProfile extends React.Component {

  static defaultProps = {};
  static propTypes    = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <Hero>
          <Hero.Content>
            <div className='l-userprofile__hero l-userprofile__grid'>
              <Tabs negative className='l-userprofile__nav'>
                <Tabs.Tab active><Link to='/user'>Profile</Link></Tabs.Tab>
                <Tabs.Tab><Link to='/userpaths'>Learning Paths</Link></Tabs.Tab>
                <Tabs.Tab><Link to='/userrecord'>Learning Record</Link></Tabs.Tab>
                <Tabs.Tab><Link to='/usersettings'>Settings</Link></Tabs.Tab>
              </Tabs>
            </div>
          </Hero.Content>
        </Hero>
        <Content>
          <div className='l-userprofile__grid'>
            <UserProfileSummary/>
            <div className='l-userprofile__content'>
              <GridFit gap={Theme.scale1} min='150px' max='1fr'>
                <Card className='u-text-center'><h2 className='u-margin-none'>5</h2><br/><span>Paths</span></Card>
                <Card className='u-text-center'>Blah2</Card>
                <Card className='u-text-center'>Blah3</Card>
                <Card className='u-text-center'>Blah4</Card>
              </GridFit>
              <div className='u-padded'></div>
              <Card>Stuff</Card>
            </div>
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default UserProfile;