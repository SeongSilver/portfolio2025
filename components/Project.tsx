'use client'
import styled from "styled-components";
import { motion } from "framer-motion";


export default function Project({db}:any) {
  return (
    <ContactSection>
      <Container>
        <TextWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>Project</Title>
        </TextWrapper>
        <ProjectWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>

        {db.results.map((item, index)=> <div style={{marginBottom:"16px"}} key={index}>
          {(item.properties.Name.rich_text[0].text.content)}
        </div>)}
          </div>
        </ProjectWrapper>
      </Container>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  width:100%;
  height: 100vh;
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

const ProjectWrapper = styled(motion.div)`
  margin-top: 10%;
  display: flex;
  justify-content: between;
  gap: 32px;
`;