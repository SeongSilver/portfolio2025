
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImg from "../public/img/profile.jpg";
import Mobile from "../public/img/mobile.svg";
import Mail from "../public/img/mail.svg";

export default function Contact() {
  return (
    <ContactSection>
      <Container>
        <ProfileWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src={ProfileImg}
            width={300}
            height={400}
            alt="profile"
            style={{ marginRight: "64px" }}
          />

          <ProfileCard>
            <Title>YOO SEONG EUN</Title>
            <div>
              {" "}
              <Image
                src={Mobile}
                width={24}
                height={24}
                alt="mobile"
                style={{ marginRight: "4px" }}
              />
              010 · 4370 · 0743
            </div>
            <div>
              {" "}
              <Image
                src={Mail}
                width={24}
                height={24}
                alt="mail"
                style={{ marginRight: "4px" }}
              />
              yooseongeun@naver.com
            </div>
          </ProfileCard>
        </ProfileWrapper>
        <ProfileWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProfileCard>
            <div>학력/교육</div>
            <div>· 2021.12 ~ 2022.06</div>
            <div>멀티캠퍼스 지능형 개발 풀스택 교육 수료</div>
            <div>· 2013.03 ~ 2020.08</div>
            <div>가천대학교 졸업</div>
          </ProfileCard>
          <ProfileCard>
            <div>경력</div>
            <div>· 2023.04 ~ 재직중(1년 10개월)</div>
            <div>디윅스 수행사업부 주임</div>
          </ProfileCard>
          <ProfileCard>
            <div>역량</div>
            <div>React, Next.js, styled-components, TypeScript</div>
          </ProfileCard>
        </ProfileWrapper>
      </Container>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
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
  margin-bottom: 5rem;
`;

const ProfileCard = styled.div`
  width: 100%;
  > div {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
  }
  div: first-child {
    font-size: 1.2rem;
    font-weight: 700;
  }

  div:nth-child(2) {
    line-height: 24px;
  }
`;
