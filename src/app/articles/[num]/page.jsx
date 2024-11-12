"use client";

import styles from "@/styles/articlePage.module.css";
import React from "react";
import { useArticleContext } from "../../../contexts/ArticleContext";

export default function Articles({ params }) {
  const { num } = React.use(params);
  const { news } = useArticleContext();

  const article = news[num]
  console.log(article)

  return <div className={styles.container}>
    <div className={styles.articleContainer}>
      <h1>{article.title}</h1>
      <h3>{article.description}</h3>
      <img className={styles.image} src={article.urlToImage} alt={article.title}/>
      <div className={styles.articleDataContainer}>
        <p><strong>{article.author}</strong></p>
        <p className={styles.publishText}>{article.publishedAt}</p>
      </div>
      <div className={styles.contentContainer}>
        {article.content}
      </div>
    </div>
  </div>;
}
