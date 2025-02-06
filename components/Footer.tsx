"use client";

import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterText>
          © {new Date().getFullYear()} SeongSilver. All rights reserved.
        </FooterText>
        <SocialLinks>
          <SocialLink href="#">Instagram</SocialLink>
          <SocialLink href="#">Twitter</SocialLink>
          <SocialLink href="#">LinkedIn</SocialLink>
        </SocialLinks>
      </FooterWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  height: 100px;
  border-top: 1px solid #27272a;
  background-color: black;
  padding: 2rem 0;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: #9ca3af;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;
