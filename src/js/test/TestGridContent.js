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

const MockPath = ({asCard}) => <LearningCard type='path' duration='42 minutes'
                                     tag='Infrastructure' mobile card={asCard}>
  <h1>{Lorem.title(5, 10)}</h1>
  <p>{Lorem.sentence(10, 20)}</p>
</LearningCard>;

const MockCourse = ({asCard}) => <LearningCard type='course' duration='5 hours 30 minutes'
                                       tag='Ansible' card={asCard}>
  <h1>{Lorem.title(5, 10)}</h1>
  <p>{Lorem.sentence(10, 20)}</p>
</LearningCard>;

class TestGridContent extends React.Component {

  static defaultProps = {
    title          : '',
    numPaths       : 5,
    numCourses     : 5,
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
        content = paths.concat(courses),
        contentView = this.state.isGridView ? <CardLayout.GridContent>{content}</CardLayout.GridContent> : <CardLayout.ListContent>{content}</CardLayout.ListContent>;

    return (<CardLayout title={this.props.title}>
      <CardLayout.Title>{this.props.title}{this.props.badgeCount ?
        <AlertBadge>{this.props.badgeCount}</AlertBadge> : null}</CardLayout.Title>
      <CardLayout.Controls>{this.getDefaultListFilters()}</CardLayout.Controls>
      {contentView}
      <CardLayout.Status>{this.props.status}</CardLayout.Status>
    </CardLayout>);
  }

  getDefaultListFilters() {
    return <React.Fragment>
      {this.props.allowSort ? <Button>Recent <SVGIcon name='chevron-down'
                                                      className='u-icon-button--right'/></Button> : null}
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