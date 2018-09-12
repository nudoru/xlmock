import React from 'react';
import PropTypes from 'prop-types';
import RacoonPic from "../../img/profiles/racoon.jpg";
import BearPic from "../../img/profiles/bear.jpg";
import KoalaPic from "../../img/profiles/kowala.jpg";
import Label from "./Label";

class UserProfileSummary extends React.Component {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
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
              <em>Westford, MA</em>
            </div>
          </div>
          <h1>Audiences</h1>
          <Label>All associates</Label>
          <Label>Sales New Hire</Label>
          <Label>New Hire</Label>
        </div>
      </div>
    );
  }
}

export default UserProfileSummary;