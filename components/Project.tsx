'use client'
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useState } from 'react';
import Modal from './ui/Modal';


export default function Project({db}:any) {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [projectInfo, setProjectInfo] = useState<any>(null);
  console.log(db);

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
                setProjectInfo(item)
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
                {/* {JSON.stringify(item.properties.siteImage)} */}
                {/* <>
                  {item.properties?.siteImage?.files.map(
                    (image: any, idx: number) => (
                      <div key={idx} >
                        <Image
                          src={image.file.url}
                          alt={image.file.name}
                          fill
                        />
                      </div>
                    )
                  )}
                </> */}
              </ProjectCard>
            ))}
        </ProjectWrapper>
      </Container>
      {
        isModal && <Modal isOpen={isModal} onClose={() => setIsModal(false)}>
          <ProjectDetail>
                  {projectInfo.properties?.siteImage?.files.map(
                    (image: any, idx: number) => (
                      <div key={idx} >
                        <Image
                          src={image.file.url}
                          alt={image.file.name}
                          fill
                        />
                      </div>
                    )
                  )}
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
  border:2px solid #efefef;
  border-radius:20px;
  position:relative;
  cursor:pointer;
  img{
    padding:4rem;
    object-fit: contain;
  }
  &:hover{
    border:2px solid #c6c6c6;
    background-color:#282828;
    transition:all 0.2s ease-in-out;
  }
  @media screen and (max-width: 480px) {
height:20vh;
  }
`;

const ProjectDetail = styled.div`
  width:100%;
  display: flex;
  overflow:scroll;
  img{
    padding:4rem;
    object-fit: contain;
  }
`;