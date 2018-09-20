import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import StatGroup from './StatGroup';
import PersonaMed from "./PersonaMed";
import Persona from './Persona';
import {Theme} from "../theme/Theme";
import {GridFit} from "./GridFit";

class TeamCard extends React.PureComponent {

  static defaultProps = {
    name: '[Name]',
    office: '[Office Location]',
    image: null,
    paths: 0,
    courses: 0,
    credits: 0,
    card: true
  };
  static propTypes    = {
    name: PropTypes.string,
    office: PropTypes.string,
    image: PropTypes.object,
    paths: PropTypes.number,
    courses: PropTypes.number,
    credits: PropTypes.number,
    card: PropTypes.bool
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    console.log('render team card', this.props.card);

    return this.props.card ? this.renderCard() : this.renderList();
  }

  renderCard() {
    const {className = null, name, office, image, courses, paths, credits, card, ...rest} = this.props;

    let cls = [''];
    cls.push(className);

    return (<Card className='c-team-card' {...rest}>
      <PersonaMed>
        <PersonaMed.Image>
          {image}
        </PersonaMed.Image>
        <PersonaMed.Details><p>{name}</p>
          <em>{office}</em></PersonaMed.Details>
      </PersonaMed>
      <Card.VSection>
        <GridFit gap={Theme.scale1} min='50px' max='1fr'>
          <StatGroup>
            <StatGroup.Data small>{paths}</StatGroup.Data>
            <StatGroup.Label small>Paths</StatGroup.Label>
          </StatGroup>
          <StatGroup>
            <StatGroup.Data small>{courses}</StatGroup.Data>
            <StatGroup.Label small>Courses</StatGroup.Label>
          </StatGroup>
          <StatGroup>
            <StatGroup.Data small>{credits}</StatGroup.Data>
            <StatGroup.Label small>CE Credits</StatGroup.Label>
          </StatGroup>
        </GridFit>
      </Card.VSection>
    </Card>);
  }

  renderList() {
    const {className = null, name, office, image, courses, paths, credits, card, ...rest} = this.props;

    let cls = [''];
    cls.push(className);

    return (<Card className='c-team-card c-team-card--list' {...rest}>
      <Persona>
        <Persona.Image>
          {image}
        </Persona.Image>
        <Persona.Details><p>{name}</p>
          <em>{office}</em>
        </Persona.Details>
      </Persona>
      <Card.HSection>
        <GridFit gap={Theme.scale1} min='50px' max='1fr'>
          <StatGroup>
            <StatGroup.Data small>{paths}</StatGroup.Data>
            <StatGroup.Label small>Paths</StatGroup.Label>
          </StatGroup>
          <StatGroup>
            <StatGroup.Data small>{courses}</StatGroup.Data>
            <StatGroup.Label small>Courses</StatGroup.Label>
          </StatGroup>
          <StatGroup>
            <StatGroup.Data small>{credits}</StatGroup.Data>
            <StatGroup.Label small>CE Credits</StatGroup.Label>
          </StatGroup>
        </GridFit>
      </Card.HSection>
    </Card>);
  }

}

export default TeamCard;