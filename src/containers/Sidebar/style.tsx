import styled from 'styled-components';
import { themeGet } from 'styled-system';

export const SidebarWrapper = styled.div`
  flex: 0 0 360px;
  max-width: 360px;
  @media (max-width: 1249px) {
    flex: 0 0 320px;
    max-width: 320px;
  }
  @media (max-width: 1100px) {
    flex: 0 0 280px;
    max-width: 280px;
  }

  @media (max-width: 990px) {
    flex: 0 0 220px;
    max-width: 220px;
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 60px;
  }
`;

export const SidebarWidger = styled.div`
  position: relative;
  padding: 30px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  margin-bottom: 30px;

  @media (max-width: 1249px) {
    padding: 25px;
  }

  @media (max-width: 1100px) {
    padding: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .featured_post {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
    .post_preview {
      flex: 0 0 70px;
      margin-right: 20px;
      @media (max-width: 990px) {
        flex: 0 0 40px;
        margin-right: 10px;
      }
    }
    .post_title {
      font-size: 15px;
      @media (max-width: 990px) {
        font-size: 13px;
      }
    }
    .post_tags {
      @media (max-width: 990px) {
        display: none;
      }
    }
  }
`;

export const WidgetTitle = styled.h2`
  font-size: 21px;
  margin-bottom: 30px;

  @media (max-width: 1100px) {
    font-size: 18px;
    margin-bottom: 25px;
  }

  @media (max-width: 990px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
export const TagItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
  font-size: 15px;
  &:last-child {
    margin-bottom: 0;
  }

  > span {
    color: ${themeGet('primary', '#D10068')};
    margin-right: 15px;
  }

  a {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: ${themeGet('colors.textColor', '#292929')};
    padding: 5px 0;
    transition: 0.15s ease-in-out;

    > span {
      margin-left: 10px;
    }
    &:hover {
      color: ${themeGet('primary', '#D10068')};
    }
  }
`;

export const InstagramWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
`;

export const InstagramPhoto = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 5px;

  > a {
    border-radius: 3px;
    overflow: hidden;
    display: block;
    &:hover {
      > div {
        transform: scale(1.1);
      }
    }
    > div {
      transition: 0.15s ease-in-out;
    }
  }
`;
