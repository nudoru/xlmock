import React from 'react';
import SiteContainer from "./layout/SiteContainer";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Content from "./layout/Content";
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
    return (
      <SiteContainer>
        <Header/>
        <Hero/>
        <Content/>
        <Footer/>
      </SiteContainer>
    );
  }
}

export default App;