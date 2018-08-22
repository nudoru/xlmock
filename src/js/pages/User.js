import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {BigTab, BigTabs} from "../components/BigTabs";
import Hero from "../layout/Hero";

class User extends React.Component {

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
          <BigTabs>
            <BigTab><Link to='/user'>Profile</Link></BigTab>
            <BigTab><Link to='/user'>Learning Record</Link></BigTab>
            <BigTab><Link to='/user'>Settings</Link></BigTab>
          </BigTabs>
        </Hero>
        <Content>
          <h1>User profile</h1>
        </Content>
      </React.Fragment>
    );
  }
}

export default User;