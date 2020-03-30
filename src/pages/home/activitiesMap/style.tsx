import styled from 'styled-components';
import BannerBG from '../../../images/banner-bg.jpg';

export const BannerWrapper = styled.div`
  position: relative;
  padding: 80px 0;
  background-color: #ffffff;
  background-image: url(${BannerBG});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 121px);
  @media (max-width: 1500px) {
    padding: 80px 0;
  }
  @media (max-width: 990px) {
    padding: 60px 0;
  }
  @media (max-width: 767px) {
    height: calc(100vh - 52px);
    padding: 40px 0;
  }
`;

export const BannerInner = styled.div`
  margin: 0 auto;
  width: 100%;

  @media (min-width: 991px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (max-width: 990px) {
    padding-left: 45px;
  }

  @media (max-width: 767px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`;

export const FeaturePosts = styled.div`
  width: 460px;
  max-width: 100%;
  background-color: #fff;
  border-radius: 6px;
  padding: 45px;
  @media (max-width: 990px) {
    width: 400px;
  }

  @media (max-width: 767px) {
    padding: 25px;
  }

  .featured_post {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
