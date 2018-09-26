import React from 'react';
import Content from "../layout/Content";
import TestGridContent from "../test/TestGridContent";
import Label from "../components/Label";
import SVGIcon from "../components/SVGIcon";
import ButtonBar from "../components/ButtonBar";
import SlideMenu from "../components/SlideMenu";
import ExpandingMenu from "../components/ExpandingMenu";
import CheckBox from "../components/CheckBox";
import {unslugify} from '../utils/Toolbox';
import Chip from "../components/Chip";

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
    const tagValueIDSlug = this.props.match.params.id,
          tagValue       = tagValueIDSlug ? unslugify(tagValueIDSlug) : null;

    console.log('Search',tagValue);

    let tags = tagValue ? <Chip>{tagValue}</Chip> : [ <span><Chip>Ansible</Chip><Chip>OpenShift</Chip><Chip>Infrastructure</Chip></span>];

    return (
      <React.Fragment>
        <Content>
          <div className='l-search-results'>
            <h1>123 Results</h1>
            <div className='l-search-results__matches'>
            {tags}
            </div>
          </div>
          <TestGridContent mode='results' numPaths={2} numCourses={7}
                           tag={tagValue}
                           controls={this.filterButton()} status={<p>(Infinity scroll)</p>} allowViewChange allowSort grid={false}/>
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
              <CheckBox>Allego</CheckBox>
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

  filterButton() {
    return <ButtonBar.Icon><a onClick={this.toggleFiltersPanel}><SVGIcon
      name='sliders'/></a></ButtonBar.Icon>;
  }
}

export default Search;