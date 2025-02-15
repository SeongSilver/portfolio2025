import { Client } from '@notionhq/client';

export const notionDatabase = new Client({
    auth:process.env.NOTION_TOKEN,
})

export async function getPosts() {
    const response = await notionDatabase.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      
    });
    return response.results;
}
