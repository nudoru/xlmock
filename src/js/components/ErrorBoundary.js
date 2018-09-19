import React from 'react';

class ErrorBoundary extends React.PureComponent {

  state = {
    error: null
  };

  componentDidCatch(error, information) {
    console.error(information);
    this.setState({error});
  }

  render() {
    return this.state.error ? <p>Error! (╯°□°）╯︵ ┻━┻ </p> : this.props.children;
  }
}

export default ErrorBoundary;