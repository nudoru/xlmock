import React from 'react';
import SiteContainer from "./layout/SiteContainer";
import Header from "./layout/Header";
import {AppRouter} from "./pages/AppRouter";
import Footer from "./layout/Footer";

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