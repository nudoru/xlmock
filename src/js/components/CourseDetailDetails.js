import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from "./ProgressBar";
import Button from "./Button";
import Tag from "./Tag";
import SVGIcon from "./SVGIcon";
import {withRouter} from 'react-router-dom';

class CourseDetailDetails extends React.Component {

  static defaultProps = {};
  static propTypes = {};

  state = {
    resumeCourse: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  onResumeClick = () => {
    this.props.history.push('/courseplayer');
  }

  render() {
    return (<div className='l-course-detail__details'>
      <div className='c-course-detail__details--title'>
        <h2>Online Course</h2>
        <h1>Understanding Linux Fundamentals as Applied to Reactant Hyperfluxors</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci mi. Vestibulum tellus sem, tristique sed lacus sit amet, sollicitudin pharetra turpis. Ut sodales scelerisque urna bibendum varius. </p>
        <ProgressBar percent='25' status=' - 2 of 4 activities completed'/>
        <Button negative primary onClick={this.onResumeClick}>Resume</Button>
      </div>
      <div className='c-course-detail__details--metadata'>
        <div className='c-course-detail__details--metadata--tags'>
          <Tag negative>Infrastructure</Tag>
        </div>
        <div className='c-course-detail__details--metadata--mobile'>
          <SVGIcon large name='mobile'/>
        </div>
      </div>
    </div>);
  }
}

export default withRouter(CourseDetailDetails);