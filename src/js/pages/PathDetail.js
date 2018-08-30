import React from 'react';
import Content from "../layout/Content";
import Hero from "../layout/Hero";
import HeroPathProgress from "../components/HeroPathProgress";
import HeroPathProgressMetadata from "../components/HeroPathProgressMetadata";

class PathDetail extends React.Component {

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
          <HeroPathProgress/>
          <HeroPathProgressMetadata/>
        </Hero>
        <Content>
          <h1>Path detail</h1>
        </Content>
      </React.Fragment>
    );
  }
}

export default PathDetail;