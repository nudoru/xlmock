import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {BigTabs} from "../components/BigTabs";
import Hero from "../layout/Hero";

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
            <BigTabs negative>
              <BigTabs.Tab><Link to='/user'>Profile</Link></BigTabs.Tab>
              <BigTabs.Tab><Link to='/user'>Learning Record</Link></BigTabs.Tab>
              <BigTabs.Tab><Link to='/user'>Settings</Link></BigTabs.Tab>
            </BigTabs>
          </Hero.Content>
        </Hero>
        <Content>
          <h1>User profile</h1>
        </Content>
      </React.Fragment>
    );
  }
}

export default UserProfile;