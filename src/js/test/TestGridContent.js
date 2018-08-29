import React from 'react';
import PropTypes from 'prop-types';
import LearningCard from "../components/LearningCard";
import CardLayout from "../layout/CardLayout";
import _ from 'lodash';

/**
 * For quick mocking of pages
 */

const Path = () => <LearningCard type='path' duration='42 minutes' mobile>
  <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
    enim</h1>
  <p>Aliquam vulputate vestibulum eleifend.</p>
</LearningCard>;

const Course = () => <LearningCard type='course' duration='42 minutes' mobile>
  <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
    enim</h1>
  <p>Aliquam vulputate vestibulum eleifend.</p>
</LearningCard>;

class TestGridContent extends React.Component {

  static defaultProps = {
    title: 'Test Content',
    numPaths: 5,
    numCourses: 5
  };

  static propTypes = {
    title: PropTypes.string,
    numPaths: PropTypes.number,
    numCourses: PropTypes.number
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let paths = this.props.numPaths ? _.range(this.props.numPaths).map(i => <Path key={i}/> ) : [],
        courses = this.props.numCourses ? _.range(this.props.numCourses).map(i => <Course key={i}/> ) : [] ;

    return (<CardLayout title={this.props.title} ctaLabel='View More'>
      {paths.concat(courses)}
    </CardLayout>);
  }
}

export default TestGridContent;