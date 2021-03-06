import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {Tabs} from "../components/Tabs";
import Hero from "../layout/Hero";
import UserProfileSummary from "../layout/UserProfileSummary";

class UserPaths extends React.Component {

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
                <Tabs.Tab><Link to='/user'>Profile</Link></Tabs.Tab>
                <Tabs.Tab active><Link to='/userpaths'>Learning Paths</Link></Tabs.Tab>
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
              Paths
            </div>
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default UserPaths;