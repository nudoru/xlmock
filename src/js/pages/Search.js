import React from 'react';
import Content from "../layout/Content";
import TestGridContent from "../test/TestGridContent";

class Search extends React.Component {

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
        <Content>
          <TestGridContent mode='results' numPaths={2} numCourses={7}/>

        </Content>
      </React.Fragment>
    );
  }
}

export default Search;