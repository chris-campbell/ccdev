import { useState, useEffect } from "react";
import axios from "axios";

export function useGetAllArticles() {
  const [mainArticles, setMainArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://laymanns.com:9000/getAllArticles", {
        withCredentials: true,
      })
      .then((resp) => {
        setMainArticles(resp.data);
      });
  }, []);

  return mainArticles;
}
