import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import ProgressBar from "../components/ProgressBar";
import {BigTabs} from "../components/BigTabs";

class CourseDetail extends React.Component {

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
      <React.Fragment>
        <Content full>
          <div className='course-detail'>
            <div className='course-detail__details'>
              <div className='course-detail__details--title'>
                <h2>Course</h2>
                <h1>Understanding Linux Fundamentals as Applied to Reactant Hyperfluxors</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci mi. Vestibulum tellus sem, tristique sed lacus sit amet, sollicitudin pharetra turpis. Ut sodales scelerisque urna bibendum varius. </p>
                <ProgressBar percent={25} status=' - 2 of 4 activities completed'/>
              </div>
              <div className='course-detail__details--metadata'>Tag? / Mobile</div>
            </div>
            <div className='course-detail__content'>
              <BigTabs>
                <BigTabs.Tab active><Link to='/user'>Overview</Link></BigTabs.Tab>
                <BigTabs.Tab><Link to='/user'>Activities</Link></BigTabs.Tab>
                <BigTabs.Tab><Link to='/user'>Upcoming</Link></BigTabs.Tab>
              </BigTabs>
            </div>
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default CourseDetail;