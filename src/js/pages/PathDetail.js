import React from 'react';
import Content from "../layout/Content";
import Hero from "../layout/Hero";
import HeroPathProgress from "../components/HeroPathProgress";
import HeroPathProgressMetadata from "../components/HeroPathProgressMetadata";
import Tag from '../components/Tag';
import TagCategoryGroup from "../components/TagCategoryGroup";
import PathActivitySection from "../components/PathActivitySection";
import PathActivitySubsection from "../components/PathActivitySubsection";
import {
  PathActivityRow,
  PathActivityTable
} from "../components/PathActivityTable";
import SVGIcon from "../components/SVGIcon";
import * as Lorem from '../utils/Lorem';
import Label from "../components/Label";
import PathAchievement from "../components/PathAchievement";
import {TestTagCategories} from "../test/TestTagCategories";

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
            <div className='l-path-detail__activities'>
              <PathActivitySection>
                <PathActivitySection.Title>{Lorem.title(5, 10)}</PathActivitySection.Title>
                <PathActivitySubsection>
                  <PathActivitySubsection.Title>{Lorem.title(5, 10)}</PathActivitySubsection.Title>
                  <PathActivitySubsection.Description>
                    <p>{Lorem.sentence(10, 50)}</p>
                  </PathActivitySubsection.Description>
                  <PathActivityTable>
                    <PathActivityRow>
                      <PathActivityRow.Icon><SVGIcon
                        name='package'/></PathActivityRow.Icon>
                      <PathActivityRow.Details>
                        <p
                          className="title">{Lorem.title(5, 15)}<Label>Optional</Label>
                        </p>
                        <p className="metadata">2 hours 30 minutes | Video</p>
                      </PathActivityRow.Details>
                      <PathActivityRow.Completion><SVGIcon name='check-circle'/></PathActivityRow.Completion>
                    </PathActivityRow>
                    <PathActivityRow>
                      <PathActivityRow.Icon><SVGIcon
                        name='package'/></PathActivityRow.Icon>
                      <PathActivityRow.Details>
                        <p className="title">{Lorem.title(3, 15)}</p>
                        <p className="metadata">2 hours 30 minutes | Video</p>
                      </PathActivityRow.Details>
                      <PathActivityRow.Completion><SVGIcon
                        name='circle'/></PathActivityRow.Completion>
                    </PathActivityRow>
                  </PathActivityTable>
                </PathActivitySubsection>
              </PathActivitySection>
              <PathActivitySection>
                <PathActivitySection.Title>{Lorem.title(5, 10)}</PathActivitySection.Title>
                <PathActivitySubsection>
                  <PathActivitySubsection.Title>{Lorem.title(5, 10)}</PathActivitySubsection.Title>
                  <PathActivitySubsection.Description>
                    <p>{Lorem.sentence(10, 50)}</p>
                  </PathActivitySubsection.Description>
                  <PathActivityTable>
                    <PathActivityRow>
                      <PathActivityRow.Icon><SVGIcon
                        name='package'/></PathActivityRow.Icon>
                      <PathActivityRow.Details>
                        <p
                          className="title">{Lorem.title(5, 15)}<Label>Optional</Label>
                        </p>
                        <p className="metadata">2 hours 30 minutes | Video</p>
                      </PathActivityRow.Details>
                      <PathActivityRow.Completion><SVGIcon name='check-circle'/></PathActivityRow.Completion>
                    </PathActivityRow>
                    <PathActivityRow>
                      <PathActivityRow.Icon><SVGIcon
                        name='package'/></PathActivityRow.Icon>
                      <PathActivityRow.Details>
                        <p className="title">{Lorem.title(3, 15)}</p>
                        <p className="metadata">2 hours 30 minutes | Video</p>
                      </PathActivityRow.Details>
                      <PathActivityRow.Completion><SVGIcon
                        name='circle'/></PathActivityRow.Completion>
                    </PathActivityRow>
                  </PathActivityTable>
                </PathActivitySubsection>
              </PathActivitySection>
              <PathAchievement>
                <PathAchievement.Icon>
                  <SVGIcon name='award' width='32' height='32'/>
                </PathAchievement.Icon>
                <PathAchievement.Title>Eternal Glory (and 500 CE credits)</PathAchievement.Title>
              </PathAchievement>

            </div>
            <div className='l-path-detail__metadata'>
              <h1 className='l-path-detail__metadata__title'>About this
                path</h1>
              <p>{Lorem.sentence(50,300)}</p>
              <h1 className='l-path-detail__metadata__title'>Additional
                Information</h1>
              <TestTagCategories/>
            </div>
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default PathDetail;