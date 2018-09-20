import React from 'react';
import Content from "../layout/Content";
import Hero from "../layout/Hero";
import Button from "../components/Button";
import TestGridContent from "../test/TestGridContent";
import * as Lorem from '../utils/Lorem';

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
    return (
      <React.Fragment>
        <Hero>
          <Hero.Content>
            <div className='l-categorieshero'>
              <h1>Catalog Category</h1>
              <p>{Lorem.sentence(10,20)}</p>
            </div>
          </Hero.Content>
        </Hero>
        <Content>
          <TestGridContent mode='list' title="Learning Paths"
                           badgeCount={0} numPaths={15} numCourses={0}
                           status={<Button>View All</Button>} allowViewChange
                           allowSort={true}/>
          <TestGridContent mode='list' title="Courses"
                           badgeCount={0} numPaths={0} numCourses={50}
                           status={<Button>View All</Button>} allowViewChange
                           allowSort={true}/>
        </Content>
      </React.Fragment>
    );
  }
}

export default CatalogCategory;