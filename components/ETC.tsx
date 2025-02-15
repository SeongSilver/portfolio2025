"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export default function ETC() {
  return (
    <ContactSection>
      <Container>
        <TextWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>ETC</Title>
          <Description>
            Interested in collaborating or commissioning a piece? Let's create
            something amazing together.
          </Description>
        </TextWrapper>
      </Container>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  height: calc(100vh - 100px);
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
`;

const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TextWrapper = styled(motion.div)`
  max-width: 42rem;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.875rem;
  font-weight: bold;
  letter-spacing: -0.02em;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

const Description = styled.p`
  margin-bottom: 2rem;
  color: #9ca3af;
`;

const BackgroundLines = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.3;

  svg {
    width: 100%;
    height: 100%;
  }
`;
