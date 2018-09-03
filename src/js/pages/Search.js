import React from 'react';
import Content from "../layout/Content";
import TestGridContent from "../test/TestGridContent";
import Label from "../components/Label";
import SVGIcon from "../components/SVGIcon";
import ButtonBar from "../components/ButtonBar";
import SlideMenu from "../components/SlideMenu";

class Search extends React.Component {

  static defaultProps = {};
  static propTypes    = {};

  state = {
    showFilters: true
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <Content>
          <h4>123 Results</h4>
          <Label>Ansible<SVGIcon name='x' width='14' height='14' className='u-padding-left'/></Label>
          <Label>OpenShift<SVGIcon name='x' width='14' height='14' className='u-padding-left'/></Label>
          <Label>Infrastructure<SVGIcon name='x' width='14' height='14' className='u-padding-left'/></Label>
          <TestGridContent mode='results' numPaths={2} numCourses={7} controls={this.renderControls()}/>
        </Content>
        <SlideMenu isOpen={this.state.showFilters}/>
      </React.Fragment>
    );
  }

  onFiltersClick = () => {
    this.setState({showFilters: !this.state.showFilters});
  };

  renderControls() {
    return <ButtonBar>
      <ButtonBar.Icon><a onClick={this.onFiltersClick}><SVGIcon name='sliders'/></a></ButtonBar.Icon>
      <ButtonBar.Icon><a><SVGIcon name='grid'/></a></ButtonBar.Icon>
      <ButtonBar.Icon><a><SVGIcon name='list'/></a></ButtonBar.Icon>
    </ButtonBar>;
  }
}

export default Search;