import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {BigTabs} from "../components/BigTabs";
import CourseDetailDetails from "../components/CourseDetailDetails";

class CourseDetailActivities extends React.Component {

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
          <div className='l-course-detail'>
            <CourseDetailDetails/>
            <div className='l-course-detail__content'>
              <BigTabs>
                <BigTabs.Tab><Link to='/course'>Overview</Link></BigTabs.Tab>
                <BigTabs.Tab active><Link to='/courseactivities'>Activities</Link></BigTabs.Tab>
                <BigTabs.Tab><Link to='/courseupcoming'>Upcoming</Link></BigTabs.Tab>
              </BigTabs>
              <p>
                Course contents / topics / activities
              </p>
            </div>
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default CourseDetailActivities;