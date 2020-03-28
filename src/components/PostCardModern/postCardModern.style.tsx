import styled from 'styled-components';
import { themeGet } from 'styled-system';

export const PostCardModernWrapper = styled.div`
  position: relative;
`;

export const PostPreview = styled.div`
  margin-bottom: 30px;
  position: relative;
  min-height: 150px;
  img {
    border-radius: 3px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 80%;
    height: 80%;
    background-color: #757575;
    bottom: 0;
    left: 10%;
    filter: blur(15px);
  }
`;

export const PostDetails = styled.div``;

export const PostDate = styled.div`
  position: absolute;
  width: 75px;
  height: 75px;
  top: 30px;
  left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 6px;
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
  pointer-events: none;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  > span {
    font-size: 13px;
    font-weight: normal;
    line-height: 1;
    margin-top: 3px;
  }
`;

export const PostTitle = styled.h2`
  font-size: 21px;
  font-weight: 700;
  color: ${themeGet('colors.textColor', '#292929')};
  line-height: 1.53;
  margin-bottom: 10px;
  font-family: ${themeGet('fontFamily.0')};
  a {
    color: ${themeGet('colors.textColor', '#292929')};
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 990px) {
    font-size: 19px;
  }
  @media (max-width: 575px) {
    font-size: 18px;
  }
`;

export const Excerpt = styled.p`
  font-size: ${themeGet('fontSizes.3', '15')}px;
  color: ${themeGet('textColor', '#292929')};
  font-weight: 400;
  line-height: 2;
  margin-bottom: 0;
  @media (max-width: 990px) {
    font-size: 14px;
  }
`;

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 15px;

  a {
    display: block;
    margin-right: 30px;
    font-size: 14px;
    font-weight: 400;
    color: ${themeGet('primary', '#D10068')};
    @media (max-width: 990px) {
      font-size: 13px;
      margin-right: 25px;
    }
  }
`;
