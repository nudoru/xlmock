import React from 'react';
import RacoonPic from "../../img/profiles/racoon.jpg";
import BearPic from "../../img/profiles/bear.jpg";
import KoalaPic from "../../img/profiles/kowala.jpg";
import Label from "../components/Label";
import VerticalLabelList from "../components/VerticalLabelList";
import Persona from "../components/Persona";
import PersonaBig from "../components/PersonaBig";
import * as Lorem from '../utils/Lorem';

class UserProfileSummary extends React.PureComponent {

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
          <PersonaBig>
            <PersonaBig.Image>
              <img src={RacoonPic}/>
            </PersonaBig.Image>
            <PersonaBig.Details><p>{Lorem.firstLastName()}</p>
              <em>Raleigh, NC</em></PersonaBig.Details>
          </PersonaBig>
        </div>
        <hr/>
        <div>
          <h1>Email Address</h1>
          <p>joe.user@redhat.com</p>
          <h1>Language</h1>
          <p>English</p>
          <h1>Managers</h1>
          <Persona>
            <Persona.Image>
              <img src={BearPic}/>
            </Persona.Image>
            <Persona.Details>
              <p>{Lorem.firstLastName()}</p>
              <em>Raleigh, NC</em>
            </Persona.Details>
          </Persona>
          <Persona>
            <Persona.Image>
              <img src={KoalaPic}/>
            </Persona.Image>
            <Persona.Details>
              <p>{Lorem.firstLastName()}</p>
              <em>Westford, MA</em>
            </Persona.Details>
          </Persona>
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