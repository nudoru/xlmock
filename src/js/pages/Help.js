import React from 'react';
import Content from "../layout/Content";

class Help extends React.Component {

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
          <h1>Help</h1>
        </Content>
      </React.Fragment>
    );
  }
}

export default Help;