import React from 'react';
import Content from "../layout/Content";

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
        <Content>
          <h1>Course detail</h1>
        </Content>
      </React.Fragment>
    );
  }
}

export default CourseDetail;