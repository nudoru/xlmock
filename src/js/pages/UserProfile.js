import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {Tabs} from "../components/Tabs";
import Hero from "../layout/Hero";
import UserProfileSummary from "../layout/UserProfileSummary";
import {GridFit} from "../components/GridFit";
import {Theme} from "../theme/Theme";
import Card from '../components/Card';
import StatGroup from "../components/StatGroup";

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
                <Tabs.Tab><Link to='/userrecord'>Learning
                  Record</Link></Tabs.Tab>
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
                <Card className='u-text-center'>
                  <StatGroup>
                    <StatGroup.Data>2</StatGroup.Data>
                    <StatGroup.Label>Paths</StatGroup.Label>
                  </StatGroup>
                </Card>
                <Card className='u-text-center'>
                  <StatGroup>
                    <StatGroup.Data>42</StatGroup.Data>
                    <StatGroup.Label>Courses</StatGroup.Label>
                  </StatGroup>
                </Card>
                <Card className='u-text-center'>
                  <StatGroup>
                    <StatGroup.Data>102</StatGroup.Data>
                    <StatGroup.Label>CE Credits</StatGroup.Label>
                  </StatGroup>
                </Card>
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