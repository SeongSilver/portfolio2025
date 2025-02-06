"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { TOKEN, DATABASE_ID } from "../config/index";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "digital", "paintings", "sculptures"];

  const works = [
    {
      id: 1,
      title: "Digital Dreamscape",
      category: "digital",
      year: "2024",
    },
    {
      id: 2,
      title: "Abstract Harmony",
      category: "paintings",
      year: "2023",
    },
    {
      id: 3,
      title: "Metal Flow",
      category: "sculptures",
      year: "2024",
    },
    {
      id: 4,
      title: "Neon Nights",
      category: "digital",
      year: "2023",
    },
    {
      id: 5,
      title: "Nature's Whisper",
      category: "paintings",
      year: "2024",
    },
    {
      id: 6,
      title: "Bronze Echo",
      category: "sculptures",
      year: "2023",
    },
  ];

  const filteredWorks = works.filter((work) =>
    selectedCategory === "all" ? true : work.category === selectedCategory
  );

  return (
    <Section>
      <Container>
        <ButtonGroup>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm capitalize"
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
        <Grid layout>
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden bg-zinc-900">
                  <CardContent className="p-0">
                    <div className="group relative">
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="text-xl font-semibold text-white">
                          {work.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-300">
                          {work.year}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Section>
  );
}

//빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2025-02-05",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Work Period",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  console.log(res);
  const projects = await res.json();

  const projectNames = projects.results.map(
    (aProject) => aProject.properties.Name.rich_text[0]?.plain_text
  );

  console.log(`projectNames : ${projectNames}`);

  return {
    props: { projects }, // will be passed to the page component as props
  };
}

const Section = styled.section`
  background-color: #82a0e8;
  padding: 5rem 0;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Grid = styled(motion.div)`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  .image {
    width: 100%;
    transition: transform 0.5s ease;
  }
  &:hover .image {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
`;

const Year = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #d1d5db;
`;
