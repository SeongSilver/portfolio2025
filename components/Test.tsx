import { getPosts } from '@/lib/notion';
import React from "react";

const Test = async () => {
    const db = getPosts();
    console.log(db);
  return <div>Test</div>;
};

export default Test;
