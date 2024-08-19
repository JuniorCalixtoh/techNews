import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [downloadedArticles, setDownloadedArticles] = useState([]);

  const addArticleToDownload = (article) => {
    setDownloadedArticles((prevArticles) => {
      const articleExists = prevArticles.some((a) => a.url === article.url);
      if (!articleExists) {
        return [...prevArticles, article];
      }
      return prevArticles;
    });
  };

  const removeArticle = (url) => {
    setDownloadedArticles((prevArticles) =>
      prevArticles.filter((article) => article.url !== url)
    );
  };

  return (
    <NewsContext.Provider value={{ downloadedArticles, addArticleToDownload, removeArticle }}>
      {children}
    </NewsContext.Provider>
  );
};
