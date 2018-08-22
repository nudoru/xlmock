import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {BigTab, BigTabs} from "../components/BigTabs";
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
            <BigTab><Link to='/'>Overview</Link></BigTab>
            <BigTab active><Link to='/discover'>Discover</Link></BigTab>
            <BigTab><Link to='/team'>Team</Link></BigTab>
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