import React from 'react';
import Content from "../layout/Content";

class CoursePlayer extends React.PureComponent {

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
          <h1>Course Player</h1>
        </Content>
      </React.Fragment>
    );
  }
}

export default CoursePlayer;