import React from 'react';
import Content from "../layout/Content";
import Hero from "../layout/Hero";
import Button from "../components/Button";
import TestGridContent from "../test/TestGridContent";
import {unslugify} from '../utils/Toolbox';

class CatalogCategory extends React.Component {

  static defaultProps = {};
  static propTypes    = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const tagValueIDSlug = this.props.match.params.id,
          tagValue       = unslugify(tagValueIDSlug);

    return (
      <React.Fragment>
        <Hero>
          <Hero.Content>
            <div className='l-categorieshero'>
              <h1>{tagValue}</h1>
            </div>
          </Hero.Content>
        </Hero>
        <Content>
          <TestGridContent grid={false} title="Learning Paths"
                           badgeCount={0} numPaths={15} numCourses={0}
                           status={<Button>View All</Button>} allowViewChange
                           allowSort={true}/>
          <TestGridContent grid={false} title="Courses"
                           badgeCount={0} numPaths={0} numCourses={50}
                           status={<Button>View All</Button>} allowViewChange
                           allowSort={true}/>
        </Content>
      </React.Fragment>
    );
  }
}

export default CatalogCategory;