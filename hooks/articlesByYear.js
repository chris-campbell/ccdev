import { useState, useEffect } from "react";

const useArticles = (allArticles) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(years);
  }, []);

  const isNotIndex = (index) => {
    return index < 0;
  };

  const years = allArticles.reduce((sortedByYear, currentArticle) => {
    const year = new Date(currentArticle.createdAt).getFullYear();
    const articleIndex = sortedByYear.findIndex((ob) => ob[year]);

    if (isNotIndex(articleIndex)) {
      let articles = {};
      articles[year] = [];
      articles[year].push(currentArticle);
      sortedByYear.push(articles);
    } else {
      sortedByYear[articleIndex][year].push(currentArticle);
    }

    return sortedByYear;
  }, []);

  return [list];
};

export default useArticles;
