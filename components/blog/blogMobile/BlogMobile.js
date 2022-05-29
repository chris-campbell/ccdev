import useArticles from "../../../hooks/articlesByYear";
import Image from "next/image";
import { useEffect, useState } from "react";
import IndexButtons from "./indexButtons/IndexButtons";
import NavButton from "./navButton/NavButton";
import Excerpt from "./excerpt/Excerpt";
import PublishDate from "./publishDate/PublishDate";
import * as S from "./styles/styles";

const BlogMobile = ({ allArticles }) => {
  const [activeList, setActiveList] = useState([]);
  const [list] = useArticles(allArticles);

  useEffect(() => {
    const year = new Date().getFullYear();
    if (list.length > 0) setActiveList(list[0][year]);
  }, [list]);

  return (
    <S.BlogMobileContainer>
      <IndexButtons list={list} setList={setActiveList} />

      <div>
        {activeList.map((item) => (
          <S.CurrentListingContainer key={item.id}>
            <PublishDate date={item.createdAt} />
            <h2>{item.title}</h2>
            <div>
              <Image src={item.coverImage?.url} width={900} height={600} />
            </div>
            <S.NavContent>
              <Excerpt content={item.excerpt} />
              <NavButton slug={item.slug} />
            </S.NavContent>
          </S.CurrentListingContainer>
        ))}
      </div>
    </S.BlogMobileContainer>
  );
};

export default BlogMobile;
