import React from 'react';
import Content from "../layout/Content";

class Components extends React.Component {

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
          <h1>Components Testing</h1>
        </Content>
      </React.Fragment>
    );
  }
}

export default Components;