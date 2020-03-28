import * as React from 'react';
import PersonalBlogWrapper from './style';
import Posts from './Posts';
import Banner from './Banner';

type PersonalBlogProps = {};

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({
  ...props
}) => {
  return (
    <PersonalBlogWrapper {...props}>
      <Banner />
      <Posts />
    </PersonalBlogWrapper>
  );
};

export default PersonalBlog;
