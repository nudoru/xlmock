import React from 'react';
import PropTypes from 'prop-types';
import LearningCard from "../components/LearningCard";
import CardLayout from "../layout/CardLayout";

/**
 * For quick mocking of pages
 */

class TestGridContent extends React.Component {

  static defaultProps = {};
  static propTypes = {
    title: PropTypes.string
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<CardLayout title={this.props.title} ctaLabel='View More'>
      <LearningCard type='course' duration='42 minutes' mobile>
        <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
          enim</h1>
        <p>Aliquam vulputate vestibulum eleifend.</p>
      </LearningCard>
      <LearningCard type='course' duration='42 minutes' mobile>
        <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
          enim</h1>
        <p>Aliquam vulputate vestibulum eleifend.</p>
      </LearningCard>
      <LearningCard type='course' duration='42 minutes' mobile>
        <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
          enim</h1>
        <p>Aliquam vulputate vestibulum eleifend.</p>
      </LearningCard>
      <LearningCard type='course' duration='42 minutes' mobile>
        <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
          enim</h1>
        <p>Aliquam vulputate vestibulum eleifend.</p>
      </LearningCard>
      <LearningCard type='path' duration='42 minutes' mobile>
        <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
          enim</h1>
        <p>Aliquam vulputate vestibulum eleifend.</p>
      </LearningCard>
      <LearningCard type='path' duration='42 minutes' mobile>
        <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
          enim</h1>
        <p>Aliquam vulputate vestibulum eleifend.</p>
      </LearningCard>
      <LearningCard type='path' duration='42 minutes' mobile>
        <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
          enim</h1>
        <p>Aliquam vulputate vestibulum eleifend.</p>
      </LearningCard>
    </CardLayout>);
  }
}

export default TestGridContent;