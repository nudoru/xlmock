import React from 'react';
import Content from "../layout/Content";
import CategoryCard from "../components/CategoryCard";
import {slugify} from '../utils/Toolbox';
import {CatalogStructure, TagCategories} from '../store/model';
import Hero from "../layout/Hero";
import * as Lorem from "../utils/Lorem";

class Catalog extends React.Component {

  static defaultProps = {};
  static propTypes    = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const catalogID = this.props.match.params.id;

    return (
      <React.Fragment>
        <Hero>
          <Hero.Content>
            <div className='l-categorieshero'>
              <h1>Catalog for <strong>{CatalogStructure[catalogID]}</strong></h1>
            </div>
          </Hero.Content>
        </Hero>
        <Content>
          <div className='c-section-title-block'>
            <h1>Choose one of the categories below to all courses and paths available.</h1>
          </div>
          <div className='l-categoriesgrid'>
            {
              TagCategories[catalogID].map((name, i) => {
                return <CategoryCard id={slugify(name)} key={i}>
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