"use client";

import styles from "@/styles/page.module.css";
import React from 'react';
import { useArticleContext } from '../../../contexts/ArticleContext';

export default function Articles({params}) {

    const { num } = React.use(params);
    const { news } = useArticleContext();

    console.log(news[num]);

    return (
        <div className={styles.container}>
            <h1>Article {num}</h1>
        </div>
    );
}