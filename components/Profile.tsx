"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Image from 'next/image';
import ProfileImg from "../public/img/profile.jpg"

export default function Contact() {
  return (
    <ContactSection>
      <Container>
        <TextWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>Profile</Title>
        </TextWrapper>
        <ProfileWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image src={ProfileImg} width={300} height={400}  alt="profile"/>
          <div>
            이름 : 유성은<br/>
            생년월일 : 1994.05.10<br/>
            이메일 : yooseongeun@naver.com<br/>
            깃허브 : https://github.com/SeongSilver<br/><br/>

            경력 : 디윅스 2023.04 ~ 현재
          </div>
        </ProfileWrapper>
      </Container>
    </ContactSection>
  );
}

const ContactSection = styled.section`
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

const ProfileWrapper = styled(motion.div)`
  margin-top: 10%;
  display: flex;
  justify-content: between;
  gap: 32px;
`;