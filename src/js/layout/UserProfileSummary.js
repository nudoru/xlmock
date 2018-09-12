import React from 'react';
import RacoonPic from "../../img/profiles/racoon.jpg";
import BearPic from "../../img/profiles/bear.jpg";
import KoalaPic from "../../img/profiles/kowala.jpg";
import Label from "../components/Label";
import VerticalLabelList from "../components/VerticalLabelList";
import UserProfile from "../components/UserProfile";
import UserProfileBig from "../components/UserProfileBig";

class UserProfileSummary extends React.Component {

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
      <div className='l-userprofile__summary'>
        <div className='l-userprofile__photo'>
          <UserProfileBig>
            <UserProfileBig.Image>
              <img src={RacoonPic}/>
            </UserProfileBig.Image>
            <UserProfileBig.Details><p>John Learner</p>
              <em>Raleigh, NC</em></UserProfileBig.Details>
          </UserProfileBig>
        </div>
        <hr/>
        <div>
          <h1>Email Address</h1>
          <p>joe.user@redhat.com</p>
          <h1>Language</h1>
          <p>English</p>
          <h1>Managers</h1>
          <UserProfile>
            <UserProfile.Image>
              <img src={BearPic}/>
            </UserProfile.Image>
            <UserProfile.Details>
              <p>John Smith</p>
              <em>Raleigh, NC</em>
            </UserProfile.Details>
          </UserProfile>
          <UserProfile>
            <UserProfile.Image>
              <img src={KoalaPic}/>
            </UserProfile.Image>
            <UserProfile.Details>
              <p>Jane Doe</p>
              <em>Westford, MA</em>
            </UserProfile.Details>
          </UserProfile>
          <h1>Audiences</h1>
          <VerticalLabelList>
            <Label>All associates</Label>
            <Label>Sales New Hire</Label>
            <Label>New Hire</Label>
          </VerticalLabelList>
        </div>
      </div>
    );
  }
}

export default UserProfileSummary;