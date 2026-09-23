import React from "react";
import Post, { type PostType } from "./Post";
import "../styles/postlist.css";

const PostList: React.FC = () => {
  const posts: PostType[] = [
    {
      id: 1,
      title: "React Tips",
      author: "Alice",
      content: "Always break components into smaller reusable pieces...",
      date: new Date().toISOString(),
    },
    {
      id: 2,
      title: "TypeScript Basics",
      author: "Bob",
      content: "TypeScript helps catch errors early and improves maintainability...",
      date: "2026-09-20",
    },
    {
      id: 3,
      title: "Vite Setup",
      author: "Charlie",
      content: "Vite provides a fast dev server and optimized builds...",
      date: "2026-09-19",
    },
  ];

  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
