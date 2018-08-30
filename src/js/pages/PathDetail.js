import React from 'react';
import Content from "../layout/Content";
import Hero from "../layout/Hero";
import HeroPathProgress from "../components/HeroPathProgress";
import HeroPathProgressMetadata from "../components/HeroPathProgressMetadata";
import Tag from '../components/Tag';
import TagCategoryGroup from "../components/TagCategoryGroup";

class PathDetail extends React.Component {

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
          <HeroPathProgress/>
          <HeroPathProgressMetadata/>
        </Hero>
        <Content>
          <div className='l-path-detail'>
            <div className='l-path-detail__activities'>asdfasdfasdf</div>
            <div className='l-path-detail__metadata'>
              <h1 className='l-path-detail__metadata__title'>About this
                path</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.</p>
              <h1 className='l-path-detail__metadata__title'>Additional
                Information</h1>
              <TagCategoryGroup>
                <TagCategoryGroup.Title>Product</TagCategoryGroup.Title>
                <TagCategoryGroup.Group><Tag>Ansible</Tag></TagCategoryGroup.Group>
                <TagCategoryGroup.Title>Language</TagCategoryGroup.Title>
                <TagCategoryGroup.Group><Tag>English</Tag></TagCategoryGroup.Group>
                <TagCategoryGroup.Title>Proficiency</TagCategoryGroup.Title>
                <TagCategoryGroup.Group><Tag>Intermediate</Tag></TagCategoryGroup.Group>
                <TagCategoryGroup.Title>Target Role</TagCategoryGroup.Title>
                <TagCategoryGroup.Group><Tag>Consultant</Tag><Tag>Developer</Tag><Tag>Engineer</Tag></TagCategoryGroup.Group>
                <TagCategoryGroup.Title>Keywords</TagCategoryGroup.Title>
                <TagCategoryGroup.Group><Tag>Ansible</Tag><Tag>Cloud</Tag><Tag>Automation</Tag><Tag>Administration</Tag></TagCategoryGroup.Group>
              </TagCategoryGroup>
            </div>
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default PathDetail;