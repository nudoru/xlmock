import React from 'react';
import PropTypes from 'prop-types';

class TagCategoryGroup extends React.Component {

  static Title = ({children}) => <h2 className='c-tagcategory__title'>{children}</h2>;

  static Group = ({children}) => <div className='c-tagcategory__tags'>{children}</div>;

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return <div className='c-tagcategory__group'>{this.props.children}</div>;
  }
}

export default TagCategoryGroup;