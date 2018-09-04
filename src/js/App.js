import React from 'react';
import AppRouter from "./AppRouter";

class App extends React.Component {

  static defaultProps = {};
  static propTypes    = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return <AppRouter/>;
  }
}

export default App;