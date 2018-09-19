import React from 'react';
import Content from "../layout/Content";
import CategoryCard from "../components/CategoryCard";

const CATEGORIES = [
  'All Associates',
  'Account Manager',
  'Ansible Sales Specialist',
  'Cloud Sales Specialist',
  'Consultant',
  'Customer Service Representative',
  'Customer Success Manager',
  'Customer Support',
  'Customer Support Specialist',
  'Delivery',
  'Developer',
  'Inside Sales Professional',
  'Marketing',
  'Middleware Sales Specialist',
  'Partner Account Manager (PAM)',
  'People Manager',
  'Product Manager',
  'Project Manager',
  'Quality Engineer',
  'Sales',
  'Sales Engineer',
  'Software Engineer',
  'Software Maintenance Engineer',
  'Solution Architect',
  'Storage Sales Specialist',
  'Systems Administrator',
  'Technical Account Manager',
  'Technical Services Manager (TSM)',
  'Technical Support Engineer',
  'Technical Writer',
];

class Catalog extends React.PureComponent {

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
          <div className='c-section-title-block'>
            <h1>Catalog</h1>
            <p>Explore the catalog by job area.</p>
          </div>

          <div className='l-categoriesgrid'>
            {
              CATEGORIES.map((name, i) => {
                return <CategoryCard key={i}>
                  <CategoryCard.Background></CategoryCard.Background>
                  <CategoryCard.Title>{name}</CategoryCard.Title>
                </CategoryCard>
              })
            }
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default Catalog;