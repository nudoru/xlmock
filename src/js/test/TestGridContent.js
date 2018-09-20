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
import TeamCard from "../components/TeamCard";
import DropDown from "../components/Dropdown";

/**
 * For quick mocking of pages
 */

const profilePicks = [
  require("../../img/profiles/bear.jpg"),
  require("../../img/profiles/giraffe.jpg"),
  require("../../img/profiles/guinnipig.jpg"),
  require("../../img/profiles/osterage.jpg"),
  require("../../img/profiles/polar.jpg"),
  require("../../img/profiles/pug.jpg"),
  require("../../img/profiles/racoon.jpg"),
  require("../../img/profiles/squirell.jpg"),
  require("../../img/profiles/taz.jpg"),
  require("../../img/rover-default-profile.png"),
  require("../../img/rover-default-profile.png"),
  require("../../img/rover-default-profile.png"),
  require("../../img/rover-default-profile.png"),
  require("../../img/rover-default-profile.png"),
  require("../../img/rover-default-profile.png"),
  require("../../img/rover-default-profile.png"),
  require("../../img/rover-default-profile.png")
];

const MockPath = ({asCard}) => <LearningCard type='path' duration='42 minutes'
                                     tag='Infrastructure' mobile card={asCard}>
  <h1>{Lorem.title(2, 10)}</h1>
  <p>{Lorem.sentence(5, 15)}</p>
</LearningCard>;

const MockCourse = ({asCard}) => <LearningCard type='course' duration='5 hours 30 minutes'
                                       tag='Ansible' card={asCard}>
  <h1>{Lorem.title(2, 10)}</h1>
  <p>{Lorem.sentence(5, 15)}</p>
</LearningCard>;

const MockTeam = ({asCard}) => <TeamCard
  card={asCard}
  name={Lorem.firstLastName()}
  office='Raleigh, NC'
  image={<img src={profilePicks[Lorem.rNumber(0, profilePicks.length-1)]} />}
  paths={Lorem.rNumber(1, 10)}
  courses={Lorem.rNumber(3, 40)}
  credits={Lorem.rNumber(0, 100)}
/>;

class TestGridContent extends React.Component {

  static defaultProps = {
    title          : '',
    numPaths       : 5,
    numCourses     : 5,
    numPeople     : 0,
    badgeCount     : 0,
    mode           : 'list', // list or results
    allowSort      : false,
    allowViewChange: false,
    grid           : true
  };

  static propTypes = {
    title          : PropTypes.string,
    numPaths       : PropTypes.number,
    numCourses     : PropTypes.number,
    numPeople     : PropTypes.number,
    badgeCount     : PropTypes.number,
    mode           : PropTypes.string,
    controls       : PropTypes.object,
    status         : PropTypes.object,
    allowSort      : PropTypes.bool,
    allowViewChange: PropTypes.bool,
    grid           : PropTypes.bool
  };

  state = {
    isGridView: this.props.grid
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }


  onGridClick = () => {
    this.setState({isGridView: true});
  };

  onListClick = () => {
    this.setState({isGridView: false});
  };

  toggleView = () => {
    this.setState({isGridView: !this.state.isGridView});
  };


  render() {
    let paths   = this.props.numPaths ? _.range(this.props.numPaths).map(i =>
          <MockPath key={i} asCard={this.state.isGridView}/>) : [],
        courses = this.props.numCourses ? _.range(this.props.numCourses).map(i =>
          <MockCourse key={i} asCard={this.state.isGridView}/>) : [],
        people = this.props.numPeople ? _.range(this.props.numPeople).map(i =>
          <MockTeam key={i} asCard={this.state.isGridView}/>) : [],
        content = paths.concat(courses.concat(people)),
        contentView = this.state.isGridView ? <CardLayout.GridContent>{content}</CardLayout.GridContent> : <CardLayout.ListContent>{content}</CardLayout.ListContent>;

    return (<CardLayout title={this.props.title}>
      <CardLayout.Title>{this.props.title}{this.props.badgeCount ?
        <AlertBadge>{this.props.badgeCount}</AlertBadge> : null}</CardLayout.Title>
      <CardLayout.Controls>{this.getDefaultListFilters()}</CardLayout.Controls>
      {contentView}
      <CardLayout.Status>{this.props.status}</CardLayout.Status>
    </CardLayout>);
  }

  getSortFilters() {
    return (
    <DropDown title='Order'>
      <DropDown.Entry onClick={this.onSortFilterClick}>Recently added</DropDown.Entry>
      <DropDown.Entry onClick={this.onSortFilterClick}>Alphabetical (A-Z)</DropDown.Entry>
      <DropDown.Entry onClick={this.onSortFilterClick}>Reverse alphabetical (Z-A)</DropDown.Entry>
    </DropDown>
    );
  }

  onSortFilterClick = (e) => {
    console.log('sort filter menu click',e.target);
  };

  getDefaultListFilters() {
    return <React.Fragment>
      {this.props.allowSort ? this.getSortFilters() : null}
      <ButtonBar>
        {this.props.controls ? this.props.controls : null}
        {this.props.allowViewChange ? this.getSortControls() : null}
      </ButtonBar>
    </React.Fragment>;
  }

  getSortControls() {
    let gridBtnCls = this.state.isGridView ? 'is-active' : '',
        listBtnCls = !this.state.isGridView ? 'is-active' : '';

    return <React.Fragment>
      <ButtonBar.Icon className={gridBtnCls}><a
        onClick={this.onGridClick}><SVGIcon name='grid'/></a></ButtonBar.Icon>
      <ButtonBar.Icon className={listBtnCls}><a
        onClick={this.onListClick}><SVGIcon name='list'/></a></ButtonBar.Icon>
    </React.Fragment>
  }

}

export default TestGridContent;