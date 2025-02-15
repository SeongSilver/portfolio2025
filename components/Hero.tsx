'use client'
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Container>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          프론트엔드 개발자
          <br /> 유성은입니다
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>2년 차 프론트엔드 개발자로, React와 TypeScript를 기반으로 다양한 프로젝트를 경험해왔습니다.<br/> 대규모 SI 국가 프로젝트와 웹앱 서비스를 시작부터 끝까지 개발하는 과정속에서 성공과 실패를 반복하며 성장중입니다.</p><br/>
          <p></p>
        </Subtitle>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 1rem;
  text-align: center;
`;

const Title = styled(motion.h1)`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.05em;

  @media (min-width: 640px) {
    font-size: 4.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 6rem;
  }
`;

const Subtitle = styled(motion.p)`
  max-width: 1000px;
  font-size: 1.125rem;
  color: #9ca3af; // Tailwind의 text-gray-400

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;
