"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { useEffect } from "react";
import styled from "styled-components";

export default function Home() {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (scrollTimeout) return;

      scrollTimeout = setTimeout(() => {
        const scrollAmount = window.innerHeight;
        if (event.deltaY > 0) {
          window.scrollBy({ top: scrollAmount, behavior: "smooth" });
        } else {
          window.scrollBy({ top: -scrollAmount, behavior: "smooth" });
        }
        scrollTimeout = null;
      }, 800); // 스크롤 딜레이 조정
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      <Main className="min-h-screen bg-black text-white">
        <Hero />
        <Portfolio />
        <Contact />
        <Footer />
      </Main>
    </>
  );
}

const Main = styled.main`
  min-height: 100vh;
  background-color: black;
  color: white;
`;
