import { notionDatabase } from '@/lib/notion';
import HomePage from './HomePage';
import Project1 from '@/components/Project1';
import ETC from '@/components/ETC';
import Hero from '@/components/Hero';
import Profile from '@/components/Profile';
import Footer from '@/components/Footer';
 
export default async function Home() {

  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error('데이터베이스 아이디가 없습니다.');
  }
  const db = await notionDatabase.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });
 
  console.log(db);
 
  console.log(db.results);
 
  return <main>    
    <Hero />
  <Profile />
  <Project1 db={db} />
  <ETC />
  <Footer />

  </main>;
}