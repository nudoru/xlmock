import React from 'react';
import Content from "../layout/Content";
import TestGridContent from "../test/TestGridContent";
import Label from "../components/Label";
import SVGIcon from "../components/SVGIcon";
import ButtonBar from "../components/ButtonBar";
import SlideMenu from "../components/SlideMenu";
import ExpandingMenu from "../components/ExpandingMenu";
import CheckBox from "../components/CheckBox";

class Search extends React.Component {

  static defaultProps = {};
  static propTypes    = {};

  state = {
    showFilters: false
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
          <div className='l-search-results'>
            <h1>123 Results</h1>
            <div className='l-search-results__matches'>
            <Label>Ansible<SVGIcon name='x' width='14' height='14'
                                   className='u-padding-left'/></Label>
            <Label>OpenShift<SVGIcon name='x' width='14' height='14'
                                     className='u-padding-left'/></Label>
            <Label>Infrastructure<SVGIcon name='x' width='14' height='14'
                                          className='u-padding-left'/></Label>
            </div>
          </div>
          <TestGridContent mode='results' numPaths={2} numCourses={7}
                           controls={this.renderControls()}/>
        </Content>
        <SlideMenu onBlockClick={this.toggleFiltersPanel}
                   isOpen={this.state.showFilters}>
          <SlideMenu.Header>
            <SlideMenu.Icon><SVGIcon name='sliders'/></SlideMenu.Icon>
            <SlideMenu.Title>Filters</SlideMenu.Title>
            <SlideMenu.Close onCloseClick={this.toggleFiltersPanel}><SVGIcon
              name='x'/></SlideMenu.Close>
          </SlideMenu.Header>
          <SlideMenu.Section>
            <ExpandingMenu title='Type' open>
              <CheckBox>All</CheckBox>
              <CheckBox>Learning Path</CheckBox>
              <CheckBox>Course</CheckBox>
            </ExpandingMenu></SlideMenu.Section>
          <SlideMenu.Section>
            <ExpandingMenu title='Content Source'>
              <CheckBox>LMS</CheckBox>
              <CheckBox>Lynda</CheckBox>
              <CheckBox>Kaltura</CheckBox>
            </ExpandingMenu>
          </SlideMenu.Section>
          <SlideMenu.Section>
            <ExpandingMenu title='Delivery Mode'>
              <CheckBox>Online Self-paced</CheckBox>
              <CheckBox>Instructor-Led</CheckBox>
              <CheckBox>Virtual Instructor-Led</CheckBox>
            </ExpandingMenu>
          </SlideMenu.Section>
          <SlideMenu.Section>
            <ExpandingMenu title='Skill Level'>
              <CheckBox>Foundational</CheckBox>
              <CheckBox>Intermediate</CheckBox>
              <CheckBox>Advanced</CheckBox>
            </ExpandingMenu>
          </SlideMenu.Section>
          <SlideMenu.Section>
            <ExpandingMenu title='Language'>
              <CheckBox>English</CheckBox>
              <CheckBox>Spanish</CheckBox>
              <CheckBox>Chinese</CheckBox>
            </ExpandingMenu>
          </SlideMenu.Section>
        </SlideMenu>
      </React.Fragment>
    );
  }

  toggleFiltersPanel = () => {
    this.setState({showFilters: !this.state.showFilters});
  };

  renderControls() {
    return <ButtonBar>
      <ButtonBar.Icon><a onClick={this.toggleFiltersPanel}><SVGIcon
        name='sliders'/></a></ButtonBar.Icon>
      <ButtonBar.Icon><a><SVGIcon name='grid'/></a></ButtonBar.Icon>
      <ButtonBar.Icon><a><SVGIcon name='list'/></a></ButtonBar.Icon>
    </ButtonBar>;
  }
}

export default Search;