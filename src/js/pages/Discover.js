import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {BigTabs} from "../components/BigTabs";
import Hero from "../layout/Hero";

class Discover extends React.Component {

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
        <Hero>
          <BigTabs>
            <BigTabs.Tab><Link to='/'>Overview</Link></BigTabs.Tab>
            <BigTabs.Tab active><Link to='/discover'>Discover</Link></BigTabs.Tab>
            <BigTabs.Tab><Link to='/team'>Team</Link></BigTabs.Tab>
          </BigTabs>
        </Hero>
        <Content>
          <h1>Discover</h1>
        </Content>
      </React.Fragment>
    );
  }
}

export default Discover;