import React from 'react';
import Content from "../layout/Content";

class FourOhFour extends React.Component {

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
          <h1>¯\_(シ)_/¯</h1>
          <h2>Nothing here!</h2>
        </Content>
      </React.Fragment>
    );
  }
}

export default FourOhFour;