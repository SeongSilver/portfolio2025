'use client'
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Modal from './ui/Modal';
import Slider from 'react-slick';
import { projectTraceSource } from 'next/dist/build/swc/generated-native';

export default function Project({db}:any) {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [projectInfo, setProjectInfo] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true, 
      autoplaySpeed: 1300,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (current: number) => setCurrentSlide(current),
  };
  console.log(db);

  useEffect(() => {
    if (typeof window === "undefined") return ;
  },[])

  const changeBr = (text:string) => {

  }

  if(!db){
    return <>데이터가 없음</>
  }

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
          {db.results.map((item: any, index: number) => (
              <ProjectCard style={{ marginBottom: "16px" }} key={index} onClick={() => {
                setIsModal(true);
                setProjectInfo(item.properties);
              }}>
                <Image
                  src={item.cover?.file.url}
                  alt={item.id}
                  fill
                  objectFit="contain"
                />
                <div style={{position:"absolute", top:"80%", left:"50%", transform:"translate(-50%, -50%)", textAlign:"center",  fontWeight:"600"}}>
                  {item.properties.Name.rich_text[0]?.text.content}<br/>
                  {item.properties.projectYear.rich_text[0]?.text.content}
                </div>
              </ProjectCard>
            ))}
        </ProjectWrapper>
      </Container>
      {
        isModal && <Modal isOpen={isModal} onClose={() => setIsModal(false)}>
    
          <ProjectDetail>
            <div>
            <div style={{display:"flex", flexDirection:"column", gap:"8px", alignItems:"center"}}>
            <div style={{fontSize:"1.5rem", fontWeight:"700", display:"flex", alignItems:"center", gap:"8px"}}>{projectInfo.Name.rich_text[0]?.text.content}<span style={{ fontSize:"1rem", fontWeight:400}}>{`[${projectInfo.workPeriod?.date?.start} ~ ${projectInfo.workPeriod?.date?.
                end}]`}</span></div>
              
                 <div style={{textAlign:"center", fontSize:"1.1rem", fontWeight:"700", whiteSpace: "pre-line" }}>{projectInfo.description.rich_text[0].text.content}</div>
            </div>
           
              <div>
                <span style={{fontSize:"1.2rem", fontWeight:"700"}}>사용기술</span>
                <div style={{ whiteSpace: "pre-line" }}>
                  {projectInfo.Tag.multi_select.map((item, index) => <span key={item.id}>{`${item.name}${index === projectInfo.Tag.multi_select.length-1 ? "":", "}`}</span>)}
                </div>
              </div>
              <div>
                <span style={{fontSize:"1.2rem", fontWeight:"700"}}>주요 기능</span>
                <div style={{ whiteSpace: "pre-line" }}>
                  {projectInfo.description.rich_text[0].text.content}
                </div>
              </div>
              <div >
                <span style={{ fontSize:"1.2rem", fontWeight:"700"}}>담당한 역할과 기능</span>
                <div style={{ height:"50%", whiteSpace: "pre-line", overflowY:"scroll" }}>
                  {projectInfo.working.rich_text[0].text.content}
                </div>
              </div>
          </div>
            <div style={{margin:"5% 3% 0 3%", overflow:"scroll", display:"flex", gap:"16px", height:"80%"}}>
              {projectInfo.siteImage.files.length > 0 && projectInfo.siteImage.files.map((item:any, index:number) =>
              <div key={index} style={{width:"100%", display:"flex", flexDirection:"column", position:"relative"}}>
                <Image
                  src={item.file.url}
                  alt={item.name}
                  fill
                  style={{objectFit:"contain"}}

                />
                {item.name.split(".")[0]}
                </div>
              )}
            </div>
          </ProjectDetail>
         
        </Modal>
      }
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
  @media screen and (max-width: 480px) {
flex-direction: column;
  }
`;

const ProjectCard = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  gap: 8px;
  /* overflow-x: scroll; */
  background-color: #efefef;
  color: #efefef;
  position:relative;
  cursor:pointer;
  img{
    padding:4rem;
    object-fit: contain;
  }
  &:hover{
    background-color:#444444;
    transition:all 0.2s ease-in-out;
  }
  @media screen and (max-width: 480px) {
height:20vh;
  }
`;

const ProjectInfo = styled.div`
  width: 100%;
  height:20%;
  margin-bottom:16px;
  display: flex;
  flex-direction: column;
  gap:16px;
`;
const ProjectDetail = styled.div`
  padding:16px 0;
  width: 100%;
  height:100%;
  display: flex;
  gap: 16px;
  >div:first-child{
    margin-top:2%;
    width:40%;
    display:flex;
    flex-direction: column;
    gap:32px;
    @media screen and (max-width: 480px) {
    width:100%;
    }
  }
  >div:last-child{
    width:60%;
    @media screen and (max-width: 480px) {
    width:100%;
    }
  }

  @media screen and (max-width: 480px) {
    overflow-y:scroll;
    overflow-x:hidden;
  flex-direction: column;
  }
`;
