import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {Tabs} from "../components/Tabs";
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
            <div className='l-userprofile__grid'>
              <Tabs negative className='l-userprofile__nav'>
                <Tabs.Tab active><Link to='/user'>Profile</Link></Tabs.Tab>
                <Tabs.Tab><Link to='/user'>Learning Paths</Link></Tabs.Tab>
                <Tabs.Tab><Link to='/user'>Learning Record</Link></Tabs.Tab>
                <Tabs.Tab><Link to='/user'>Settings</Link></Tabs.Tab>
              </Tabs>
            </div>
          </Hero.Content>
        </Hero>
        <Content>
          <div className='l-userprofile__grid'>
            <div className='l-userprofile__sumary'>
              <div>[profile image]</div>
              <div>[basic info]</div>
              <div>[managers lockup]</div>
              <div>[audiences list]</div>
            </div>
            <div className='l-userprofile__content'>
              content
            </div>
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default UserProfile;