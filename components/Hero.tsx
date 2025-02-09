import styled from "styled-components";
import { motion } from "framer-motion";

export default function App() {
  return (
    <Container>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          2년차 프론트엔드 개발자
          <br /> 유성은입니다
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          React와 TypeScript를 기반으로 국가 SI 프로젝트, 애플리케이션 개발,<br/> 솔루션 UI/UX 설계 등 다양한 경험을 쌓아왔습니다.<br/>
          스타트업 환경에서 기획자, 디자이너, 백엔드 개발자, 고객과 긴밀히 협력하며<br/> 원활한 소통을 통해 프로젝트의 완성도와 사용자 만족도를 높이는 데 주력하고 있습니다.
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
