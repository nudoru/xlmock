import React from 'react';
import Content from "../layout/Content";

class Catalog extends React.Component {

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
          <h1>Catalog</h1>
        </Content>
      </React.Fragment>
    );
  }
}

export default Catalog;