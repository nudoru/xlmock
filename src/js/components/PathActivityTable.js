import React from 'react';

export class PathActivityTable extends React.Component {

  static defaultProps = {};
  static propTypes    = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    let {children, ...rest} = this.props;

    return (<div
      className='l-path-detail__activities__activity__table' {...rest}>{children}</div>);
  }
}

export class PathActivityRow extends React.Component {

  static Icon       = ({children, ...rest}) => <div
    className='l-path-detail__activities__activity__row__icon' {...rest}>{children}</div>
  static Details    = ({children, ...rest}) => <div
    className='l-path-detail__activities__activity__row__details' {...rest}>{children}</div>
  static Completion = ({children, ...rest}) => <div
    className='l-path-detail__activities__activity__row__completion' {...rest}>{children}</div>

  static defaultProps = {};
  static propTypes    = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    let {children, ...rest} = this.props;

    return (<div
      className='l-path-detail__activities__activity__row' {...rest}>{children}</div>);
  }
}