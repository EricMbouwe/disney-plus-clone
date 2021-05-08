import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:before {
    content: '';
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/images/login-background.jpg');
    opacity: 0.8;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 100%;
  padding: 80px 40px;
  margin-top: -150px;
  text-align: center;
`;

const CTALogoOne = styled.img`
  width: 100%;
  max-width: 600px;
  min-height: 1px;
  margin-bottom: 12px;
  display: block;
`;

const SignUp = styled.a`
  width: 100%;
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
`;
