"use client";

import styles from "@/styles/page.module.css";
import { useEffect } from "react";
import ArticlePreview from "@/components/ArticlePreview";
import { useArticleContext } from "@/contexts/ArticleContext";

export default function Home() {
  const { news, setNews } = useArticleContext();

  const fetchData = async () => {
    const response = await fetch("/api/news");
    const data = await response.json();
    setNews(data.articles);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <div className={styles.newsContainer}>
        {news.map((article, index) => (
          <ArticlePreview key={index} i={index} data={article} />
        ))}
      </div>
    </div>
  );
}