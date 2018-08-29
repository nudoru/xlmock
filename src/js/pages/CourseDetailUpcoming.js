import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {BigTabs} from "../components/BigTabs";
import CourseDetailDetails from "../components/CourseDetailDetails";

class CourseDetailUpcoming extends React.Component {

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
            <CourseDetailDetails/>
            <div className='course-detail__content'>
              <BigTabs>
                <BigTabs.Tab><Link to='/course'>Overview</Link></BigTabs.Tab>
                <BigTabs.Tab><Link to='/courseactivities'>Activities</Link></BigTabs.Tab>
                <BigTabs.Tab active><Link to='/courseupcoming'>Upcoming</Link></BigTabs.Tab>
              </BigTabs>
              <p>
                Class schedule
              </p>
            </div>
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default CourseDetailUpcoming;