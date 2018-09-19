import React from 'react';
import Content from "../layout/Content";

class Calendar extends React.PureComponent {

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
          <h1>Calendar</h1>
        </Content>
      </React.Fragment>
    );
  }
}

export default Calendar;