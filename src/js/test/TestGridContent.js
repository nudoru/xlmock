import React from 'react';
import PropTypes from 'prop-types';
import LearningCard from "../components/LearningCard";
import CardLayout from "../layout/CardLayout";
import _ from 'lodash';
import * as Lorem from '../utils/Lorem';
import Button from "../components/Button";
import SVGIcon from "../components/SVGIcon";
import ButtonBar from "../components/ButtonBar";
import AlertBadge from "../components/AlertBadge";

/**
 * For quick mocking of pages
 */

const Path = () => <LearningCard type='path' duration='42 minutes' tag='Infrastructure' mobile>
  <h1>{Lorem.title(5,10)}</h1>
  <p>{Lorem.sentence(10,20)}</p>
</LearningCard>;

const Course = () => <LearningCard type='course' duration='42 minutes' tag='Ansible' mobile>
  <h1>{Lorem.title(5,10)}</h1>
  <p>{Lorem.sentence(10,20)}</p>
</LearningCard>;

const ListFilters = () => <React.Fragment>
  <Button>Recent <SVGIcon name='chevron-down' className='u-icon-button--right'/></Button>
  <ButtonBar>
    <ButtonBar.Icon><a href='#'><SVGIcon name='grid'/></a></ButtonBar.Icon>
    <ButtonBar.Icon><a href='#'><SVGIcon name='list'/></a></ButtonBar.Icon>
  </ButtonBar>
</React.Fragment>;

const ResultsFilters = () =>  <ButtonBar>
    <ButtonBar.Icon><a href='#'><SVGIcon name='sliders'/></a></ButtonBar.Icon>
    <ButtonBar.Icon><a href='#'><SVGIcon name='grid'/></a></ButtonBar.Icon>
    <ButtonBar.Icon><a href='#'><SVGIcon name='list'/></a></ButtonBar.Icon>
  </ButtonBar>

class TestGridContent extends React.Component {

  static defaultProps = {
    title: '',
    numPaths: 5,
    numCourses: 5,
    badgeCount: 0,
    mode: 'list' // list or results
  };

  static propTypes = {
    title: PropTypes.string,
    numPaths: PropTypes.number,
    numCourses: PropTypes.number,
    badgeCount: PropTypes.number,
    mode: PropTypes.string
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let paths = this.props.numPaths ? _.range(this.props.numPaths).map(i => <Path key={i}/> ) : [],
        courses = this.props.numCourses ? _.range(this.props.numCourses).map(i => <Course key={i}/> ) : [],
        filters = this.props.mode === 'list' ? <ListFilters/> : <ResultsFilters/>,
        cta = this.props.mode === 'list' ? <Button>View More</Button> : <p>(Infinity scroll)</p>;

    return (<CardLayout title={this.props.title}>
      <CardLayout.Title>{this.props.title}{this.props.badgeCount ? <AlertBadge>{this.props.badgeCount}</AlertBadge> : null}</CardLayout.Title>
      <CardLayout.Controls>{filters}</CardLayout.Controls>
      <CardLayout.Content>{paths.concat(courses)}</CardLayout.Content>
      <CardLayout.Status>{cta}</CardLayout.Status>
    </CardLayout>);
  }
}

export default TestGridContent;