import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {BigTabs} from "../components/BigTabs";
import CourseDetailDetails from "../components/CourseDetailDetails";

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
          <div className='l-course-detail'>
            <CourseDetailDetails/>
            <div className='l-course-detail__content'>
              <BigTabs>
                <BigTabs.Tab active><Link to='/course'>Overview</Link></BigTabs.Tab>
                <BigTabs.Tab><Link to='/courseactivities'>Activities</Link></BigTabs.Tab>
                <BigTabs.Tab><Link to='/courseupcoming'>Upcoming</Link></BigTabs.Tab>
              </BigTabs>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci mi. Vestibulum tellus sem, tristique sed lacus sit amet, sollicitudin pharetra turpis. Ut sodales scelerisque urna bibendum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis porta lobortis nisl, non blandit enim. Cras eros tortor, pellentesque ut orci vitae, consectetur dictum erat. Morbi auctor risus vitae neque fringilla congue. Integer ac augue quis mi viverra commodo. Nullam ornare, purus ut sollicitudin dignissim, elit arcu sollicitudin dui, ac dictum enim dolor id diam. Integer et lobortis elit. Maecenas varius feugiat magna, eu bibendum neque blandit eu. Nunc sed faucibus ante. Pellentesque at lectus at ante tempus condimentum. Aliquam ac consequat tortor, at rutrum neque. Nam fermentum nulla eget finibus imperdiet.
              </p>
            </div>
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default CourseDetail;