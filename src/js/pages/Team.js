import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {BigTabs} from "../components/BigTabs";
import Hero from "../layout/Hero";

class Team extends React.Component {

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
          <Hero.Content>
            <BigTabs negative>
              <BigTabs.Tab><Link to='/'>Overview</Link></BigTabs.Tab>
              <BigTabs.Tab><Link to='/discover'>Discover</Link></BigTabs.Tab>
              <BigTabs.Tab active><Link to='/team'>Team</Link></BigTabs.Tab>
            </BigTabs>
          </Hero.Content>
        </Hero>
        <Content>
          <h1>Team</h1>
        </Content>
      </React.Fragment>
    );
  }
}

export default Team;