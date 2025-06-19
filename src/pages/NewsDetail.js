import React from "react";
import { useParams } from "react-router-dom";
import newsData from "../data/newsData";

const NewsDetail = () => {
  const { id } = useParams();
  const article = newsData.find(item => item.id === parseInt(id));

  if (!article) return <p>Article not found.</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} style={{ width: "100%" }} />
      <p>{article.content}</p>
    </div>
  );
};

export default NewsDetail;