import React from 'react';
import TagCategoryGroup from "../components/TagCategoryGroup";
import Tag from "../components/Tag";

export const TestTagCategories = () => <TagCategoryGroup>
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
</TagCategoryGroup>;