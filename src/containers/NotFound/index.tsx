import * as React from 'react';
import { Link } from 'gatsby';
import { IoMdArrowRoundBack } from 'react-icons/io';
import ImageWrapper from '../home/VideoWelcome';
import {
  NotFoundWrapper,
  NotFoundContent,
  NotFoundImage,
  Goback,
  Icon
} from './style';
import notFoundSvg from '../../../content/assets/not_found.svg';

interface NotFoundProps {}

const NotFound: React.FunctionComponent<NotFoundProps> = (props) => {
  return (
    <NotFoundWrapper>
      <NotFoundContent>
        <h1>Page Not Found</h1>
        <p>
          The page you are looking for isn’t available. Try to search again or
          use the Go Back button below.
        </p>
        <Goback>
          <Link to="/">
            <Icon>
              <IoMdArrowRoundBack />
            </Icon>
            Go Back
          </Link>
        </Goback>
      </NotFoundContent>
      <NotFoundImage>
        <img width="300px" src={notFoundSvg} />
      </NotFoundImage>
    </NotFoundWrapper>
  );
};

export default NotFound;
