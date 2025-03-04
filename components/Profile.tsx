'use client';
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImg from "../public/img/profile.jpg";
import Mobile from "../public/img/mobile.svg";
import Mail from "../public/img/mail.svg";
import { useEffect, useState } from 'react';

export default function Profile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() =>{

    if(typeof window !== undefined){
      setIsMobile(window.innerWidth<=480 ? true : false)
    }

  },[])

  return (
    <ContactSection>
      <Container>
        <ProfileWrapper1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src={ProfileImg}
            width={isMobile? 150 : 300}
            height={isMobile? 200 : 400}
            alt="profile"
            style={{ marginRight: isMobile? 0:"64px" }}
          />

          <ProfileCard>
            <Title>YOO SEONG EUN</Title>
            <div style={{margin:"32px 0"}}>
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
        <div style={{lineHeight:"30px", marginTop:"64px", display:"block"}}>· 40억 규모 국가 사업의 1차 프로젝트에서 기관 내 데이터 공유 <BoldText>시스템을 구축하고, 유지보수까지 전담</BoldText>하였습니다. 이후 1차사업에 대한 이해도를 기반으로 2차 사업 기획에도 참여하여 프로젝트 확장을 도모하였습니다.<br/>
        · 웹앱을 설계 단계부터 개발하여 <BoldText>웹뷰로 감싸 배포 및 마켓에 등록한 경험</BoldText>이 있으며, 사내 POC에서는 Ionic 프레임워크를 활용해 <BoldText>앱 개발과 유사한 경험</BoldText>을 쌓았습니다.</div>
          </ProfileCard>
        </ProfileWrapper1>
        <ProfileWrapper2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProfileCard>
            <div style={{fontWeight:600, fontSize:"1.1rem"}}>학력/교육</div>
            <div>· 2021.12 ~ 2022.06</div>
            <div style={{marginLeft:"8px"}}>멀티캠퍼스 지능형 개발 풀스택 교육 수료</div>
            <div>· 2013.03 ~ 2020.08</div>
            <div style={{marginLeft:"8px"}}>가천대학교 졸업</div>
          </ProfileCard>
          <ProfileCard>
            <div style={{fontWeight:600, fontSize:"1.1rem"}}>경력</div>
            <div>· 2023.04 ~ 재직중(1년 10개월)</div>
            <div style={{marginLeft:"8px"}}>디윅스 수행사업부 주임</div>
          </ProfileCard>
          <ProfileCard>
            <div style={{fontWeight:600, fontSize:"1.1rem"}}>역량</div>
            <div>· 언어 / 프레임워크, 라이브러리</div>
            <div style={{marginLeft:"8px"}}>Typescript, Javascript / React, Next.js, Ionic, Styled-components</div>
            <div>· etc </div>
            <div style={{marginLeft:"8px"}}>Figma, Photoshop, Illust</div>
          </ProfileCard>
        </ProfileWrapper2>
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

const ProfileWrapper1 = styled(motion.div)`
  margin-top: 10%;
  display: flex;
  margin-bottom: 5rem;
  
  @media screen and (max-width: 480px) {
flex-direction: column;
align-items: center;
/* text-align:center; */
  }
`;
const ProfileWrapper2 = styled(motion.div)`
  margin-top: 8%;
  display: flex;
  justify-content: between;
  margin-bottom: 5rem;
  
  @media screen and (max-width: 480px) {
flex-direction: column;
gap:32px;
text-align:center;
  }
`;

const ProfileCard = styled.div`
  width: 100%;
  > div {
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    div: first-child {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  div:nth-child(2) {
    line-height: 24px;
  }
    
  @media screen and (max-width: 480px) {
flex-direction: column;
text-align:center;
align-items: center;
  }
`;

const BoldText = styled.span`
color:#fff;
font-weight:700;
font-size:1.2rem;
`;