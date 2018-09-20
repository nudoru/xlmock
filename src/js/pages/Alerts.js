import React from 'react';
import Content from "../layout/Content";

class Alerts extends React.Component {

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
          <h1>Alerts</h1>
        </Content>
      </React.Fragment>
    );
  }
}

export default Alerts;