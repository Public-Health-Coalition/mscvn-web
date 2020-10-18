import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Box, Text } from '@primer/components';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {
  NewsletterWrapper,
  NewsletterInnerWrapper,
  NewsletterTitle,
  NewsletterDescription,
  NewsletterInputWrapper,
  ErrorMessage,
  SuccessMessage
} from './getInvolved/style';

type NewsletterProps = {};

const Newsletter: React.FunctionComponent<NewsletterProps> = ({ ...props }) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
      .then(({ msg, result }: any) => {
        if (result !== 'success') {
          throw msg;
        }
        setSuccess(msg);
        setError('');
        setEmail('');
      })
      .catch((err: any) => {
        setError(err);
        setSuccess('');
        setEmail('');
      });
  };
  return (
    <>
      <Box id="get-involved" />
      <NewsletterWrapper {...props}>
        <NewsletterInnerWrapper>
          <NewsletterTitle>Get Involved</NewsletterTitle>

          <Text fontSize={9}>
            <a target="_blank" href="https://www.facebook.com/MSCANVolunteer/">
              <FaFacebook />
            </a>
            &nbsp;
            <a target="_blank" href="https://twitter.com/mscanvolunteer">
              <FaTwitter />
            </a>
            &nbsp;
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCZcBF-uqP37PKMNN42BrA6A"
            >
              <FaYoutube />
            </a>
            &nbsp;
            <a target="_blank" href="https://www.instagram.com/mscanvolunteer">
              <FaInstagram />
            </a>
            <br /> <br />
          </Text>
          <Text fontSize={6}>
            The COVID-19 pandemic is a unique challenge for our world. That’s
            why we've started the Medical Student COVID-19 Action Network, a
            united nationwide alliance of medical students making a positive
            difference and serving the community during these difficult times.{' '}
            <br /> <br />
            Interested in participating on our team or sending information for
            our map? Please email{' '}
            <a target="_blank" href="mailto:office.mscan@gmail.com">
              office.mscan@gmail.com
            </a>
            .
          </Text>
          {/* <NewsletterInputWrapper onSubmit={handleSubmit}>
            {success ? (
              <SuccessMessage>{success} 🙂</SuccessMessage>
            ) : (
              <>
                <Input
                  type="email"
                  name="email"
                  placeholder="Write your email here"
                  onChange={handleChange}
                  value={email}
                  required
                />
                <Button title="Subscribe" type="submit" />
              </>
            )}
          </NewsletterInputWrapper>
           */}
          {error && (
            <ErrorMessage
              dangerouslySetInnerHTML={{ __html: `<span>*</span>${error}` }}
            />
          )}
        </NewsletterInnerWrapper>
      </NewsletterWrapper>
    </>
  );
};

export default Newsletter;
