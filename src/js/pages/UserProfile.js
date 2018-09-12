import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {Tabs} from "../components/Tabs";
import Hero from "../layout/Hero";
import Label from "../components/Label";

import KoalaPic from '../../img/profiles/kowala.jpg';
import BearPic from '../../img/profiles/bear.jpg';
import RacoonPic from '../../img/profiles/racoon.jpg';

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
                <Tabs.Tab><Link to='/user'>Learning Paths</Link></Tabs.Tab>
                <Tabs.Tab><Link to='/user'>Learning Record</Link></Tabs.Tab>
                <Tabs.Tab><Link to='/user'>Settings</Link></Tabs.Tab>
              </Tabs>
            </div>
          </Hero.Content>
        </Hero>
        <Content>
          <div className='l-userprofile__grid'>
            <div className='l-userprofile__summary'>
              <div className='l-userprofile__photo'>
                <div className='c-usergroup--big'>
                  <div className='c-usergroup--big__photo'>
                    <img src={RacoonPic} />
                  </div>
                  <div className='c-usergroup--big__profile'>
                    <p>John Learner</p>
                    <em>Raleigh, NC</em>
                  </div>
                </div>
              </div>
              <hr/>
              <div>
                <h1>Email Address</h1>
                <p>joe.user@redhat.com</p>
                <h1>Language</h1>
                <p>English</p>
                <h1>Managers</h1>
                <div className='c-usergroup'>
                  <div className='c-usergroup__photo'>
                    <img src={BearPic} />
                  </div>
                  <div className='c-usergroup__profile'>
                    <p>John Smith</p>
                    <em>Raleigh, NC</em>
                  </div>
                </div>
                <div className='c-usergroup'>
                  <div className='c-usergroup__photo'>
                    <img src={KoalaPic} />
                  </div>
                  <div className='c-usergroup__profile'>
                    <p>Jane Doe</p>
                    <em>Westford, NC</em>
                  </div>
                </div>
                <h1>Audiences</h1>
                <Label>All associates</Label>
                <Label>Sales New Hire</Label>
                <Label>New Hire</Label>
              </div>
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