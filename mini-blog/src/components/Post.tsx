import React from "react";
import styled from "styled-components";

export type PostType = {
  id: number;
  title: string;
  author: string;
  content: string;
  date: string;
};

type Props = {
  post: PostType;
};

const PostCard = styled.div<{ highlight: boolean }>`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ highlight }) => (highlight ? "#f0f8ff" : "#fff")};
`;

const Post: React.FC<Props> = ({ post }) => {
  const isHighlighted = post.author === "Alice"; // Conditional styling example
  const isNew = new Date(post.date) > new Date(Date.now() - 24 * 60 * 60 * 1000);

  return (
    <PostCard highlight={isHighlighted}>
      <h2>{post.title}</h2>
      <p><strong>By:</strong> {post.author}</p>
      <p>{post.content.slice(0, 50)}...</p>
      <small>{post.date}</small>
      {isNew && <span style={{ color: "red", fontWeight: "bold" }}> New!</span>}
    </PostCard>
  );
};

export default React.memo(Post);
