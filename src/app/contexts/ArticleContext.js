"use client";

import { createContext, useContext, useState } from "react";

const ArticleContext = createContext();

export function ArticleProvider({ children }) {
    
  const [news, setNews] = useState([]);

  return (
    <ArticleContext.Provider value={{news, setNews}}>
      {children}
    </ArticleContext.Provider>
  );
}

export function useArticleContext() {
  return useContext(ArticleContext);
}