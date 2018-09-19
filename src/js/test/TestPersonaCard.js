import React from 'react';
import Card from '../components/Card';
import StatGroup from '../components/StatGroup';
import PersonaMed from "../components/PersonaMed";

import KoalaPic from "../../img/profiles/kowala.jpg";
import * as Lorem from "../utils/Lorem";
import {Theme} from "../theme/Theme";
import {GridFit} from "../components/GridFit";

class TestPersonaCard extends React.PureComponent {

  static defaultProps = {};
  static propTypes    = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const {className = null, children, ...rest} = this.props;

    let cls = [''];
    cls.push(className);

    return (<Card className='u-text-center'>
      <PersonaMed>
        <PersonaMed.Image>
          <img src={KoalaPic}/>
        </PersonaMed.Image>
        <PersonaMed.Details><p>{Lorem.firstLastName()}</p>
          <em>Raleigh, NC</em></PersonaMed.Details>
      </PersonaMed>
      <Card.Section>
        <GridFit gap={Theme.scale1} min='50px' max='1fr'>
          <StatGroup>
            <StatGroup.Data small>2</StatGroup.Data>
            <StatGroup.Label small>Paths</StatGroup.Label>
          </StatGroup>
          <StatGroup>
            <StatGroup.Data small>2</StatGroup.Data>
            <StatGroup.Label small>Courses</StatGroup.Label>
          </StatGroup>
          <StatGroup>
            <StatGroup.Data small>2</StatGroup.Data>
            <StatGroup.Label small>CE Credits</StatGroup.Label>
          </StatGroup>
        </GridFit>
      </Card.Section>
    </Card>);
  }
}

export default TestPersonaCard;